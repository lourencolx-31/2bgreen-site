export default function sitemap() {
  const base = "https://2bgreen.org";
  return [
    { url: base + "/pt", lastModified: new Date() },
    { url: base + "/en", lastModified: new Date() },
    { url: base + "/fr", lastModified: new Date() }
  ];
}
