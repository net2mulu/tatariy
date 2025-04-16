import ServiceLayout from "@/components/services/service-layout";

export default function ProgramManagementPage() {
  return (
    <ServiceLayout
      title="Program Management"
      description="Navigate challenges and achieve success in today's dynamic landscape. Our PMP, ITIL and CSM certified team provides expert guidance that span an entire project lifecycle. Our comprehensive program management services ensure your projects meet their full potential, from planning to execution."
      imageSrc="/prog.jpeg"
      imageAlt="Program management Services Illustration"
      caseStudy={{
        title: "C4IM Program Support Across DoD Agencies ITA-ITSS",
        overview: `TATARIY was tasked with leading a large-scale C4IM (Command, Control, Communications, Computers, and Information Management) program spanning multiple Department of Defense (DoD) agencies. The mission required the immediate onboarding of over 80 cleared Subject Matter Experts (SMEs), ranging from local Help Desk support to highly specialized VoIP engineers and RMF cybersecurity professionals. All personnel needed to be cleared and ready to perform on Day One. This wasn’t just a staffing challenge, it was a full program management engagement, requiring end-to-end leadership from recruitment to execution across geographically dispersed teams.`,
        approach: `
          <p>TATARIY led this initiative with an enterprise-level program management structure focused on strategic execution and people-first delivery.</p>
          <ul>
            <li>Program Structuring: Established a centralized PMO to oversee planning, quality control, compliance, and risk mitigation.</li>
            <li>Targeted Recruitment: Deployed a rapid-response talent acquisition strategy using pre-cleared pipelines and technical vetting frameworks.</li>
            <li>Training & Enablement: Developed a 12-module onboarding and training program, including technical, compliance, and customer-readiness components.</li>
            <li>Knowledge Transfer: Created a phased roadmap to help SMEs start supporting customers quickly—minimizing downtime and maximizing early impact.</li>
            <li>Subcontractor Management: Oversaw multiple subcontractor teams as seamlessly as our own—ensuring that every deliverable met the same high bar of excellence, no matter who wore the badge.</li>
            <li>Integrated Leadership: Positioned embedded leads and client liaisons across locations to streamline coordination and ensure mission alignment.</li>
          </ul>
        `,
        solution: `
          <p>TATARIY leadership team successfully deployed over 80 active-cleared SMEs to support operations across various DoD agencies. Core areas of delivery included:</p>
          <ul>
            <li>Tier 1–3 Help Desk Support</li>
            <li>RMF Cybersecurity & Compliance</li>
            <li>VoIP Engineering</li>
            <li>Systems & Network Administration</li>
            <li>ICAM (Identity, Credential, and Access Management)</li>
            <li>Configuration Management</li>
            <li>COTS & GOTS Integration</li>
            <li>Information Assurance</li>
          </ul>
          <p>Our onboarding process was paired with intensive in-house training to ensure personnel could adapt quickly to mission needs. Each SME was supported by automated systems for credential tracking, performance monitoring, and milestone-based reporting.</p>
        `,
        results: `
          <ul>
            <li>Rapid Workforce Readiness: Accelerated ramp-up through structured training and onboarding</li>
            <li>12-Module Training Implementation: Ensured technical alignment and Day-One mission awareness</li>
            <li>Monthly Praise from Branch Chiefs: Employees consistently earned top-tier feedback across agencies</li>
            <li>Competitive Recognition: TATARIY personnel frequently ranked in Gartner-style recommendations for performance and professionalism</li>
            <li>Seamless Multi-Site Execution: Maintained operational continuity and mission alignment at every location</li>
          </ul>
          <p>TATARIY leadership delivered what mattered most: trusted talent, accountable leadership, and scalable results, without compromising mission momentum.</p>
        `,
      }}
    />
  );
}
