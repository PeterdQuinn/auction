/** @type {import('next').NextConfig} */

import {pluginoptions} from "@mightymeld/runtime";

const nextConfig = {
  experimental: {
    swcPlugins: [['@mightymeld/runtime/swc-plugin-mightymeld', pluginoptions()]]
  },
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,
};

export default  process.env.MIGHTYMELD ? nextConfig : {};


