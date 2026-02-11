import projectOne from './assets/IMG_0880.jpeg'
import projectTwo from './assets/IMG_4578.jpg'
import projectThree from './assets/CB487C77-39CF-4AAA-BC17-C95694EAFF3C.jpeg'
import projectFour from './assets/IMG_6825.jpeg'
import projectFive from './assets/IMG_0500.jpeg'
import projectSix from './assets/IMG_0466.jpg'
import portrait from './assets/IMG_0563.jpeg'
import approachPortrait from './assets/3B8BC17A-613C-4783-B624-31B0A3561F84.png'

export const designer = {
    name: 'Design by Veronika',
    title: 'Founder, interia.uae',
    tagline: 'Warm, modern interiors shaped by light, craft, and calm.',
    intro:
        'I design lived-in, layered spaces that feel effortless and personal. Each project blends timeless materials with contemporary clarity to support how you live now.',
    bio:
        'Veronika brings a boutique studio sensibility to every room. With a background in fashion and a love of artisan makers, she balances scale, texture, and movement to create interiors that feel both refined and welcoming.',
    values: ['Quiet luxury over trends', 'Thoughtful use of natural light', 'Details that age beautifully'],
    location: 'Dubai, UAE',
    portrait,
    approachPortrait,
}

export const projects = [
    {
        title: 'Interior Rework',
        descriptor: 'Villa, Springs, Dubai',
        summary: 'Compact living reimagined with modular storage, warm stone, and sculptural lighting.',
        image: projectTwo,
    },
    {
        title: 'Full Renovation',
        descriptor: 'One bedroom apartment, JVC',
        summary: 'Soft limewashed walls, linen textures, and custom oak millwork anchor a serene open plan.',
        image: projectOne,
    },
    {
        title: 'Design from Scratch',
        descriptor: 'One bedroom apartment, Europe',
        summary: 'A grounded palette of sandstone and walnut pairs with artisan tilework for daily rituals.',
        image: projectThree,
    },
    {
        title: 'Retail Transformation',
        descriptor: 'Clinique, Europe',
        summary: 'Indoor-outdoor continuity using handwoven textiles, muted greens, and bespoke cabinetry.',
        image: projectFour,
    },
    {
        title: 'Interior Rework',
        descriptor: 'One bedroom, Palm Jumeirah',
        summary: 'An adaptive studio built around arched niches, reclaimed wood, and soft acoustic finishes.',
        image: projectSix,
    },
    {
        title: 'Off-Plan Furnishing',
        descriptor: 'One bedroom, JVT',
        summary: 'A quiet retreat with layered neutrals, rounded silhouettes, and gallery-inspired lighting.',
        image: projectFive,
    },
]

const whatsappNumber = '971501234567'

export const contact = {
    whatsappDisplay: '+971 52 322 6120',
    whatsappLink: `https://wa.me/${whatsappNumber}`,
    email: 'hello@interiordesignforyou.com',
    instagram: 'https://instagram.com/interia.uae',
    instagramHandle: '@interia.uae',
}
