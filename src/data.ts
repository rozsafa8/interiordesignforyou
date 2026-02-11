// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import projectOneSrc from './assets/IMG_0880.jpeg?w=960'
import projectOneSrcSet from './assets/IMG_0880.jpeg?w=480;720;960&as=srcset'
import projectOneSrcSetWebp from './assets/IMG_0880.jpeg?w=480;720;960&format=webp&as=srcset'
import projectOneSrcSetAvif from './assets/IMG_0880.jpeg?w=480;720;960&format=avif&as=srcset'
import projectTwoSrc from './assets/IMG_4578.jpg?w=960'
import projectTwoSrcSet from './assets/IMG_4578.jpg?w=480;720;960&as=srcset'
import projectTwoSrcSetWebp from './assets/IMG_4578.jpg?w=480;720;960&format=webp&as=srcset'
import projectTwoSrcSetAvif from './assets/IMG_4578.jpg?w=480;720;960&format=avif&as=srcset'
import projectThreeSrc from './assets/CB487C77-39CF-4AAA-BC17-C95694EAFF3C.jpeg?w=960'
import projectThreeSrcSet from './assets/CB487C77-39CF-4AAA-BC17-C95694EAFF3C.jpeg?w=480;720;960&as=srcset'
import projectThreeSrcSetWebp from './assets/CB487C77-39CF-4AAA-BC17-C95694EAFF3C.jpeg?w=480;720;960&format=webp&as=srcset'
import projectThreeSrcSetAvif from './assets/CB487C77-39CF-4AAA-BC17-C95694EAFF3C.jpeg?w=480;720;960&format=avif&as=srcset'
import projectFourSrc from './assets/IMG_6825.jpeg?w=960'
import projectFourSrcSet from './assets/IMG_6825.jpeg?w=480;720;960&as=srcset'
import projectFourSrcSetWebp from './assets/IMG_6825.jpeg?w=480;720;960&format=webp&as=srcset'
import projectFourSrcSetAvif from './assets/IMG_6825.jpeg?w=480;720;960&format=avif&as=srcset'
import projectFiveSrc from './assets/IMG_0500.jpeg?w=960'
import projectFiveSrcSet from './assets/IMG_0500.jpeg?w=480;720;960&as=srcset'
import projectFiveSrcSetWebp from './assets/IMG_0500.jpeg?w=480;720;960&format=webp&as=srcset'
import projectFiveSrcSetAvif from './assets/IMG_0500.jpeg?w=480;720;960&format=avif&as=srcset'
import projectSixSrc from './assets/IMG_0466.jpg?w=960'
import projectSixSrcSet from './assets/IMG_0466.jpg?w=480;720;960&as=srcset'
import projectSixSrcSetWebp from './assets/IMG_0466.jpg?w=480;720;960&format=webp&as=srcset'
import projectSixSrcSetAvif from './assets/IMG_0466.jpg?w=480;720;960&format=avif&as=srcset'
import portraitSrc from './assets/IMG_0563.jpeg?w=1280'
import portraitSrcSet from './assets/IMG_0563.jpeg?w=640;960;1280;1600&as=srcset'
import portraitSrcSetWebp from './assets/IMG_0563.jpeg?w=640;960;1280;1600&format=webp&as=srcset'
import portraitSrcSetAvif from './assets/IMG_0563.jpeg?w=640;960;1280;1600&format=avif&as=srcset'
import approachPortraitSrc from './assets/3B8BC17A-613C-4783-B624-31B0A3561F84.png?w=1280'
import approachPortraitSrcSet from './assets/3B8BC17A-613C-4783-B624-31B0A3561F84.png?w=640;960;1280;1600&as=srcset'
import approachPortraitSrcSetWebp from './assets/3B8BC17A-613C-4783-B624-31B0A3561F84.png?w=640;960;1280;1600&format=webp&as=srcset'
import approachPortraitSrcSetAvif from './assets/3B8BC17A-613C-4783-B624-31B0A3561F84.png?w=640;960;1280;1600&format=avif&as=srcset'

type ResponsiveImage = {
    src: string
    srcSet: string
    srcSetWebp: string
    srcSetAvif: string
}

const createImageSet = (
    src: string,
    srcSet: string,
    srcSetWebp: string,
    srcSetAvif: string,
): ResponsiveImage => ({
    src,
    srcSet,
    srcSetWebp,
    srcSetAvif,
})

const projectOne = createImageSet(
    projectOneSrc,
    projectOneSrcSet,
    projectOneSrcSetWebp,
    projectOneSrcSetAvif,
)
const projectTwo = createImageSet(
    projectTwoSrc,
    projectTwoSrcSet,
    projectTwoSrcSetWebp,
    projectTwoSrcSetAvif,
)
const projectThree = createImageSet(
    projectThreeSrc,
    projectThreeSrcSet,
    projectThreeSrcSetWebp,
    projectThreeSrcSetAvif,
)
const projectFour = createImageSet(
    projectFourSrc,
    projectFourSrcSet,
    projectFourSrcSetWebp,
    projectFourSrcSetAvif,
)
const projectFive = createImageSet(
    projectFiveSrc,
    projectFiveSrcSet,
    projectFiveSrcSetWebp,
    projectFiveSrcSetAvif,
)
const projectSix = createImageSet(
    projectSixSrc,
    projectSixSrcSet,
    projectSixSrcSetWebp,
    projectSixSrcSetAvif,
)

const portrait = createImageSet(
    portraitSrc,
    portraitSrcSet,
    portraitSrcSetWebp,
    portraitSrcSetAvif,
)
const approachPortrait = createImageSet(
    approachPortraitSrc,
    approachPortraitSrcSet,
    approachPortraitSrcSetWebp,
    approachPortraitSrcSetAvif,
)

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
