import { AlertCircle, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              The Problem: We're All <span className="text-purple-400">Signing Blind</span>
            </h2>
            <p className="text-xl text-gray-400">
              Every day, millions of people click "I Agree" without reading thousands of words of legal jargon. Big Tech banks on this.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* The Problem */}
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8">
              <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-2xl mb-4 text-red-400">Without SignHere AI</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Hidden clauses that sell your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Buried arbitration agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Unclear liability terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Hours spent reading legal text</span>
                </li>
              </ul>
            </div>
            
            {/* The Solution */}
            <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/30 rounded-xl p-8">
              <CheckCircle2 className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl mb-4 text-purple-400">With SignHere AI</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Instant ToS analysis in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Clear, color-coded risk ratings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Plain English summaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Make informed decisions fast</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-xl p-8">
            <p className="text-2xl text-purple-300">
              "I believe transparency isn't optional, it's a right."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
