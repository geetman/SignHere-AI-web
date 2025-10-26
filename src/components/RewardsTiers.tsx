import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, Star, Sparkles, Crown } from "lucide-react";

export function RewardsTiers() {
  const tiers = [
    {
      name: "Early Supporter",
      icon: Star,
      popular: false,
      benefits: [
        "Early access to beta",
        "Supporter badge on platform",
        "Certificate of Support",
        "Email updates on development"
      ]
    },
    {
      name: "Power User",
      icon: Sparkles,
      popular: true,
      benefits: [
        "Everything in Early Supporter",
        "1 year Premium",
        "Priority feature requests",
        "Future demo access"
      ]
    },
    {
      name: "Developer User",
      icon: Crown,
      popular: false,
      benefits: [
        "Everything in Power User",
        "Listed as Developer User",
        "API access for developers",
        "Custom company ToS monitoring",
        "Personalized Development Kit",
        "Exclusive Discord access"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Choose Your <span className="text-purple-400">Reward Tier</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Back SignHere AI and get exclusive access to features that protect your digital rights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                tier.popular
                  ? 'bg-gradient-to-b from-purple-600/20 to-purple-950/40 border-purple-500 ring-2 ring-purple-500/50 scale-105'
                  : 'bg-gradient-to-b from-purple-950/20 to-black border-purple-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <tier.icon className={`h-12 w-12 mx-auto mb-4 ${tier.popular ? 'text-purple-400' : 'text-purple-500'}`} />
                <h3 className="text-2xl text-white mb-2">{tier.name}</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  tier.popular
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-purple-600/80 hover:bg-purple-600'
                }`}
                size="lg"
                asChild
              >
                <a href="mailto:info@nanometer-h.com">Contact Us</a>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-400">
          <p>All amounts in INR • Payments Via UPI • Direct Payment Processing</p>
          <p>If you think that you would like to support the cause, contact info@nanometer-h.com</p>
        </div>
      </div>
    </section>
  );
}
