



export interface Event {
    id: number
    title: string
    slug: string
    date: string
    time: string
    location: string
    address: string
    type: string
    description: string
    fullDescription: string
    image: string
    registrationLink: string
    organizer: string

}

export const eventsData: Event[] = [
    {
        id: 1,
        title: "Empowering Missions With Intelligent Investments",
        slug: "empowering_missions_with_intelligent_investments",
        date: "April 22, 2025",
        time: "8:00 a.m. – 6:00 p.m.",
        address: "Virginia",
        location: "Renaissance Arlington Capital View Hotel Arlington, VA 2220",
        type: "Summit",
        description:
            "With increasing Federal focus on modernizing government, controlling costs, and heightening efficiency, agencies are focused more than ever on making smart technology investments that deliver clear mission and business value. Apptio’s 2025 Public Sector Summit will equip IT and finance leaders with the strategies they need to connect those investments to measurable outcomes.",
        fullDescription: `
      <p>With increasing Federal focus on modernizing government, controlling costs, and heightening efficiency, agencies are focused more than ever on making smart technology investments that deliver clear mission and business value. Apptio’s 2025 Public Sector Summit will equip IT and finance leaders with the strategies they need to connect those investments to measurable outcomes.</p>
      
      <p>At the Summit, leaders from across government will come together to explore how to maximize technology dollars through data-driven decision-making. This engaging, one-day event will feature a mix of insightful keynotes and dynamic breakout sessions tailored to various technology topics. Attendees will learn from real-world examples of how agencies have overcome inefficiencies and maximized the value of their technology investments – and how IBM’s suite of solutions can drive measurable results.</p>
      
      <p>After the event, keep the momentum going at Nats Park, where the Washington Nationals will face off against the Baltimore Orioles at 6:45 p.m. EDT. It’s a great opportunity to continue conversations, network, and enjoy the game. We hope to see you there. (Please note tickets are not included with registration.)

</p>
    `,
        image: "/event1.png",
        registrationLink: "https://www.meritalk.com/event/apptio-public-sector-summit/",
        organizer: "Meri talk",

    },
    {
        id: 2,
        title: "Sip & Settle In: Our New Office Happy Hour",
        slug: "sip-and-settle-in-our-new-office-happy-hour",
        date: "April 24, 2025",
        time: "5:30-7:30 PM",
        address: "Washington, DC",
        location: "525 9th Street NW, Suite 600, Washington, DC  20004",
        type: "Event",
        description:
            "We’re excited to celebrate this milestone with you on April 24th, from 5:30-7:30 PM ET. Come mix and mingle with Leadership Connect users and industry peers, enjoy some drinks on us, and check out our new space!",
        fullDescription: `
        <p>Join Leadership Connect for a special Happy Hour as we welcome you to our new office!</p>
         <p>We’re excited to celebrate this milestone with you on April 24th, from 5:30-7:30 PM ET. Come mix and mingle with Leadership Connect users and industry peers, enjoy some drinks on us, and check out our new space!</p>
        <p>Don’t miss a night full of networking and fun with fellow Leadership Connect Customers!</p>
    `,
        image: "/event2.jpg",
        registrationLink: "https://resources.leadershipconnect.io/april-2025-sip-settle-in-our-new-office-happy-hour?utm_medium=email&_hsenc=p2ANqtz-_inrw-2YQVFbalVl8i9CvK0R2Sa7o_i7rxqSqIiPU813dia9JQpGfaacT_MufMyWz7BlrgdZ7piw0VEn2yA9tDeetU-A&_hsmi=354621908&utm_content=354621908&utm_source=hs_email",
        organizer: "Leadership Connect",

    },
    {
        id: 3,
        title: "Qualys Public Sector Cyber Risk Conference",
        slug: "qualys-public-sector-cyber-risk-conference",
        date: "May 28, 2025",
        time: "7:30-3:00 PM",
        address: "Virginia",
        location: "The Ritz Carlton, Tysons Corner 1700 Tysons Blvd, McLean, VA 22102",
        type: "Conference",
        description:
            "In an era of escalating cyber threats, public sector agencies must not only meet compliance mandates but also strengthen their defenses across a complex and ever-evolving landscape. With the integration of artificial intelligence, the push for Zero Trust, and the need to secure cloud environments and the supply chain, the public sector faces new challenges in ensuring resilience while improving cost and technology efficiencies. This year’s Public Sector Cyber Risk Conference will bring together cybersecurity leaders to explore emerging technologies, share actionable insights, and discuss the most pressing issues in federal cybersecurity today. Experts will examine how agencies can efficiently secure their systems while modernizing their security frameworks—balancing privacy and data access concerns by focusing on processes that reduce mission risk and eliminate wasted effort on low-impact security issues.",
        fullDescription: `
        <p>In an era of escalating cyber threats, public sector agencies must not only meet compliance mandates but also strengthen their defenses across a complex and ever-evolving landscape. With the integration of artificial intelligence, the push for Zero Trust, and the need to secure cloud environments and the supply chain, the public sector faces new challenges in ensuring resilience while improving cost and technology efficiencies. This year’s Public Sector Cyber Risk Conference will bring together cybersecurity leaders to explore emerging technologies, share actionable insights, and discuss the most pressing issues in federal cybersecurity today. Experts will examine how agencies can efficiently secure their systems while modernizing their security frameworks—balancing privacy and data access concerns by focusing on processes that reduce mission risk and eliminate wasted effort on low-impact security issues.</p>
         <p>Throughout the summit, participants will gain insights into the latest strategies for mitigating cyber risks and improving compliance. IT leaders across the public sector will highlight how agencies can navigate technical challenges and adopt emerging technologies while building a proactive defense posture through federated visibility and cyber intelligence, ensuring long-term resilience against evolving threats.</p>
    `,
        image: "/event3.jpeg",
        registrationLink: "https://events.govexec.com/qualys-public-sector-cyber-risk-conference/register/",
        organizer: "govexec",

    },
    {
        id: 4,
        title: "RockITGov Triple Crown Networking Event",
        slug: "rockitgov-triple-crown-networking-event",
        date: "May 6, 2025",
        time: "6:00-8:00 PM",
        address: "Virginia",
        location: "1604 Spring Hill Road #2nd floor Vienna, VA 22182 United States",
        type: "Event",
        description:
            "Connect with Innovators: Engage with leaders driving transformation in the public sector. Collaborate for Impact: Share ideas and strategies to inspire innovation across industries. Exclusive Networking: Build valuable connections with professionals shaping government and industry. Relax and Recharge: Enjoy a vibrant atmosphere with great food, drinks, and conversation.",
        fullDescription: `
       <p>Join RockItGov for their Networking Event hosted by Darryl Peek. This event is designed to connect and empower public and private sector leaders!</p>
<br/>
       <p>Throughout the summit, participants will gain insights into the latest strategies for mitigating cyber risks and improving compliance. IT leaders across the public sector will highlight how agencies can navigate technical challenges and adopt emerging technologies while building a proactive defense posture through federated visibility and cyber intelligence, ensuring long-term resilience against evolving threats.</p>
<br/>
<h3 className="font-bold">Why Attend?</h3>
<ul>
    <li>Connect with Innovators: Engage with leaders driving transformation in the public sector.</li>
    <li>Collaborate for Impact: Share ideas and strategies to inspire innovation across sectors.</li>
    <li>Exclusive Networking: Build valuable connections with professionals shaping government and industry.</li>
    <li>Relax and Recharge: Enjoy a vibrant atmosphere with great food, drinks, and conversation.</li>
</ul>
<br/>
<h3>Who Should Attend?</h3>
<ul>
    <li>Government professionals</li>
    <li>Industry leaders and innovators</li>
    <li>Public-private partnership advocates: Let's collaborate, create, and make a difference together.</li>
</ul>
    `,
        image: "/event4.png",
        registrationLink: "https://www.eventbrite.com/e/rockitgov-triple-crown-networking-event-tickets-1272699772279?aff=ebdssbdestsearch",
        organizer: "eventbrite",

    },
    {
        id: 5,
        title: "Emerging Leaders: Mentor Match Night",
        slug: "emerging-leaders-mentor-match-night",
        date: "May 15, 2025",
        time: "5:30 pm - 8:30 pm",
        address: "Virginia",
        location: "Jackie 79 Potomac Ave SE Washington, DC 20003 United States",
        type: "Event",
        description:
            "The AFCEA Bethesda Emerging Leaders believe that everyone has the potential to excel and provide industry and government with innovative insights and ideas regardless of their age, experience, or title. The Emerging Leaders ProDev: Mentor Match Night on May 16th is being curated to encourage vertical and horizontal networking that prioritizes interpersonal connections that can lead to long lasting professional connections. Come out and join the Emerging Leaders' featured government and industry mentors, industry insiders, government experts, and folks new to the world of federal consulting for a no-frills, inclusive, and warm environment to build real relationships. We welcome all who are interested in mentoring or being mentored or simply looking to hear what other projects or goals others in the federal IT space are mapping toward. Our hope is that every attendee walks away a mentor or mentee with new connections and ideas. With an anticipated attendance of over 100 government and industry participants, attendees can look forward to robust mentorship match opportunities and candid conversations, all in a lively atmosphere!",
        fullDescription: `
       <p>JThe AFCEA Bethesda Emerging Leaders believe that everyone has the potential to excel and provide industry and government with innovative insights and ideas regardless of their age, experience, or title. The Emerging Leaders ProDev: Mentor Match Night on May 16th is being curated to encourage vertical and horizontal networking that prioritizes interpersonal connections that can lead to long lasting professional connections. Come out and join the Emerging Leaders' featured government and industry mentors, industry insiders, government experts, and folks new to the world of federal consulting for a no-frills, inclusive, and warm environment to build real relationships. We welcome all who are interested in mentoring or being mentored or simply looking to hear what other projects or goals others in the federal IT space are mapping toward. Our hope is that every attendee walks away a mentor or mentee with new connections and ideas. With an anticipated attendance of over 100 government and industry participants, attendees can look forward to robust mentorship match opportunities and candid conversations, all in a lively atmosphere!</p>

    `,
        image: "/event5.png",
        registrationLink: "https://bethesda.afceachapters.org/event/emerging-leaders-mentormatch/",
        organizer: "Afcea",

    },

]

// Helper function to get event by slug
export function getEventBySlug(slug: string): Event | undefined {
    return eventsData.find((event) => event.slug === slug)
}

// Helper function to get related events (excluding the current event)
export function getRelatedEvents(currentEventId: number, limit = 3): Event[] {
    return eventsData.filter((event) => event.id !== currentEventId).slice(0, limit)
}

