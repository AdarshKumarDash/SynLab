import Navigation from "@/components/navigation/Navigation";
import StoryProgress from "@/components/navigation/StoryProgress";
import Hero from "@/components/hero/Hero";
import TransitionBand from "@/components/cinematic/TransitionBand";
import Idea from "@/components/idea/Idea";
import Problem from "@/components/story/Problem";
import Answer from "@/components/answer/Answer";
import Experience from "@/components/experience/Experience";
import Story from "@/components/story/Story";
import SynLabOne from "@/components/technology/SynLabOne";
import Laboratory from "@/components/laboratory/Laboratory";
import Model3D from "@/components/model3d/Model3D";
import Roadmap from "@/components/roadmap/Roadmap";
import Audiences from "@/components/audiences/Audiences";
import UseCases from "@/components/usecases/UseCases";
import Technology from "@/components/technology/Technology";
import Dashboard from "@/components/dashboard/Dashboard";
import Research from "@/components/research/Research";
import Comparison from "@/components/comparison/Comparison";
import Future from "@/components/future/Future";
import Impact from "@/components/impact/Impact";
import Team from "@/components/team/Team";
import WhatWouldYouExplore from "@/components/explore/WhatWouldYouExplore";
import Contact from "@/components/contact/Contact";
import Finale from "@/components/team/Finale";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <StoryProgress />
      <main id="main">
        <Hero />
        <TransitionBand />
        <Idea />
        <Problem />
        <Answer />
        <Experience />
        <Story />
        <SynLabOne />
        <Laboratory />
        <Model3D />
        <Roadmap />
        <Audiences />
        <UseCases />
        <Technology />
        <Dashboard />
        <Research />
        <Comparison />
        <Future />
        <Impact />
        <Team />
        <WhatWouldYouExplore />
        <Contact />
        <Finale />
      </main>
      <Footer />
    </>
  );
}
