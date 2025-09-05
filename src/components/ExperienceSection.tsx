import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Give Freedom Homes",
      location: "Florida",
      position: "Social Media Manager & Administrative Assistant",
      duration: "October 2024 - August 2025",
      responsibilities: [
        "Handled Social Media management and strategy",
        "Created engaging content for various platforms",
        "Provided comprehensive administrative assistance"
      ],
      current: true
    },
    {
      company: "WeTrain/VarsityGripz",
      location: "Atlanta, Georgia",
      position: "Executive Assistant",
      duration: "April 2024 - February 2025",
      responsibilities: [
        "Provides administrative and executive assistance to support the CEO's daily tasks",
        "Helps manage Shopify account and e-commerce operations",
        "Ensures CEO stays updated on productivity metrics and key performance indicators"
      ],
      current: false
    },
    {
      company: "Thrift @ The Warehouse SATX",
      location: "San Antonio, Texas",
      position: "Virtual Assistant",
      duration: "Aug 2023 - Present",
      responsibilities: [
        "Provides comprehensive virtual support to clients, managing administrative tasks, scheduling appointments, and handling correspondence to optimize efficiency and productivity",
        "Implements organizational systems to streamline workflows and improve time management, resulting in increased productivity and client satisfaction"
      ],
      current: true
    },
    {
      company: "WHG Customer Services Philippines",
      location: "Parañaque City",
      position: "Customer Due Diligence Analyst",
      duration: "Apr 2023 - Aug 2023",
      responsibilities: [
        "Conducting customer due diligence investigations to identify and assess potential risks associated with new and existing customers. This includes verifying customer identities, conducting background checks, and assessing potential risks associated with the customer's industry, location, and business activities",
        "Analyzing customer data and information to identify patterns and trends that could indicate potential fraud or other risks"
      ],
      current: false
    },
    {
      company: "Amazon Operations Services Philippines",
      location: "Pasay City",
      position: "Customer Service Associate",
      duration: "Apr 2022 - Mar 2023",
      responsibilities: [
        "Providing excellent customer service to Amazon delivery drivers and resolving any issues they may encounter while on the job",
        "Investigating and resolving driver issues related to package delivery, vehicle maintenance, and safety concerns",
        "Staying up-to-date with the latest policies, procedures, and technology related to Amazon delivery operations to ensure that drivers receive the most current information and support"
      ],
      current: false
    },
    {
      company: "Telus International Philippines",
      location: "Taguig City",
      position: "Customer Service Representative",
      duration: "Jan 2019 - Mar 2021",
      responsibilities: [
        "Excellent written communication skills and attention to detail",
        "Ability to troubleshoot technical issues and provide clear and concise instructions to customers",
        "Familiarity with Epic Games products and services, as well as the gaming industry as a whole",
        "Ability to work independently and as part of a team in a fast-paced and dynamic environment"
      ],
      current: false
    }
  ];

  const projects = [
    {
      title: "GoHighLevel Expert for Real Estate Workflow Setup with Email & SMS Integration",
      duration: "March 2025",
      type: "Freelance Project"
    },
    {
      title: "Edit Go High Level Funnel",
      duration: "July 2025",
      type: "Freelance Project"
    },
    {
      title: "Organized, Analytical Marketing Virtual Assistant",
      duration: "September 2024 - October 2024",
      type: "Contract Work"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
        Professional Experience
      </h2>
      
      <div className="space-y-6 mb-10">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-gray-900 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {exp.position}
                </CardTitle>
                {exp.current && (
                  <Badge variant="secondary" className="bg-gray-900 text-white w-fit">
                    Current
                  </Badge>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-gray-900">{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-gray-900 mt-1.5 text-xs">●</span>
                    <span className="text-sm leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Projects & Gigs
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 hover:border-gray-900 transition-colors">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <h4 className="font-medium text-gray-900 text-sm leading-tight">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <CalendarDays className="h-3 w-3" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;