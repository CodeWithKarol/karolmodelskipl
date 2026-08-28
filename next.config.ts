import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/jaki-jest-najlepszy-program-do-organizacji",
        destination: "/blog/jakie-sa-najlepsze-aplikacje-do-prowadzenia-firmy",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
