import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gen Pedrasta - GoHighLevel & Automation Specialist",
  description: "Professional resume for Gen Pedrasta - GoHighLevel & Automation Specialist with expertise in funnel building, pipeline management, and marketing automation.",
  keywords: "GoHighLevel, Automation Specialist, Funnel Builder, Pipeline Management, Email Campaigns, Landing Pages",
  authors: [{ name: "Gen Pedrasta" }],
  openGraph: {
    title: "Gen Pedrasta - GoHighLevel & Automation Specialist",
    description: "Professional resume showcasing expertise in GoHighLevel, automation, and funnel building",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}