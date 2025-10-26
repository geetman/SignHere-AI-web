import { Scan, Shield, BarChart3, Zap, Eye, FileText } from "lucide-react";
import { Card } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Scan,
      title: "AI-Powered ToS Scanning",
      description: "Just hit scan and the AI reads through the entire text in seconds.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Color-Coded Risk Ratings",
      description: "Every clause is labeled: Very Bad (red), Bad (orange), Mid (yellow), or Good (green). No guessing.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "Clear Bullet Points",
      description: "Complex legal jargon translated into simple, scannable bullet points anyone can understand.",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Transparency Score",
      description: "Get an overall transparency rating for any service based on their terms and privacy policies.",
      color: "purple"
    },
    {
      icon: Eye,
      title: "Hidden Clause Detection",
      description: "The AI highlights suspicious clauses that companies often bury in the fine print.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "No more spending hours reading. Get comprehensive insights in under 30 seconds.",
      color: "purple"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Built to <span className="text-purple-400">Empower</span> You
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            SignHere AI uses advanced natural language processing to decode legal documents and put the power back in your hands.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-purple-950/40 to-black border-purple-500/30 p-6 hover:border-purple-400/50 transition-all hover:scale-105"
            >
              <feature.icon className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Demo visualization */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-purple-950/40 to-black border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-2xl text-white mb-6 text-center">Example Analysis</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-500/30 rounded-lg">
              <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">Very Bad</span>
              <p className="text-gray-300">Company may share your personal data with third-party advertisers without explicit consent.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-950/30 border border-orange-500/30 rounded-lg">
              <span className="px-3 py-1 bg-orange-600 text-white text-xs rounded-full">Bad</span>
              <p className="text-gray-300">You waive your right to participate in class-action lawsuits.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-950/30 border border-yellow-500/30 rounded-lg">
              <span className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-full">Mid</span>
              <p className="text-gray-300">Service may be terminated at any time with 30 days notice.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-950/30 border border-green-500/30 rounded-lg">
              <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">Good</span>
              <p className="text-gray-300">You retain full ownership of content you create on the platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
