import { Progress } from "./ui/progress";
import { Target, Rocket, Globe } from "lucide-react";

export function CrowdfundingGoals() {
  const currentAmount = 17000;
  const goalAmount = 250000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const milestones = [
    {
      icon: Target,
      amount: "₹2.5L",
      title: "Beta Launch",
      description: "Full ToS analyzer with core features",
      status: "current"
    },
    {
      icon: Rocket,
      amount: "₹5L",
      title: "Full Platform",
      description: "Browser extension, desktop & moblie apps, bi-directional AI system, and API access",
      status: "upcomming"
    },
    {
      icon: Globe,
      amount: "₹7.5L",
      title: "Global Expansion",
      description: "Multi-language support, TOS tracking, tool suite, and enterprise features",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Help Us <span className="text-purple-400">Build the Future</span>
            </h2>
            <p className="text-xl text-gray-400">
              Every contribution brings us closer to a world where everyone knows what they're agreeing to.
            </p>
          </div>
          
          {/* Progress section */}
          <div className="bg-gradient-to-br from-purple-950/40 to-black border border-purple-500/30 rounded-xl p-8 mb-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <div className="text-4xl text-purple-400">₹{currentAmount.toLocaleString()}</div>
                <div className="text-gray-400">raised of ₹{goalAmount.toLocaleString()} goal</div>
              </div>
              <div className="text-right">
                <div className="text-2xl text-white">34</div>
                <div className="text-gray-400">backers</div>
              </div>
            </div>
            
            <Progress value={progressPercentage} className="h-3 bg-purple-950/50" />
            
            <div className="mt-4 text-center text-gray-400">
              <span className="text-purple-400">{progressPercentage.toFixed(0)}%</span> funded • <span className="text-purple-400">- days</span> remaining
            </div>
          </div>
          
          {/* Milestones */}
          <h3 className="text-3xl text-white mb-8 text-center">Funding Milestones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl border ${
                  milestone.status === 'completed'
                    ? 'bg-green-950/20 border-green-500/30'
                    : milestone.status === 'current'
                    ? 'bg-purple-950/40 border-purple-500/50 ring-2 ring-purple-500/30'
                    : 'bg-gray-950/40 border-gray-500/30'
                }`}
              >
                {milestone.status === 'completed' && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                {milestone.status === 'current' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                    Current Goal
                  </div>
                )}
                
                <milestone.icon className={`h-10 w-10 mb-4 ${
                  milestone.status === 'completed' ? 'text-green-400' :
                  milestone.status === 'current' ? 'text-purple-400' :
                  'text-gray-500'
                }`} />
                <div className="text-2xl text-white mb-2">{milestone.amount}</div>
                <h4 className="text-xl text-white mb-2">{milestone.title}</h4>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
