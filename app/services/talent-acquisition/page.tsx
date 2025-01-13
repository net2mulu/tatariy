import ServiceLayout from "@/components/services/service-layout";

export default function TalentAcquisitionPage() {
  return (
    <ServiceLayout
      title="Talent Acquisition"
      description="We understand that your greatest asset is your people, and our Talent Acquisition Services are designed to help you find and retain top talent. With a comprehensive approach to talent acquisition, we specialize in recruiting and placing applicants for a wide range of positions from executive-level professionals to temporary staff."
      imageSrc="/talent.jpeg"
      imageAlt="Talent Acquisition Services Illustration"
      caseStudy={{
        title:
          "STRATEGIC TALENT ACQUISITION: ELEVATING AFSAC'S FOREIGN MILITARY SALES PROGRAM",
        overview:
          "In support of the Department of Defense's Air Force Security Assistance and Cooperation (AFSAC) Directorate, TATARIY executed a high-stakes mission to recruit 42 top-tier Subject Matter Experts (SME) I, II and III for Foreign Military Sales (FMS). The task required sourcing, vetting, and onboarding these experts across four Air Force bases—Wright-Patterson AFB, Robins AFB, Hanscom AFB, and Lackland AFB—within an unprecedented one-week timeframe.",
        approach:
          "The approach was multi-faceted and strategic to meet the high-stakes task of recruiting the required talent within a one-week timeframe. Initially, targeted recruitment campaigns were launched using advanced platforms, specialized job boards, and professional networks to identify qualified candidates. Partnerships with military transition programs were established to access veterans with the necessary skills and clearances.",
        solution:
          "To ensure efficient communication and coordination, dedicated team leads were appointed to facilitate communication among 80 employees, government branch chiefs, team leads, and other stakeholders. This structure ensured smooth coordination and quick issue resolution. Critical deliverables such as Monthly Activity Reports, Organizational Charts, Weekly Updates, and Contract Data Requirements Lists (CDRLs) were meticulously managed and submitted on time.",
        results:
          "The leadership team's meticulous program management led to the successful and on-time recruitment and onboarding of 28 highly qualified SMEs. Comprehensive risk assessments and mitigation plans effectively reduced the likelihood and impact of security incidents. Efficient project management ensured all security projects were completed on time, minimizing disruptions.",
      }}
    />
  );
}
