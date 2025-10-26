import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Twitter, Github, Linkedin, Mail, MessageCircle, Youtube, Instagram, CircleUser } from "lucide-react";

export function ContactFollow() {
  const socialLinks = [
    { icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@nanometerstudios" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krishaang-kaushik-5900b3285" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nanometerhorizonofficial" },
    { icon: CircleUser, label: "Main Website", href: "https://www.nanometer-h.com" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Stay <span className="text-purple-400">Connected</span>
            </h2>
            <p className="text-xl text-gray-400">
              Join our community and be the first to know when we launch.
            </p>
          </div>
                    
          {/* Social media */}
          <div className="text-center">
            <h3 className="text-2xl text-white mb-6">Follow Our Journey</h3>
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-full transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-purple-400" />
                </a>
              ))}
            </div>
            
            {/* Contact info */}
            <div className="text-gray-400 space-y-2">
              <p>Questions? Reach out to us:</p>
              <a href="mailto:info@nanometer-h.com" className="text-purple-400 hover:text-purple-300">
                info@nanometer-h.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          <p>© 2025 SignHere AI. © 2025 Nanometer Horizon. Fighting for transparency, one ToS at a time.</p>
          <p className="mt-2 text-sm">
            Brought to you by Nanometer Horizon.
          </p>
        </div>
      </div>
    </section>
  );
}
