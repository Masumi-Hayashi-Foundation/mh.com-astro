// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
      cloudinaryId: z.string(),
      series: z.string(),
      slug: z.string(),
      name: z.string(),
      title: z.string(),
      altTag: z.string(),
      media: z.string(),
      year: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      size: z.string(),
      inventory: z.string(),
      // tags: z.array(z.string()),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};

/*
content-type: artwork
image: ./images/angler-pow-camp-guard-tower.jpg
series: Japanese-Canadian Internment Camps
slug: angler-pow-camp-guard-tower
name: Angler Prisoner of War Camp, Guard Tower
title: Angler Prisoner of War Camp, Guard Tower, Marathon, Ontario, Canada
altTag: Picture of Angler Prisoner of War Camp, Guard Tower, Marathon, Ontario, Canada, by Dr. Masumi Hayashi
media: Panoramic photo collage with Kodak Type-C prints
year: 1997
city: Marathon
state: Ontario
country: Canada
size: 28in. x 32in.
inventory: 1 framed, 1 unframed
cloudinaryId: /internment-camps/angler-pow-camp-guard-tower_ogicae
*/
