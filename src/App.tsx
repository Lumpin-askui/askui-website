import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Benchmarks from "./pages/Benchmarks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import SoftwareTesting from "./pages/SoftwareTesting";
import AutomationTeams from "./pages/AutomationTeams";
import AgentStartups from "./pages/AgentStartups";
import RoiCalculator from "./pages/RoiCalculator";
import AgileTestingDaysEvent from "./pages/AgileTestingDaysEvent";
import CSVUpload from "./pages/CSVUpload";
import IndustryPage from "./pages/IndustryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-posts/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/solutions/software-testing" element={<SoftwareTesting />} />
          <Route path="/solutions/automation-teams" element={<AutomationTeams />} />
          <Route path="/solutions/agent-startups" element={<AgentStartups />} />
          
          {/* Industry Pages */}
          <Route path="/solutions/finance" element={
            <IndustryPage 
              title="Banking & Finance" 
              subtitle="Automate legacy mainframes and modern fintech apps with equal ease."
              description="Financial institutions rely on a mix of AS/400 terminals, Windows desktop apps, and modern web interfaces. AskUI Caesr handles them all in a single workflow, ensuring compliance and reliability."
              features={["Automate SWIFT and SEPA transfers", "KYC/AML verification workflows", "Legacy mainframe interaction", "Secure data handling (ISO27001)"]}
            />
          } />
          <Route path="/solutions/retail" element={
            <IndustryPage 
              title="Retail & E-commerce" 
              subtitle="Ensure seamless shopping experiences across every channel."
              description="From Point-of-Sale (POS) systems to mobile shopping apps, AskUI verifies that every transaction works perfectly. Simulate real user behavior to catch bugs before Black Friday."
              features={["POS system automation", "Cross-browser checkout testing", "Inventory management synchronization", "Loyalty program verification"]}
            />
          } />
          <Route path="/solutions/healthcare" element={
            <IndustryPage 
              title="Healthcare" 
              subtitle="HIPAA-compliant automation for patient care systems."
              description="Connect Electronic Health Records (EHR) with diagnostic systems and patient portals. Reduce administrative burden so medical staff can focus on patient care."
              features={["EHR data entry automation", "Claims processing workflows", "Patient appointment scheduling", "Legacy medical software integration"]}
            />
          } />
          <Route path="/solutions/telecom" element={
            <IndustryPage 
              title="Telecommunications" 
              subtitle="Automate network provisioning and customer support."
              description="Manage complex billing systems, network configurations, and customer support portals. AskUI scales to handle millions of transactions with Agent OS."
              features={["Network provisioning automation", "Billing system verification", "Customer support agent assist", "Field service dispatch coordination"]}
            />
          } />
          <Route path="/solutions/manufacturing" element={
            <IndustryPage 
              title="Manufacturing" 
              subtitle="Automate HMI testing and SCADA control systems."
              description="Ensure your production lines run smoothly by automating tests for Human-Machine Interfaces (HMIs) and industrial control panels. AskUI interacts with physical screens and legacy software alike."
              features={["HMI panel testing", "SCADA system verification", "Production line software integration", "Digital twin validation"]}
            />
          } />
          <Route path="/solutions/consumer-electronics" element={
            <IndustryPage 
              title="Consumer Electronics" 
              subtitle="Deliver flawless user experiences on any device."
              description="Test smart home devices, wearables, and entertainment systems. AskUI's vision-based control allows you to automate testing on embedded screens and physical interfaces without instrumenting the device."
              features={["Smart TV & Set-top box testing", "Wearable device verification", "IoT app integration", "Physical device interaction"]}
            />
          } />
          <Route path="/solutions/automotive" element={
            <IndustryPage 
              title="Automotive" 
              subtitle="Next-generation testing for digital cockpits and infotainment."
              description="Validate In-Vehicle Infotainment (IVI) systems and digital clusters. AskUI sees what the driver sees, enabling end-to-end testing of navigation, media, and vehicle settings."
              features={["IVI & Digital Cockpit testing", "Navigation system verification", "Mobile companion app testing", "Voice assistant validation"]}
            />
          } />

          <Route path="/solutions/citrix" element={
            <IndustryPage 
              title="Citrix Automation" 
              subtitle="Automate applications inside Citrix via visual agents."
              description="AskUI's vision-based agents see Citrix desktops just like a human does, allowing you to automate legacy apps, mainframes, and secure environments without installing agents on the remote machine."
              features={["Visual recognition of remote apps", "No installation on Citrix server required", "End-to-end workflow automation", "Secure & non-intrusive"]}
            />
          } />
          <Route path="/solutions/sap" element={
            <IndustryPage 
              title="SAP Automation" 
              subtitle="Robust automation for SAP GUI and Fiori."
              description="Automate complex SAP workflows across SAP GUI for Windows, SAP Fiori, and SAP S/4HANA. AskUI handles dynamic selectors and custom controls by using visual understanding instead of code injection."
              features={["SAP GUI & Fiori support", "Handle custom SAP controls", "Cross-application workflows (SAP + Excel/Web)", "Stable automation for complex processes"]}
            />
          } />

          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/event/agile-testing-days" element={<AgileTestingDaysEvent />} />
          <Route path="/csv-upload" element={<CSVUpload />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
