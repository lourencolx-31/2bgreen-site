/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["pt", "en", "fr"],
    defaultLocale: "pt"
  },
  images: { unoptimized: true }
};
module.exports = nextConfig;
