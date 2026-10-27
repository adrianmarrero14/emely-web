import type { ImageMetadata } from 'astro';
import { defaultLang, type Lang } from '.';

// Images that carry text (diagrams, badges, annotated screens) can have one variant per language.
// The Spanish file is the source; a translated copy with the same name in an `<lang>/` folder next
// to it replaces it on that language's pages, e.g. projects/in99/flujo.png → projects/in99/en/flujo.png.
// Without a variant the original is shown, so a missing translation never breaks a page.
const files = import.meta.glob<ImageMetadata>('../assets/projects/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

/** `file` is relative to src/assets/projects, e.g. 'in99/flujo.png'. */
export const media = (file: string, lang: Lang): ImageMetadata => {
  const slash = file.lastIndexOf('/');
  const variant = `../assets/projects/${file.slice(0, slash)}/${lang}/${file.slice(slash + 1)}`;
  const image = (lang !== defaultLang && files[variant]) || files[`../assets/projects/${file}`];
  if (!image) throw new Error(`Image not found: src/assets/projects/${file}`);
  return image;
};
