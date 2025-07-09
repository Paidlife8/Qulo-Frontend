// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/:path*.(css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
