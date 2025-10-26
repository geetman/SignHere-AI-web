import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { CrowdfundingGoals } from "./components/CrowdfundingGoals";
import { RewardsTiers } from "./components/RewardsTiers";
import { TeamMission } from "./components/TeamMission";
import { ContactFollow } from "./components/ContactFollow";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Features />
      <CrowdfundingGoals />
      <RewardsTiers />
      <TeamMission />
      <ContactFollow />
    </div>
  );
}
