import { mkdir, readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const sourceDir = 'public/images/source';
const outputDir = 'public/images';
const widths = [640, 1024, 1600];

await mkdir(outputDir, { recursive: true });

for (const file of await readdir(sourceDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const source = join(sourceDir, file);
  const name = parse(file).name;

  await Promise.all(widths.map(async (width) => {
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6, smartSubsample: true })
      .toFile(join(outputDir, `${name}-${width}.webp`));
  }));
}

console.log('Responsive WebP image set generated.');
