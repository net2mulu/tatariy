// import { EventDetail } from "@/components/events/event-detail";
// import { RelatedEvents } from "@/components/events/related-events";

// // Mock function to get event data
// function getEventData(slug: string) {
//   const events = [
//     {
//       id: 1,
//       title: "Empowering Missions With Intelligent Investments",
//       slug: "empowering-missions-with-intelligent-investments",
//       date: "April 22, 2025",
//       time: "8:00 a.m. – 6:00 p.m.",
//       location: "VA",
//       address: "Renaissance Arlington Capital View Hotel Arlington, VA 22202",
//       type: "Conference",
//       description:
//         "With increasing Federal focus on modernizing government, controlling costs, and heightening efficiency, agencies are focused more than ever on making smart technology investments that deliver clear mission and business value. Apptio’s 2025 Public Sector Summit will equip IT and finance leaders with the strategies they need to connect those investments to measurable outcomes.",
//       fullDescription: `
//         <p>With increasing Federal focus on modernizing government, controlling costs, and heightening efficiency, agencies are focused more than ever on making smart technology investments that deliver clear mission and business value. Apptio’s 2025 Public Sector Summit will equip IT and finance leaders with the strategies they need to connect those investments to measurable outcomes.</p>

//         <p>At the Summit, leaders from across government will come together to explore how to maximize technology dollars through data-driven decision-making. This engaging, one-day event will feature a mix of insightful keynotes and dynamic breakout sessions tailored to various technology topics. Attendees will learn from real-world examples of how agencies have overcome inefficiencies and maximized the value of their technology investments – and how IBM’s suite of solutions can drive measurable results.</p>

//         <p>After the event, keep the momentum going at Nats Park, where the Washington Nationals will face off against the Baltimore Orioles at 6:45 p.m. EDT. It’s a great opportunity to continue conversations, network, and enjoy the game. We hope to see you there. (Please note tickets are not included with registration.)</p>

//         <h3>Key Topics:</h3>
//         <ul>
//           <li>Cloud Migration Strategies for Government Agencies</li>
//           <li>Cybersecurity in the Modern Federal IT Landscape</li>
//           <li>Implementing AI and Machine Learning in Government Operations</li>
//           <li>Legacy System Modernization: Challenges and Solutions</li>
//           <li>Compliance and Governance in Federal IT</li>
//         </ul>

//         <h3>Who Should Attend:</h3>
//         <ul>
//           <li>Federal IT Leaders and CIOs</li>
//           <li>Government Technology Program Managers</li>
//           <li>IT Contractors and Service Providers</li>
//           <li>Cybersecurity Professionals</li>
//           <li>Technology Solution Providers</li>
//         </ul>

