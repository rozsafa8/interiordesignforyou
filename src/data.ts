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
    tagline: 'Elegant, inviting interiors defined by texture, light, and timeless detail.',
    intro:
        'Designing spaces that are intimate, layered, and luxuriously lived-in is my passion. Each project blends refined materials, thoughtful details, and a welcoming atmosphere.',
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
        summary: 'A carefully planned upgrade refreshed the villa, repurposing some existing furniture along the way. Walls, furnishings, and decorative details were enhanced to craft a cohesive, elegant atmosphere.',
        image: projectTwo,
    },
    {
        title: 'Full Renovation',
        descriptor: 'One bedroom apartment, JVC',
        summary: 'Designed as an investment, yet full of charm for any potential buyer. Natural tones and textural details — white boucle sofa and wood-effect panels — make the living room irresistibly inviting.',
        image: projectOne,
    },
    {
        title: 'Design from Scratch',
        descriptor: 'One bedroom apartment, Europe',
        summary: 'With limited space, the kitchen had to remain compact yet highly efficient. We aimed for maximum functionality while creating a warm, elegant design.',
        image: projectThree,
    },
    {
        title: 'Retail Transformation',
        descriptor: 'Clinique, Europe',
        summary: 'Complete interior transformation from former retail store into a body treatment clinic. New finishes, refined materials and textures — enhanced by lighting — create a calm, relaxing atmosphere.',
        image: projectFour,
    },
    {
        title: 'Interior Rework',
        descriptor: 'One bedroom, Palm Jumeirah',
        summary: 'Furniture refresh delivering a completely new design direction. A relaxed Balinese-inspired atmosphere brought to life.',
        image: projectSix,
    },
    {
        title: 'Off-Plan Furnishing',
        descriptor: 'One bedroom, JVT',
        summary: 'Right after handover, we completed the full furnishing and decoration of the apartment. Every detail was designed to make the space feel complete, cozy, and stylish. ',
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
