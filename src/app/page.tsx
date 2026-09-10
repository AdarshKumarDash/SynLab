import Navigation from "@/components/navigation/Navigation";
import StoryProgress from "@/components/navigation/StoryProgress";
import Hero from "@/components/hero/Hero";
import Idea from "@/components/idea/Idea";
import Problem from "@/components/story/Problem";
import Answer from "@/components/answer/Answer";
import Experience from "@/components/experience/Experience";
import Story from "@/components/story/Story";
import SynLabOne from "@/components/technology/SynLabOne";
import Laboratory from "@/components/laboratory/Laboratory";
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
import Finale from "@/components/team/Finale";

export default function Page() {
  return (
    <>
      <Navigation />
      <StoryProgress />
      <main id="main">
        <Hero />
        <Idea />
        <Problem />
        <Answer />
        <Experience />
        <Story />
        <SynLabOne />
        <Laboratory />
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
        <Finale />
      </main>
    </>
  );
}
