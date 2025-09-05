import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProfileSummary = () => {
  return (
    <section className="mb-8">
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
            Professional Summary
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              Experienced <strong>GoHighLevel & Automation Specialist</strong> with proven expertise in funnel building, 
              pipeline management, and comprehensive automation workflows. Demonstrated success in implementing 
              sophisticated GHL systems for real estate and e-commerce clients, with hands-on experience in 
              email campaigns, SMS integration, and A2P registration processes.
            </p>
            <p className="mb-4">
              Strong background in customer service excellence and virtual assistance, bringing exceptional 
              communication skills and attention to detail to every automation project. Proficient in 
              integrating multiple platforms including Make, Zapier, and n8n to create seamless automated 
              workflows that drive business growth and operational efficiency.
            </p>
            <p>
              Passionate about leveraging cutting-edge automation tools and AI-driven solutions to optimize 
              business processes, enhance customer experiences, and deliver measurable results for clients 
              across diverse industries.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProfileSummary;