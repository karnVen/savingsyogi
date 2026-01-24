import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tgc8bwqx", // Find this in your sanity.config.js or manage.sanity.io
  dataset: "production",
  useCdn: true, // Faster response for public data
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);