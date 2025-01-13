import ServiceLayout from "@/components/services/service-layout";

export default function ProgramManagementPage() {
  return (
    <ServiceLayout
      title="Program Management"
      description="Navigate challenges and achieve success in today's dynamic landscape. Our PMP, ITIL and CSM certified team provides expert guidance that span an entire project lifecycle. Our comprehensive program management services ensure your projects meet their full potential, from planning to execution."
      imageSrc="/program.jpeg"
      imageAlt="Program management Services Illustration"
      caseStudy={{
        title: "PORTFOLIO MANAGEMENT FOR FEDERAL AVIATION ADMINISTRATION",
        overview:
          "Project Level Agreements (PLAs) define and document work agreements between two offices within the Federal Aviation Administration (FAA), serving as programmatic oversight for projects typically lasting 12-18 months. The lifecycle of PLAs, from project scoping to project closeout, demands meticulously executed Standard Operating Procedures (SOPs) across various projects and portfolios. The current leadership team at TATARIY previously facilitated the successful execution of these PLAs, ensuring that all projects were managed efficiently and effectively.",
        approach:
          "The team conducted an in-depth analysis of the PLA lifecycle and existing Standard Operating Procedures (SOPs) to gain a comprehensive understanding of all stakeholders within the FAA. This analysis included a thorough review of the step-by-step guidelines established to facilitate projects from inception to completion. By understanding these procedures, the team tailored their approach to meet the specific needs of each project and stakeholder, ensuring a seamless and efficient process.",
        solution:
          "Using the SOPs as the foundation, the team effectively managed over 20 ongoing projects with more than 100 deliverables. They meticulously reviewed agreements to ensure all terms were clearly defined and met. The funding status was closely tracked to ensure Fiscal Year funds were utilized before expiration. Collaboration with cross-functional teams in finance, operations, technology development, prototyping, and system engineering was essential to ensure proper project execution. This included ensuring timely fund release and prompt project initiation. These collaborations and meticulous management ensured that each project adhered to the established guidelines, met all requirements, and was completed successfully.",
        results:
          "The leadership and management initiatives led to the successful and on-time execution of 20 projects. All projects were completed within the defined schedules, and funds were released and utilized within the customer-defined timeframe. The team ensured that all 100+ deliverables were met according to the defined schedules and requirements. Necessary review signatures were obtained, and stakeholder satisfaction was maintained through effective communication and project management. This success demonstrates the expertise and leadership now present at TATARIY, showcasing our ability to manage complex portfolios efficiently and effectively within a large federal agency like the FAA.",
      }}
    />
  );
}
