export interface InstagramPost {
  id: string;
  url: string;
  image: string;
  title: string;
  category: '3D Art' | 'Photography';
  tag: string;
  date: string;
  description: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 'DcjRFosj7xs',
    url: 'https://www.instagram.com/planck6626070/p/DcjRFosj7xs/',
    image: `${import.meta.env.BASE_URL}images/instagram/DcjRFosj7xs.jpg`,
    title: 'Cel-Shaded Sunflower',
    category: '3D Art',
    tag: '3D Cel-Shaded Render • Blender',
    date: 'Aug 2026',
    description: 'Stylized toon cel-shaded 3D sunflower prop resting on the wooden floor of a passenger train car.',
  },
  {
    id: 'C9Cf8O-vlXh',
    url: 'https://www.instagram.com/planck6626070/p/C9Cf8O-vlXh/',
    image: `${import.meta.env.BASE_URL}images/instagram/C9Cf8O-vlXh.jpg`,
    title: 'Midnight Lo-Fi Room',
    category: '3D Art',
    tag: '3D Environment • Blender',
    date: 'Jul 2024',
    description: 'Moody lo-fi midnight room corner lit by desk lamp glow, wall poster, shelf, and starry window view.',
  },
  {
    id: 'C4e4vGXvjiG',
    url: 'https://www.instagram.com/planck6626070/p/C4e4vGXvjiG/',
    image: `${import.meta.env.BASE_URL}images/instagram/C4e4vGXvjiG.jpg`,
    title: 'Scarlet Dragonfly Macro',
    category: 'Photography',
    tag: 'Macro Photography',
    date: 'Mar 2024',
    description: 'Detailed macro close-up capturing intricate wing venation and vivid crimson colors of a resting dragonfly.',
  },
  {
    id: 'CwUT6zavxzi',
    url: 'https://www.instagram.com/planck6626070/p/CwUT6zavxzi/',
    image: `${import.meta.env.BASE_URL}images/instagram/CwUT6zavxzi.jpg`,
    title: 'Sunlit Orange Tabby',
    category: 'Photography',
    tag: 'Wildlife Photography',
    date: 'Aug 2023',
    description: 'Candid outdoor portrait of an orange tabby cat basking in natural sunlight with piercing emerald eyes.',
  },
];
