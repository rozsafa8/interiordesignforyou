import * as Sentry from "@sentry/react";

export const initSentry = () => {
  Sentry.init({
    dsn: "https://2034216ae437759d64e12730415d5736@o4508751275098112.ingest.de.sentry.io/4510869102985296",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [/^https:\/\/interiordesignforyou\.com/],
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    sendDefaultPii: false,
  });
};

export const captureMessage = (message: string) => {
  Sentry.captureMessage(message);
};
