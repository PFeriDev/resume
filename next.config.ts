import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Statikus exportálás beállítása
  basePath: "/resume", // Cseréld ki a repository nevére
  trailingSlash: true, // Helyes routing támogatása
};

export default nextConfig;
