const SITE_NAME = "MoniAK"
const BASE_URL = "https://moniak.vercel.app"

type SeoConfig = {
    title: string
    description: string
    path?: string
    image?: string
    type?: "website" | "article"
}

/**
 * Generate SEO meta tags for TanStack Start routes
 */
export function createSeoTags({
    title,
    description,
    path = "/",
    image = "/images/og-image.png",
    type = "website",
}: SeoConfig) {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
    const url = `${BASE_URL}${path}`
    const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`

    return [
        { title: fullTitle },
        { name: "description", content: description },

        // Open Graph
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: description },
        { property: "og:image", content: imageUrl },
        { property: "og:url", content: url },
        { property: "og:type", content: type },
        { property: "og:site_name", content: SITE_NAME },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
    ]
}
