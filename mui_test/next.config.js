/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withPWA = require("next-pwa");

//module.exports = withPWA({
  //pwa: {
    //dest: "public",
    //register: true,
    //skipWaiting: true,
  //},
//});

//module.exports = withPWA({
    //pwa: {
        //dest: 'public'
    //}
//})




