"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.origin
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Gen_Pedrasta_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 print:hidden">
      <Button
        onClick={handleDownloadPDF}
        disabled={isGenerating}
        size="lg"
        className="bg-black hover:bg-gray-800 text-white shadow-lg"
      >
        {isGenerating ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            Generating PDF...
          </div>
        ) : (
          'Download PDF'
        )}
      </Button>
    </div>
  );
}