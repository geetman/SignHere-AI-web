import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Heart, Lightbulb } from "lucide-react";

export function TeamMission() {
  const values = [
    {
      icon: Heart,
      title: "Built for Everyone",
      description: "We're not building another exclusive tech tool. SignHere AI is for everyone who's ever clicked 'I Agree' — which is literally everyone."
    },
    {
      icon: Lightbulb,
      title: "Transparency First",
      description: "We practice what we preach. Our own ToS is three paragraphs, written in plain English. No tricks, no hidden clauses."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Your feedback shapes our roadmap. We're building this with the community, not for corporate interests."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Designed for Those Who Value <span className="text-purple-400">Transparency</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I am a 17 year old visionary trying to make the world better.
            </p>
          </div>
          
          {/* Team image */}
          <div className="mb-16 rounded-xl overflow-hidden border border-purple-500/30">
            <ImageWithFallback
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8823a20c-a327-492f-befc-817503152733/dksc08d-f83d83fa-8b9e-4d00-b478-9c47f97703ef.png/v1/fill/w_1280,h_366,q_80,strp/signhere_banner_by_nmckk_dksc08d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY2IiwicGF0aCI6Ii9mLzg4MjNhMjBjLWEzMjctNDkyZi1iZWZjLTgxNzUwMzE1MjczMy9ka3NjMDhkLWY4M2Q4M2ZhLThiOWUtNGQwMC1iNDc4LTljNDdmOTc3MDNlZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Oq7HLcbNSN4bruZpWjKaZD15WZjNMDuxe8yKfO_qvLk"
              alt="Team collaboration"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          
          {/* Mission statement */}
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl text-white mb-4">My Mission</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              To democratize legal transparency — because no one should need a law degree or hours of free time to understand what they’re agreeing to. AI won’t replace human judgment here; it’ll empower it.
            </p>
          </div>
          
          {/* Rebellion statement */}
          <div className="mt-12 text-center">
            <p className="text-xl text-purple-300 italic">
              "Big Tech thrives on complexity. This is here to simplify it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