//         <p>Don't miss this opportunity to be part of the conversation shaping the future of federal IT. Register today to secure your spot at this premier event.</p>
//       `,
//       image: "/placeholder.svg?height=800&width=1200",
//       registrationLink: "https://example.com/register",
//       organizer: "TATARIY in partnership with Federal Technology Forum",
//       speakers: [
//         {
//           name: "Jane Smith",
//           title: "Chief Information Officer, Department of Defense",
//           bio: "Jane Smith has over 20 years of experience in federal IT leadership.",
//         },
//         {
//           name: "John Doe",
//           title: "Director of Cybersecurity, Department of Homeland Security",
//           bio: "John Doe is a recognized expert in government cybersecurity initiatives.",
//         },
//         {
//           name: "Sarah Johnson",
//           title: "Federal Cloud Migration Specialist, TATARIY",
//           bio: "Sarah Johnson has led numerous successful cloud migration projects for federal agencies.",
//         },
//       ],
//       agenda: [
//         {
//           time: "9:00 AM - 9:30 AM",
//           title: "Registration and Networking Breakfast",
//         },
//         {
//           time: "9:30 AM - 10:15 AM",
//           title: "Keynote: The Future of Federal IT",
//           speaker: "Jane Smith, CIO, Department of Defense",
//         },
//         {
//           time: "10:30 AM - 11:15 AM",
//           title: "Panel Discussion: Cloud Migration Success Stories",
//         },
//         {
//           time: "11:30 AM - 12:15 PM",
//           title: "Workshop: Cybersecurity in the Modern Federal IT Landscape",
//           speaker: "John Doe, Director of Cybersecurity, DHS",
//         },
//         {
//           time: "12:15 PM - 1:15 PM",
//           title: "Networking Lunch",
//         },
//         {
//           time: "1:30 PM - 2:15 PM",
//           title: "Breakout Sessions (Multiple Tracks)",
//         },
//         {
//           time: "2:30 PM - 3:15 PM",
//           title: "AI Implementation in Government: Case Studies",
//           speaker: "Sarah Johnson, TATARIY",
//         },
//         {
//           time: "3:30 PM - 4:00 PM",
//           title: "Closing Remarks and Next Steps",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title:
//         "Navigating Government Contracting: A Webinar for Small Businesses",
//       slug: "navigating-government-contracting-webinar",
//       date: "May 20, 2025",
//       time: "1:00 PM - 2:30 PM EST",
//       location: "Virtual Event",
//       address: "Online",
//       type: "Webinar",
//       description:
//         "This webinar is designed to help small businesses understand the government contracting landscape. Our experts will share insights on certification processes, finding opportunities, and developing winning proposals.",
//       fullDescription: `
//         <p>Are you a small business looking to enter the government contracting space or improve your current contracting strategies? Join our comprehensive webinar designed specifically for small business owners and leaders.</p>

//         <p>Government contracting can be a complex landscape to navigate, but with the right knowledge and strategies, it can provide significant growth opportunities for your business.</p>

//         <h3>What You'll Learn:</h3>
//         <ul>
//           <li>Understanding the federal procurement process</li>
//           <li>Small business certifications: 8(a), WOSB, HUBZone, and more</li>
//           <li>Finding and evaluating contract opportunities</li>
//           <li>Developing competitive proposals</li>
//           <li>Teaming and subcontracting strategies</li>
//           <li>Compliance requirements and best practices</li>
//         </ul>

//         <p>Our expert presenters bring decades of experience in government contracting and have helped numerous small businesses successfully secure and execute federal contracts.</p>

//         <p>This interactive webinar will include a Q&A session where you can get answers to your specific questions about government contracting.</p>

//         <p>Don't miss this opportunity to gain valuable insights that could transform your business. Register today!</p>
//       `,
//       image: "/placeholder.svg?height=800&width=1200",
//       registrationLink: "https://example.com/register",
//       organizer: "TATARIY Small Business Development Team",
//       speakers: [
//         {
//           name: "Michael Brown",
//           title: "Director of Small Business Programs, TATARIY",
//           bio: "Michael has helped over 100 small businesses secure their first government contracts.",
//         },
//         {
//           name: "Lisa Chen",
//           title: "Government Procurement Specialist",
//           bio: "Lisa specializes in helping businesses navigate certification processes and compliance requirements.",
//         },
//       ],
//       agenda: [
//         {
//           time: "1:00 PM - 1:10 PM",
//           title: "Introduction and Overview",
//           speaker: "Michael Brown",
//         },
//         {
//           time: "1:10 PM - 1:30 PM",
//           title: "Understanding Government Contracting Opportunities",
//           speaker: "Michael Brown",
//         },
//         {
//           time: "1:30 PM - 1:50 PM",
//           title: "Certification Processes and Benefits",
//           speaker: "Lisa Chen",
//         },
//         {
//           time: "1:50 PM - 2:10 PM",
//           title: "Proposal Development and Best Practices",
//           speaker: "Michael Brown & Lisa Chen",
//         },
//         {
//           time: "2:10 PM - 2:30 PM",
//           title: "Q&A Session",
//           speaker: "All Presenters",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Cybersecurity Compliance Workshop",
//       slug: "cybersecurity-compliance-workshop",
//       date: "July 8, 2025",
//       time: "10:00 AM - 3:00 PM EST",
//       location: "Tysons Corner Marriott, Virginia",
//       address: "8028 Leesburg Pike, Tysons, VA 22182",
//       type: "Workshop",
//       description:
//         "A hands-on workshop focused on helping contractors meet CMMC 2.0 requirements. Participants will learn about assessment processes, documentation requirements, and practical implementation strategies.",
//       fullDescription: `
//         <p>The Cybersecurity Maturity Model Certification (CMMC) 2.0 framework is changing how defense contractors approach cybersecurity. Is your organization prepared?</p>

