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
        image: {
          desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
          tablet: "/assets/product-xx99-mark-two/tablet/image-product.jpg",
          mobile: "/assets/product-xx99-mark-two/mobile/image-product.jpg",
        },
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
        image: {
          desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
          tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
          mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
        },
      },
    ],
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
      first: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      },
      second: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
      },
      third: {
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-i",
        name: "XX99 Mark I Headphones",
        image: {
          desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
          tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        },
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
    image: {
      desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
      tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
    },
  },

  {
    slug: "xx99-mark-i",
    name: "XX99 Mark I Headphones",
    category: "headphones",
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features: `The XX99 Mark I headphones deliver an incredibly accurate sound signature. 
They feature custom drivers, sturdy construction, and a comfortable leather headband. 
Perfect for both casual listeners and professionals who demand precision.`,
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first: {
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
      },
      second: {
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
      },
      third: {
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
      },
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
      {
        slug: "yx1-earphones",
        name: "YX1 Earphones",
        image: { desktop: "/assets/shared/desktop/image-yx1-earphones.jpg" },
      },
    ],
    image: {
      desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
      tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
    },
  },
  {
  slug: "xx59",
  name: "XX59 Headphones",
  category: "headphones",
  new: false,
  price: 899,
  description:
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable build allows you to listen comfortably for hours while enjoying high-fidelity sound.",
  features: `These headphones have been created from durable, high-quality materials designed to last for years. 
Their lightweight frame makes them perfect for long listening sessions, and the soft earcups provide excellent noise isolation. 
The XX59 delivers exceptional performance, clarity, and comfort at an affordable price.`,
  includes: [
    { quantity: 1, item: "Headphone unit" },
    { quantity: 2, item: "Replacement earcups" },
    { quantity: 1, item: "User manual" },
    { quantity: 1, item: "3.5mm 5m audio cable" },
  ],
  gallery: {
    first: {
      desktop: "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
    },
    second: {
      desktop: "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
    },
    third: {
      desktop: "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-ii",
      name: "XX99 Mark II Headphones",
      image: { desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg" },
    },
    {
      slug: "xx99-mark-i",
      name: "XX99 Mark I Headphones",
      image: { desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg" },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 Speaker",
      image: { desktop: "/assets/shared/desktop/image-zx9-speaker.jpg" },
    },
  ],
  image: {
    desktop: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    tablet: "/assets/product-xx59-headphones/tablet/image-product.jpg",
    mobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
  },
},

];

// ✅ Helper Functions
export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}
