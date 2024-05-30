/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/items/:id",
        destination: "/products/:id",
        permanent: true,
        // 브라우저가 위의 내용을 저장
      },
    ];
  },
};

export default nextConfig;
