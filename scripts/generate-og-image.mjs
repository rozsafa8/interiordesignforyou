import sharp from '../node_modules/sharp/lib/index.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const WIDTH = 1200
const HEIGHT = 630

// SVG overlay: gradient + text
const overlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1a1612" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#1a1612" stop-opacity="0.80"/>
      <stop offset="100%" stop-color="#1a1612" stop-opacity="0.30"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)"/>

  <!-- Dot accent -->
  <circle cx="80" cy="295" r="7" fill="#a7b39a"/>

  <!-- Label -->
  <text
    x="108" y="302"
    font-family="Georgia, serif"
    font-size="15"
    letter-spacing="6"
    fill="#a7b39a"
    dominant-baseline="middle"
    text-anchor="start"
    text-transform="uppercase"
  >FOUNDER · INTERIA.UAE · DUBAI</text>

  <!-- Main heading -->
  <text
    x="80" y="390"
    font-family="Georgia, serif"
    font-size="58"
    font-weight="600"
    fill="#f5f1ea"
    dominant-baseline="auto"
  >Design by Veronika</text>

  <!-- Tagline -->
  <text
    x="80" y="442"
    font-family="Georgia, serif"
    font-size="22"
    fill="#c9bfb4"
    dominant-baseline="auto"
  >Elegant interiors defined by texture, light, and timeless detail.</text>

  <!-- Bottom divider -->
  <rect x="80" y="510" width="60" height="2" fill="#a7b39a"/>
  <text
    x="80" y="545"
    font-family="Georgia, serif"
    font-size="14"
    letter-spacing="3"
    fill="#8a7f75"
  >INTERIORDESIGNFORYOU.COM</text>
</svg>
`

const portraitPath = join(root, 'src/assets/IMG_0563.jpeg')
const outputPath = join(root, 'public/og-image.jpg')

await sharp(portraitPath)
  .resize(WIDTH, HEIGHT, { position: 'right' })
  .composite([
    {
      input: Buffer.from(overlay),
      top: 0,
      left: 0,
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(outputPath)

console.log(`OG image written to ${outputPath}`)
