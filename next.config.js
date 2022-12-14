// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'randomuser.me', 'iili.io', 'lh3.googleusercontent.com', 'freeimage.host'],
    hostname: ['fakestoreapi.com', 'randomuser.me', 'iili.io', 'lh3.googleusercontent.com', 'freeimage.host'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

// module.exports = nextConfig;
