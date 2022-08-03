// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'randomuser.me', 'iili.io', 'lh3.googleusercontent.com'],
    hostname: ['fakestoreapi.com', 'randomuser.me', 'iili.io', 'lh3.googleusercontent.com'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

// module.exports = nextConfig;