//         <p>This intensive, hands-on workshop is designed to help government contractors understand and implement the requirements of CMMC 2.0. Our cybersecurity experts will guide you through the assessment process, documentation requirements, and practical implementation strategies.</p>

//         <h3>Workshop Objectives:</h3>
//         <ul>
//           <li>Understand the CMMC 2.0 framework and its impact on your business</li>
//           <li>Learn how to conduct a gap assessment of your current cybersecurity practices</li>
//           <li>Develop a roadmap for achieving compliance</li>
//           <li>Practice implementing key security controls</li>
//           <li>Prepare documentation required for assessment</li>
//           <li>Understand the assessment process and how to prepare your team</li>
//         </ul>

//         <h3>Who Should Attend:</h3>
//         <ul>
//           <li>IT and Security Managers from defense contracting companies</li>
//           <li>Compliance Officers and Risk Managers</li>
//           <li>CIOs and CISOs of organizations in the defense industrial base</li>
//           <li>System Administrators responsible for implementing security controls</li>
//         </ul>

//         <p>Participants will receive a comprehensive workbook, assessment templates, and a certificate of completion. Lunch and refreshments will be provided.</p>

//         <p>Space is limited to ensure a quality learning experience. Register today to secure your spot.</p>
//       `,
//       image: "/placeholder.svg?height=800&width=1200",
//       registrationLink: "https://example.com/register",
//       organizer: "TATARIY Cybersecurity Division",
//       speakers: [
//         {
//           name: "Robert Williams",
//           title: "Chief Information Security Officer, TATARIY",
//           bio: "Robert has over 15 years of experience in cybersecurity and has helped numerous organizations achieve compliance with federal security standards.",
//         },
//         {
//           name: "Amanda Garcia",
//           title: "CMMC Provisional Assessor",
//           bio: "Amanda is a certified CMMC Provisional Assessor with extensive experience in helping defense contractors prepare for certification.",
//         },
//       ],
//       agenda: [
//         {
//           time: "10:00 AM - 10:30 AM",
//           title: "Welcome and Introduction to CMMC 2.0",
//           speaker: "Robert Williams",
//         },
//         {
//           time: "10:30 AM - 11:30 AM",
//           title: "Understanding the Assessment Process",
//           speaker: "Amanda Garcia",
//         },
//         {
//           time: "11:30 AM - 12:30 PM",
//           title: "Hands-on: Conducting a Gap Assessment",
//           speaker: "Robert Williams & Amanda Garcia",
//         },
//         {
//           time: "12:30 PM - 1:15 PM",
//           title: "Lunch Break",
//         },
//         {
//           time: "1:15 PM - 2:15 PM",
//           title: "Implementing Key Security Controls",
//           speaker: "Robert Williams",
//         },
//         {
//           time: "2:15 PM - 2:45 PM",
//           title: "Documentation Best Practices",
//           speaker: "Amanda Garcia",
//         },
//         {
//           time: "2:45 PM - 3:00 PM",
//           title: "Q&A and Closing Remarks",
//           speaker: "All Presenters",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "Women in Government Technology Leadership Forum",
//       slug: "women-in-government-technology-leadership-forum",
//       date: "August 12, 2025",
//       time: "8:30 AM - 2:00 PM EST",
//       location: "National Press Club, Washington DC",
//       address: "529 14th St NW, Washington, DC 20045",
//       type: "Forum",
//       description:
//         "This forum brings together women leaders in government technology to share experiences, insights, and strategies for success. Networking opportunities, panel discussions, and keynote speeches from prominent industry figures.",
//       fullDescription: `
//         <p>The Women in Government Technology Leadership Forum is a premier event celebrating and empowering women leaders in the government technology sector. This forum provides a platform for sharing experiences, insights, and strategies for success in this dynamic field.</p>

