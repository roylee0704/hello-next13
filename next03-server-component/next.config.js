/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                host: 'upload.wikimedia.org',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
