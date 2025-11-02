export const products = [
  {
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    category: "earphones",
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible sound quality and comfort with truly wireless freedom.",
    features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. 
These earphones create an incredibly natural listening experience, immersing you in the music.`,
    includes: [
      { quantity: 2, item: "Ear tips" },
      { quantity: 1, item: "Charging case" },
      { quantity: 1, item: "User manual" },
    ],
    gallery: {
      first: { desktop: "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg" },
      second: { desktop: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg" },
      third: { desktop: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg" },
    },
    others: [
      {
        slug: "xx99-mark-ii",
        name: "XX99 Mark II Headphones",
        image: { desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg" },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: { desktop: "/assets/shared/desktop/image-zx9-speaker.jpg" },
      },
    ],
  },
  {
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    category: "speakers",
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity and exceptional sound quality.",
    features: `Reimagine your home audio system with the ZX9 speaker.`,
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cable (2.5m)" },
      { quantity: 1, item: "User manual" },
    ],
    gallery: {
      first: { desktop: "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg" },
      second: { desktop: "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg" },
      third: { desktop: "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg" },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: { desktop: "/assets/shared/desktop/image-zx7-speaker.jpg" },
      },
      {
        slug: "yx1-earphones",
        name: "YX1 Earphones",
        image: { desktop: "/assets/shared/desktop/image-yx1-earphones.jpg" },
      },
        {
    slug: "xx99-mark-ii",
    name: "XX99 Mark II Headphones",
    category: "headphones",
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio and premium materials, redefining your listening experience.",
    features: `Experience unrivalled stereo sound thanks to the innovative acoustic design. 
Each component is crafted to provide stunning clarity and realism.`,
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm audio cable" },
    ],
    gallery: {
      first: { desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" },
      second: { desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg" },
      third: { desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" },
    },
    others: [
      {
        slug: "xx99-mark-i",
        name: "XX99 Mark I",
        image: { desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg" },
      },
      {
        slug: "xx59",
        name: "XX59 Headphones",
        image: { desktop: "/assets/shared/desktop/image-xx59-headphones.jpg" },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: { desktop: "/assets/shared/desktop/image-zx9-speaker.jpg" },
      },
    ],
  },

    ],
  },
];

// ✅ helper functions
export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}
