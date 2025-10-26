import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(108,58,255,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <span className="text-purple-300">AI-Powered Terms of Service Analysis</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl">
              Know what you're <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">signing</span>.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Stop blindly clicking "I Agree." SignHere AI reads the fine print for you, breaking down Terms of Service into clear, color-coded insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white group"
                asChild
              >
                <a href="mailto:info@nanometer-h.com">
                  Back This Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl text-purple-400">34</div>
                <div className="text-sm text-gray-400">Backers</div>
              </div>
              <div>
                <div className="text-3xl text-purple-400">2.5L</div>
                <div className="text-sm text-gray-400">Funding Goal</div>
              </div>
              <div>
                <div className="text-3xl text-purple-400">-</div>
                <div className="text-sm text-gray-400">Days Left</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0MjU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
