/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

let nextConfig = {}

if (isProd) {
    nextConfig = {
        basePath: ".",
    }
}

module.exports = nextConfig
