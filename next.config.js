const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
