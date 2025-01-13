import ServiceLayout from "@/components/services/service-layout";

export default function TrainingPage() {
  return (
    <ServiceLayout
      title="Training"
      description="We offer a diverse range of professional and management development training programs tailored to meet your organization's needs. Whether you're looking to enhance leadership abilities, improve technical proficiency, or foster team collaboration, we provide flexible and dynamic learning opportunities."
      imageSrc="/training.jpeg"
      imageAlt="Talent Acquisition Services Illustration"
      caseStudy={{
        title: "TRAINING DEVELOPMENT FOR FEDERAL AVIATION ADMINISTRATION (FAA)",
        overview:
          "Project Level Agreements (PLAs) within the Federal Aviation Administration (FAA) define and document work agreements between two offices, serving as programmatic oversight for projects typically lasting 12-18 months. Given the lifecycle of PLAs, from project scoping to project closeout, a complex Standard Operating Procedure (SOP) must be consistently executed across various projects and portfolios. The leadership team at TATARIY played a pivotal role in developing standardized training to ensure the successful execution of these PLAs, thereby enhancing efficiency and consistency across the FAA's operations.",
        approach:
          "The team conducted a thorough review of existing SOPs to gain a comprehensive understanding of all stakeholders within the FAA and their roles and responsibilities. This detailed analysis allowed the team to define clear parameters and meticulously examine each aspect of the project lifecycle. The goal was to create a detailed, step-by-step guideline that would serve as the foundation for a robust and standardized training program. This approach ensured that all processes were well-documented and that every stakeholder understood their part in the successful execution of the PLAs.",
        solution:
          "Using the SOPs as the foundation, the team designed a comprehensive training document for new hires supporting the FAA. This training guide covered organizational details, step-by-step activities required to facilitate, execute, and track projects, platform demonstrations, and reporting timelines. It also provided stakeholder details, templates to ensure uniformity in documentation, and hands-on exercises to reinforce learning. The training material was crafted to be clear, concise, and practical, ensuring that new hires could quickly grasp and apply the necessary procedures.",
        results:
          "The training guide has been in use since 2023 Fiscal Year, with a 100% utilization rate, indicating its effectiveness and acceptance. It has significantly expedited the onboarding process, enabling new hires to be trained more efficiently and reducing the time required for them to move from the shadowing phase to full productivity. This acceleration in training has led to quicker project handoffs and improved overall execution of PLAs. The standardized training has also ensured consistency across various projects, enhancing performance and satisfaction among FAA stakeholders. This success story underscores the expertise and leadership now present at TATARIY, showcasing their capability to deliver impactful training and development solutions in complex federal environments.",
      }}
    />
  );
}
