import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// Inject a <link rel="preload"> for the hero portrait AVIF so the browser can
// fetch it before the React bundle is parsed, improving LCP on mobile.
function preloadHeroImagePlugin(): Plugin {
  let heroAvifUrl = ''
  return {
    name: 'preload-hero-image',
    generateBundle(_, bundle) {
      for (const key of Object.keys(bundle)) {
        if (key.includes('IMG_0563') && key.endsWith('.avif')) {
          // Pick the smallest AVIF variant for fastest mobile preload.
          // The <picture> srcset lets the browser still choose the best size.
          const current = heroAvifUrl
          if (!current || key < current) heroAvifUrl = '/' + key
        }
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (!heroAvifUrl) return html
        const tag = `<link rel="preload" as="image" type="image/avif" href="${heroAvifUrl}" fetchpriority="high" />\n    `
        return html.replace('<link rel="icon"', tag + '<link rel="icon"')
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), imagetools(), preloadHeroImagePlugin()],
})
