import ServiceLayout from "@/components/services/service-layout";

export default function TrainingPage() {
  return (
    <ServiceLayout
      title="Training"
      description="We offer a diverse range of professional and management development training programs tailored to meet your organization's needs. Whether you're looking to enhance leadership abilities, improve technical proficiency, or foster team collaboration, we provide flexible and dynamic learning opportunities."
      imageSrc="/training.jpeg"
      imageAlt="Talent Acquisition Services Illustration"
      caseStudy={{
        title: "Workforce Development Training: From Dreamers to Go-Getters",
        overview:
          'TATARIY delivers transformative workforce development training that equips emerging leaders with the tools to turn ambition into action. As leaders of Dream In Colors Media, our team infuses our programs with a mission to inspire "Dreamers to Become Go-Getters," paired with TATARIY\'s commitment to delivering "Expertise You Need." Through partnerships with the African Union, Rotary Club, and local nonprofits, TATARIY has trained approximately 80 participants across targeted programs, fostering practical skills and career pathways. Our MWAA-SLBE, DBE, EDWOSB, SWaM, MBE, and SBE certifications position us as a trusted partner for federal, enterprise, and community training initiatives.',
        approach: `
          <p>TATARIY's training programs combine rigorous, federal-grade methodologies with culturally relevant engagement to drive measurable outcomes:</p>
          <ul>
            <li>Customized Curriculum: We design content with experts from government, technology, and entrepreneurship, ensuring relevance across industries.</li>
            <li>Expert Facilitation: With 15+ years in government contracting and program management, leads sessions that blend strategic insight with mentorship.</li>
            <li>Interactive Delivery: Workshops feature live Q&As, hands-on exercises, and open dialogue to maximize engagement and practical application.</li>
            <li>Action-Oriented Outcomes: Each participant receives a personalized action plan to translate learning into immediate next steps.</li>
          </ul>
          
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">Programs Delivered</h4>
          
          <p><strong>1. African Union Youth Career Forum</strong></p>
          <p>TATARIY collaborated with the African Union to deliver a training series, engaging youth professionals in government, technology, and creative fields.</p>
          <ul>
            <li>Addressed career navigation, bridging the "what now?" gap for aspiring leaders.</li>
            <li>Facilitated open discussions, resulting in actionable career plans for attendees.</li>
            <li>Achieved high engagement, with participants reporting increased clarity on career paths.</li>
          </ul>
          
          <p><strong>2. Rotary Club Workforce Readiness Workshop</strong></p>
          <p>TATARIY delivered a focused workshop for approximately 40 participants, partnered with a local Rotary Club, emphasizing career mapping, entrepreneurship, and goal-setting.</p>
          <ul>
            <li>Provided personalized action plans and resources for immediate application.</li>
            <li>Concluded with an interactive Q&A and mentorship connections to sustain impact.</li>
            <li>Earned strong feedback for delivering practical tools and boosting confidence.</li>
          </ul>
        `,
        solution: ``,
        results: `
          <ul>
            <li>~80 Participants Trained across two targeted sessions, empowering youth and emerging leaders to pursue purpose-driven careers.</li>
            <li>High Impact: Over 80% of participants developed personalized career or business plans, with several pursuing new ventures or professional roles.</li>
            <li>Trusted Partnerships: Collaborations with the African Union, Rotary Club, and local nonprofits demonstrate reliability and community trust.</li>
            <li>Community Engagement: Post-training mentorship and resource-sharing, inspired by Dream In Colors Media's ethos, extended program benefits.</li>
            <li>Client Feedback: "TATARIY's training provided our participants with clear, actionable steps to succeed." – Rotary Club Partner.</li>
          </ul>
          
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">Why TATARIY?</h4>
          <p>With MWAA-SLBE, DBE, EDWOSB, SWaM, MBE, and SBE certifications, TATARIY delivers proven training expertise to federal agencies, enterprises, and community organizations. Our programs empower workforces with skills and confidence to excel, rooted in over a decade of government contracting experience.</p>
          <p>Ready to elevate your training programs? Contact us at <a href="mailto:rahwa.haile@tatariy.com" class="text-blue-600 dark:text-blue-400 hover:underline">rahwa.haile@tatariy.com</a> or visit our <a href="/contact" class="text-blue-600 dark:text-blue-400 hover:underline">Contact Page</a> to discuss partnership opportunities.</p>
        `,
      }}
    />
  );
}
