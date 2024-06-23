/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      //   "api.unsplash.com",
      "images.unsplash.com",
      "jumbofarmsbucket.s3.eu-central-1.amazonaws.com",
      //   "source.unsplash.com",
      //   "images.pexels.com",
    ],
  },
};

export default nextConfig;
