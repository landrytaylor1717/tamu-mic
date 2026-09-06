/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TEMPORARY: hero photo is still hotlinked from the current live site
    // because we don't have the original file. Once you have the real
    // photo, drop it in /public and point Hero.jsx at it instead — then
    // this remotePattern can be deleted.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tamumic.com",
      },
    ],
  },
};

export default nextConfig;