//         <p>Join us for a day of inspiration, education, and networking with some of the most influential women in government technology. Whether you're an established leader or aspiring to advance your career, this forum offers valuable perspectives and connections.</p>

//         <h3>Event Highlights:</h3>
//         <ul>
//           <li>Keynote addresses from prominent women leaders in government and technology</li>
//           <li>Panel discussions on navigating career advancement, overcoming challenges, and driving innovation</li>
//           <li>Networking sessions with peers and mentors</li>
//           <li>Professional development workshops</li>
//           <li>Recognition of outstanding women leaders in government technology</li>
//         </ul>

//         <h3>Who Should Attend:</h3>
//         <ul>
//           <li>Women in technology roles within government agencies</li>
//           <li>Women leaders in government contracting firms</li>
//           <li>Technology professionals aspiring to leadership positions</li>
//           <li>Allies and advocates for women in technology</li>
//           <li>HR and diversity professionals in government and technology sectors</li>
//         </ul>

//         <p>This forum is organized by TATARIY in partnership with the Government Women in Technology Association, reflecting our commitment to diversity and inclusion in the government technology sector.</p>

//         <p>Registration includes breakfast, lunch, and access to all sessions and networking events. Space is limited, so register early to secure your participation in this inspiring event.</p>
//       `,
//       image: "/placeholder.svg?height=800&width=1200",
//       registrationLink: "https://example.com/register",
//       organizer:
//         "TATARIY in partnership with Government Women in Technology Association",
//       speakers: [
//         {
//           name: "Dr. Maria Rodriguez",
//           title: "Federal CIO Council Member",
//           bio: "Dr. Rodriguez has been a pioneering force for women in government technology leadership for over two decades.",
//         },
//         {
//           name: "Kimberly Washington",
//           title: "Director of Digital Transformation, Department of State",
//           bio: "Kimberly leads major digital transformation initiatives and mentors emerging women leaders in technology.",
//         },
//         {
//           name: "Rahwa Haile",
//           title: "Founder & CEO, TATARIY",
//           bio: "Rahwa founded TATARIY with a vision to transform how government agencies leverage technology and talent.",
//         },
//       ],
//       agenda: [
//         {
//           time: "8:30 AM - 9:00 AM",
//           title: "Registration and Networking Breakfast",
//         },
//         {
//           time: "9:00 AM - 9:30 AM",
//           title: "Welcome and Opening Remarks",
//           speaker: "Rahwa Haile, Founder & CEO, TATARIY",
//         },
//         {
//           time: "9:30 AM - 10:15 AM",
//           title: "Keynote: Breaking Barriers in Government Technology",
//           speaker: "Dr. Maria Rodriguez, Federal CIO Council Member",
//         },
//         {
//           time: "10:30 AM - 11:30 AM",
//           title: "Panel Discussion: Navigating Leadership Challenges",
//           speaker: "Multiple Speakers",
//         },
//         {
//           time: "11:30 AM - 12:30 PM",
//           title: "Networking Lunch",
//         },
//         {
//           time: "12:30 PM - 1:15 PM",
//           title:
//             "Workshop: Building Your Personal Brand in Government Technology",
//           speaker: "Kimberly Washington, Department of State",
//         },
//         {
//           time: "1:15 PM - 1:45 PM",
//           title: "Recognition of Women Leaders in Government Technology",
//         },
//         {
//           time: "1:45 PM - 2:00 PM",
//           title: "Closing Remarks and Call to Action",
//           speaker: "Rahwa Haile, Founder & CEO, TATARIY",
//         },
//       ],
//     },
//   ];

//   return events.find((event) => event.slug === slug);
// }

// export default function EventPage({ params }: { params: { slug: string } }) {
//   const eventData = getEventData(params.slug);

//   if (!eventData) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <main className="min-h-screen">
//       <EventDetail event={eventData} />
//       <RelatedEvents currentEventId={eventData.id} />
//     </main>
//   );
// }

export default function EventPage() {
  return <div></div>;
}
