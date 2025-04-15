export interface PressContact {
    name: string
    title: string
    email: string
    phone?: string
}

export interface PressRelease {
    id: number
    title: string
    slug: string
    date: string
    location: string
    category: string
    summary: string
    content: string
    image: string
    featured: boolean
    links?: {
        label: string
        url: string
    }[]
    contact?: PressContact
}

export const pressData: PressRelease[] = [
    {
        id: 1,
        title: "TATARIY Delivers Best Briefing to AFRL's Small Business Office",
        slug: "tatariy-delivers-best-briefing-afrl",
        date: "April 15, 2025",
        location: "Lake Ridge, VA",
        category: "Achievement",
        featured: true,
        summary:
            "TATARIY earned top praise from the Air Force Research Laboratory (AFRL) during a recent capability briefing, where the firm's presentation was described as the best briefing the AFRL team had heard to date.",
        content: `
      <p>TATARIY earned top praise from the Air Force Research Laboratory (AFRL) during a recent capability briefing, where the firm's presentation was described as the best briefing the AFRL team had heard to date. The meeting included AFRL leadership such as Shanel Flutz (Deputy Director), Kimberly Yoder (Small Business Advisor), and Terry Cunningham (Technical Team), who expressed high regard for TATARIY's clarity, innovation, and mission alignment.</p>
      
      <p>In addition to the recognition, AFRL extended guidance and resources for growth, including insights into the DoD Mentor-Protégé Program, GSA Schedule pathways, and a $2B+ small business spend focus—solidifying TATARIY's alignment with defense innovation priorities.</p>
    `,
        image: "/placeholder.svg?height=800&width=1200",
        links: [
            {
                label: "Explore Our Capabilities",
                url: "/statement.pdf",
            },
        ],
        contact: {
            name: "Rahwa Haile",
            title: "Founder & President",
            email: "founders@tatariy.com",
            phone: "(202) 250-4252",
        },
    },
    {
        id: 2,
        title: "TATARIY Featured in Prince William County's First Small Business Expo",
        slug: "tatariy-featured-prince-william-county-expo",
        date: "March 22, 2025",
        location: "Prince William County, VA",
        category: "Event",
        featured: true,
        summary:
            "TATARIY proudly took part in Prince William County's inaugural Small Business Expo, where CEO Rahwa Haile represented her company with passion, vision, and a mission to serve.",
        content: `
      <p>TATARIY proudly took part in Prince William County's inaugural Small Business Expo, where CEO Rahwa Haile represented her company with passion, vision, and a mission to serve. The event, hosted to uplift and connect local businesses with county leadership, drew strong participation—and TATARIY stood out.</p>
      
      <p>Following the event, Rahwa's message and energy left such an impact that her testimonial was selected to be featured on the county's official YouTube channel. As a local small business rooted in service, excellence, and execution, TATARIY continues to grow as a trusted partner within the region.</p>
    `,
        image: "/placeholder.svg?height=800&width=1200",
        links: [
            {
                label: "Watch the Feature",
                url: "https://www.youtube.com/watch?v=Q5MESGnlDIs",
            },
            {
                label: "Read More About Our Local Impact",
                url: "/about",
            },
        ],
        contact: {
            name: "Rahwa Haile",
            title: "Founder & President",
            email: "founders@tatariy.com",
            phone: "(202) 250-4252",
        },
    },
    {
        id: 3,
        title: "TATARIY Selected for Exclusive HUD IT-Focused Meet & Greet",
        slug: "tatariy-selected-hud-it-meet-greet",
        date: "February 8, 2025",
        location: "Washington, DC",
        category: "Recognition",
        featured: false,
        summary:
            "TATARIY was one of only a few companies hand-selected to participate in a HUD Meet & Greet focused on small businesses in the IT space.",
        content: `
      <p>TATARIY was one of only a few companies hand-selected to participate in a HUD Meet & Greet focused on small businesses in the IT space. In a high-impact 5-minute pitch format, TATARIY delivered a powerful briefing that showcased its agility, core capabilities, and ability to support HUD's modernization goals.</p>
      
      <p>The invitation-only event provided direct access to procurement and program officials—affirming TATARIY's positioning as a small business that's ready, relevant, and capable of driving digital transformation within federal agencies.</p>
    `,
        image: "/placeholder.svg?height=800&width=1200",
        links: [
            {
                label: "Partner With Us",
                url: "/contact",
            },
            {
                label: "Download Our Capabilities Statement",
                url: "/capabilities-statement.pdf",
            },
        ],
        contact: {
            name: "Rahwa Haile",
            title: "Founder & President",
            email: "founders@tatariy.com",
            phone: "(202) 250-4252",
        },
    },
    {
        id: 4,
        title: "TATARIY Joins Prince William County's Economic Development Movement",
        slug: "tatariy-joins-prince-william-county-economic-development",
        date: "January 15, 2025",
        location: "Prince William County, VA",
        category: "Community",
        featured: false,
        summary:
            "As a business founded and rooted in Prince William County, TATARIY is not just participating in growth—they're helping shape it.",
        content: `
      <p>As a business founded and rooted in Prince William County, TATARIY is not just participating in growth—they're helping shape it. From buying a home in the county, to employing local talent, to actively engaging in local events, TATARIY's presence is about long-term value creation. Their community-centered approach was recognized at the county's first small business expo, where their commitment to public-private collaboration stood out.</p>
    `,
        image: "/placeholder.svg?height=800&width=1200",
        links: [
            {
                label: "Meet the Founder",
                url: "https://www.linkedin.com/in/rahwa-haile-llb-pmp-csm-itil-4-edwosb-wosb-510b8018/",
            },
            {
                label: "See Why We Call PWC Home",
                url: "/about",
            },
        ],
        contact: {
            name: "Rahwa Haile",
            title: "Founder & President",
            email: "founders@tatariy.com",
            phone: "(202) 250-4252",
        },
    },
]

// Helper function to get press release by slug
export function getPressReleaseBySlug(slug: string): PressRelease | undefined {
    return pressData.find((press) => press.slug === slug)
}

// Helper function to get related press releases (excluding the current one)
export function getRelatedPressReleases(currentPressId: number, limit = 3): PressRelease[] {
    return pressData.filter((press) => press.id !== currentPressId).slice(0, limit)
}

// Helper function to get featured press releases
export function getFeaturedPressReleases(limit = 2): PressRelease[] {
    return pressData.filter((press) => press.featured).slice(0, limit)
}

