"use client";
import { AboutSection } from "@/components/sections/about.section";
import { ExperienceSection } from "@/components/sections/experiences.section";
import { Footer } from "@/components/sections/footer.section";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects.section";
import { SkillsSection } from "@/components/sections/skill.section";
import { AcademicSection } from "@/components/sections/academic-background.section";

export default function Page() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<AcademicSection />
			<SkillsSection />
			<Footer />
		</>
	);
}
