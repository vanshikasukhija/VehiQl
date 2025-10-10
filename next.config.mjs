/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache: false, // defaults to false 
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xzvgypxfzxhdedefgegx.supabase.co"
            },
        ],
    },

    async headers(){
        return [
            {
                source:"/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-src 'self' https://vehiql-waitlist-form-157.created.app"
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
