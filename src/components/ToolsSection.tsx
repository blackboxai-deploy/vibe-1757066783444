import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ToolsSection: React.FC = () => {
  const toolCategories = [
    {
      category: "Automation & Integration",
      tools: ["Make", "Zapier", "n8n", "GoHighLevel"]
    },
    {
      category: "AI & Productivity",
      tools: ["ChatGPT", "Google Gemini"]
    },
    {
      category: "Design & Development",
      tools: ["Figma", "Framer"]
    },
    {
      category: "CRM & Sales",
      tools: ["Pipedrive", "GoHighLevel"]
    },
    {
      category: "Marketing Platforms",
      tools: ["Systeme.io", "ClickFunnels", "GoHighLevel"]
    }
  ];

  const allTools = [
    "Make", "Zapier", "n8n", "ChatGPT", "Google Gemini", 
    "GoHighLevel", "Figma", "Framer", "Pipedrive", 
    "Systeme.io", "ClickFunnels"
  ];

  return (
    <section className="mb-8">
      <Card className="border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-black flex items-center gap-2">
            <div className="w-1 h-6 bg-black rounded-full"></div>
            Tools & Platforms
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Categorized View for Desktop */}
          <div className="hidden md:block space-y-6">
            {toolCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex}
                      variant="outline" 
                      className="px-3 py-1 text-sm border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Simple Grid View for Mobile */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {allTools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="px-3 py-2 text-sm border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors justify-center"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlight GoHighLevel Expertise */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="font-medium text-black">GoHighLevel Specialization</span>
            </div>
            <p className="text-sm text-gray-600">
              Advanced expertise in GoHighLevel workflows, funnel building, automation setup, 
              pipeline management, and integration with third-party tools for comprehensive 
              business automation solutions.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ToolsSection;