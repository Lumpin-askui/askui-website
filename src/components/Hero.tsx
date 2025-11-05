import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, Terminal, MessageSquare } from "lucide-react";
import heroDevices from "@/assets/hero-devices.png";

const Hero = () => {
  return (
    <>
      {/* Hero Text Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              Leading in Android World & OSWorld Benchmarks
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Production-Ready
              <span className="block text-accent mt-2">Computer Use Agents</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 mb-10">
              Across All Platforms
            </p>
            
            <p className="mb-12 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Deploy AI agents on Windows, MacOS, Linux, iOS, and Android with enterprise-grade security, reliability, and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-glow" asChild>
                <a href="#contact">Book a Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <img 
              src={heroDevices} 
              alt="AskUI across multiple platforms - desktop, mobile, tablet, smartwatch, and automotive"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Built for Developers & Business Users
            </h2>
            
            <Tabs defaultValue="chat" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/5 border border-white/10 mb-8">
                <TabsTrigger value="cli" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                  <Terminal className="mr-2 h-4 w-4" />
                  CLI for Developers
                </TabsTrigger>
                <TabsTrigger value="chat" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat for Teams
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cli" className="mt-0">
                <div className="rounded-xl border border-white/20 bg-[#1e1e1e] p-6 text-left overflow-x-auto shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 text-white/60 text-xs">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 font-mono">terminal</span>
                  </div>
                  <pre className="font-mono text-sm text-white/90 leading-relaxed">
                    <code>{`$ askui-cli run ./tasks --devices playwright://chrome

AskUI CLI runs task

Conversion-ID: a3f4b2c1-9d8e-4a2f-b1c3-d4e5f6a7b8c9
Chat API: http://localhost:8080/chat

We are now starting to Execute:
✓ Connecting to Chrome browser
✓ Loading task: test-login-flow.txt
✓ Vision model initialized
✓ Executing automation steps...
  → Navigate to login page
  → Enter credentials
  → Click login button
✓ Task completed successfully

Results: ./output/test-results.json`}</code>
                  </pre>
                </div>
                <p className="text-white/70 text-center mt-6 text-base">
                  Configure models, devices, and tools via command line. Perfect for CI/CD pipelines.
                </p>
              </TabsContent>

              <TabsContent value="chat" className="mt-0">
                <div className="rounded-xl border border-white/20 bg-gradient-to-br from-primary/40 to-primary/60 p-8 backdrop-blur shadow-2xl">
                  <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 border-2 border-accent/50">
                        <span className="text-accent font-semibold text-sm">You</span>
                      </div>
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 text-white text-base max-w-md backdrop-blur">
                        Test the login flow on our production app
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">AI</span>
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-5 text-primary text-base flex-1 shadow-lg">
                        <p className="mb-3 font-medium">I&apos;ll test the login flow for you. Let me:</p>
                        <ul className="space-y-2 text-sm mb-3">
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Navigate to the login page
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Enter test credentials
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Verify successful authentication
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            Check dashboard loads correctly
                          </li>
                        </ul>
                        <p className="text-green-600 font-semibold flex items-center gap-2">
                          <span className="text-lg">✓</span>
                          Test completed - All checks passed!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-center mt-6 text-base">
                  Natural language interface for non-technical users. No coding required.
                </p>
              </TabsContent>
            </Tabs>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm md:text-base text-white/70">Platforms</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">ISO27001</div>
                <div className="text-sm md:text-base text-white/70">Certified</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">#1</div>
                <div className="text-sm md:text-base text-white/70">Android Benchmark</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
