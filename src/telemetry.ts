type IdleCallback = (deadline: { timeRemaining: () => number; didTimeout: boolean }) => void

type IdleRequestOptions = {
  timeout?: number
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleCallback, options?: IdleRequestOptions) => number
}

type SentryModule = typeof import('./sentry')

let sentryPromise: Promise<SentryModule | null> | null = null
let idleScheduled = false
const pendingMessages: string[] = []

const loadSentry = () => {
  if (!import.meta.env.PROD) {
    return Promise.resolve(null)
  }

  if (!sentryPromise) {
    sentryPromise = import('./sentry')
      .then((module) => {
        module.initSentry()
        if (pendingMessages.length > 0) {
          pendingMessages.splice(0).forEach((message) => module.captureMessage(message))
        }
        return module
      })
      .catch(() => null)
  }

  return sentryPromise
}

const scheduleIdle = (callback: () => void) => {
  const idleWindow = window as IdleWindow

  if (idleWindow.requestIdleCallback) {
    idleWindow.requestIdleCallback(() => callback(), {timeout: 2500})
    return
  }

  window.setTimeout(callback, 2500)
}

export const initTelemetry = () => {
  if (!import.meta.env.PROD) {
    return
  }

  scheduleIdle(() => {
    void loadSentry()
  })
}

export const captureMessage = (message: string) => {
  if (!import.meta.env.PROD) {
    return
  }

  if (sentryPromise) {
    void loadSentry().then((module) => {
      module?.captureMessage(message)
    })
    return
  }

  pendingMessages.push(message)
  if (idleScheduled) {
    return
  }

  idleScheduled = true
  scheduleIdle(() => {
    idleScheduled = false
    void loadSentry()
  })
}
