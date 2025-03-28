"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/constants/profile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectCard } from "../project-card";
import type { Project } from "@/components/types";

export function ProjectsSection() {
	const { profile, ui } = useTranslations();
	const projects = profile.projects;
	const [activeIndex, setActiveIndex] = useState(0);
	const [mounted, setMounted] = useState(false);

	const scrollLeft = () => {
		const container = document.getElementById("projects-container");
		if (container) {
			const scrollAmount = container.clientWidth * 0.8;
			container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		const container = document.getElementById("projects-container");
		if (container) {
			const scrollAmount = container.clientWidth * 0.8;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	useEffect(() => {
		setMounted(true);
		const container = document.getElementById("projects-container");
		if (!container) return;

		const handleScroll = () => {
			const scrollPosition = container.scrollLeft;
			const containerWidth = container.clientWidth;
			const scrollWidth = container.scrollWidth;
			const maxScroll = scrollWidth - containerWidth;

			if (maxScroll <= 0) {
				setActiveIndex(0);
				return;
			}

			const scrollFraction = scrollPosition / maxScroll;
			const newIndex = Math.round(scrollFraction * (projects.length - 1));
			setActiveIndex(newIndex);
		};

		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll);
	}, [projects.length]);

	return (
		<section
			id="projects"
			className="flex justify-center w-full dark:bg-grid-small-white/[0.2]"
		>
			<div className="w-full px-4 md:px-6 relative container">
				<div className="flex items-center justify-between mb-8">
					<div className="space-y-1">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							{ui.featuredProjects}
						</h2>
						<p className="text-muted-foreground">{ui.discoverMyRecentWork}</p>
					</div>

					<div className="hidden md:flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							onClick={scrollLeft}
							className="h-8 w-8 rounded-full"
						>
							<ChevronLeft className="h-4 w-4" />
							<span className="sr-only">Scroll left</span>
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={scrollRight}
							className="h-8 w-8 rounded-full"
						>
							<ChevronRight className="h-4 w-4" />
							<span className="sr-only">Scroll right</span>
						</Button>
					</div>
				</div>

				<div className="relative">
					<div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />

					<div
						id="projects-container"
						className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
					>
						{projects.map((project) => (
							<ProjectCard key={project.id} project={project as Project} />
						))}
					</div>
				</div>

				{/* Render mobile dots only after mounting to prevent hydration mismatches */}
				{mounted && (
					<div className="mt-4 flex justify-center gap-1 md:hidden">
						{projects.map((project, index) => (
							<div
								key={project.id}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									index === activeIndex ? "w-10 bg-primary" : "w-1.5 bg-muted"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
