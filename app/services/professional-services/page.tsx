import ServiceLayout from "@/components/services/service-layout";

export default function ProfessionalServicesPage() {
  return (
    <ServiceLayout
      title="Professional Services"
      description="We offer specialized support in strategic planning, financial management, process improvement, stakeholder engagement, and compliance and risk management. We develop and implement strategies aligned with government initiatives, manage projects to ensure timely and on-budget delivery, provide robust financial oversight, enhance operational efficiency, and facilitate stakeholder communication. Our team ensures adherence to regulations and mitigates risks, helping your agency achieve its mission with confidence and precision."
      imageSrc="/talent.jpeg"
      imageAlt="Program management Services Illustration"
      caseStudy={{
        title:
          "THE DEPARTMENT OF STATE DIPLOMATIC SECURITY PROJECT MANAGEMENT & ENGINEERING OFFICE (PME)",
        overview: `
          <p>TATARIY’s leadership team has a proven track record managing complex professional services portfolios across multiple federal agencies, including:</p>
          <ol>
            <li> DoD – Department of Defense</li>
            <li> DTRA – Defense Threat Reduction Agency</li>
            <li> USMC – United States Marine Corps</li>
            <li> DHS – Department of Homeland Security</li>
            <li> DEA – Drug Enforcement Administration</li>
            <li> DOL – Department of Labor</li>
            <li> NIH – National Institutes of Health</li>
            <li> NASA – National Aeronautics and Space Administration</li>
            <li> DOC – Department of Commerce</li>
            <li> DOS – Department of State</li>
            <li> USAID – U.S. Agency for International Development </li>
          </ol>
          <p>From workforce management to strategic reporting and operational oversight, the team has consistently delivered mission-aligned results under high-stakes conditions—ensuring quality, compliance, and stakeholder satisfaction.</p>
        `,
        approach: `<p>TATARIY’s approach combines structure with agility. For one portfolio alone, the team:</p>
          <li>Led a diverse mix of technical and operational professionals across on-site and remote engagements</li>
          <li>Maintained daily alignment with business line directors to synchronize project scope, timelines, and budgets</li>
          <li>Embedded clear communications frameworks for reporting, decision-making, and issue escalation</li>
          <li>Fostered a culture of accountability, motivation, and continuous improvement among all stakeholders</li>
        `,
        solution: `<p>To support federal agency success, TATARIY deployed:</p>
          <li>End-to-end project management across full life cycles—from feasibility assessments and staffing to execution and closeout</li>
          <li>Customized performance tracking tools for real-time visibility into milestones, risks, and deliverables</li>
          <li>Technical recruiting and cultural fit assessments to staff highly specialized roles with speed and precision</li>
          <li>Streamlined SOPs and workflow optimization, driving consistency across contracts and reducing onboarding time</li>
          <li>Quality assurance frameworks aligned with ISO and CMMI standards to ensure regulatory compliance and service excellence</li>
          <li>Executive-ready reporting dashboards to support leadership decisions, audits, and funding justifications</li>
        `,
        results: `<p>Seamless execution of multi-agency professional services contracts, often under accelerated timelines and evolving requirements</li>
          <li>On-time delivery of multiple concurrent initiatives, each meeting or exceeding contractual performance metrics</li>
          <li>Documented and institutionalized process improvements, boosting operational efficiency and knowledge transfer across future projects</li>
          <li>Strengthened reputation as a go-to teaming partner for large primes and a trusted delivery arm for federal agencies</li>
          <li>Positioned TATARIY as a nimble, high-performing small business capable of scaling solutions without compromising quality</li>
        `,
      }}
    />
  );
}
