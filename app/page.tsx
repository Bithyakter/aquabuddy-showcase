import Navbar from "@/components/Navbar";
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
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <Features />
                <HowItWorks />
                <AppShowcase />
                <WhyAquaBuddy />
                <TechStack />
                <Engineering />
                <FutureImprovements />
                <Highlights />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}