export const products = [
  {
    id: "xx99m2",
    slug: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    description: "The pinnacle of pristine audio.",
    price: 2999,
    category: "headphones",
    image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  },
  {
    id: "xx99m1",
    slug: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music enthusiasts alike.",
    price: 1750,
    category: "headphones",
    image: "/assets/cart/image-xx99-mark-one-headphones.jpg",
  },
  {
    id: "xx59",
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable build pairs comfort with exceptional sound.",
    price: 899,
    category: "headphones",
    image: "/assets/cart/image-xx59-headphones.jpg",
  },
  {
    id: "zx9",
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity for your audio setup.",
    price: 4500,
    category: "speakers",
    image: "/assets/cart/image-zx9-speaker.jpg",
  },
  {
    id: "zx7",
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audio components that represent the top of the line powered speakers for home or studio use.",
    price: 3500,
    category: "speakers",
    image: "/assets/cart/image-zx7-speaker.jpg",
  },
  {
    id: "yx1",
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments.",
    price: 599,
    category: "earphones",
    image: "/assets/cart/image-yx1-earphones.jpg",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
