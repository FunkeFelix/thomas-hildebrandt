/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to export the app to static files
  distDir: "out", // The output directory for static files
  images: {
    unoptimized: true, // Disable image optimization (for static sites)
  },
  basePath: "", // No base path for GitHub Pages
  assetPrefix: "", // No asset prefix for GitHub Pages
};
export default nextConfig;
