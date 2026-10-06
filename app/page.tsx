import Navbar from "@/components/Navbar";
import ScrollSection from "../components/ui/ScrollSection";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import WhyAquaBuddy from "@/components/WhyAquaBuddy";
import TechStack from "@/components/TechStack";
import Engineering from "@/components/Engineering";
import FutureImprovements from "@/components/FutureImprovements";
import Highlights from "@/components/Highlights";
import DeveloperNote from "@/components/DeveloperNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ScrollSection>
                    <Problem />
                </ScrollSection>
                <ScrollSection>
                    <Solution />
                </ScrollSection>
                <ScrollSection>
                    <Features />
                </ScrollSection>
                <ScrollSection>
                    <HowItWorks />
                </ScrollSection>
                <ScrollSection>
                    <AppShowcase />
                </ScrollSection>
                <ScrollSection>
                    <WhyAquaBuddy />
                </ScrollSection>
                <ScrollSection>
                    <TechStack />
                </ScrollSection>
                <ScrollSection>
                    <Engineering />
                </ScrollSection>
                <ScrollSection>
                    <FutureImprovements />
                </ScrollSection>
                <ScrollSection>
                    <Highlights />
                </ScrollSection>
                <ScrollSection>
                    <DeveloperNote />
                </ScrollSection>
                <ScrollSection>
                    <FinalCTA />
                </ScrollSection>
            </main>
            <ScrollSection>
                <Footer />
            </ScrollSection>
        </>
    );
}
