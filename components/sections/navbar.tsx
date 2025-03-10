"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { TypewriterText } from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { iconsMaps } from "@/constants/icons";
import { useTranslations } from "@/constants/profile";
import { downloadResume } from "@/lib/download-resume";
import { DownloadIcon, Menu } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useState } from "react";

export function Navbar() {
	const translation = useTranslations();
	const { profile, ui } = translation;

	const navigationItems = profile.navigation.map(({ title, key, href }) => ({
		title,
		href,
		icon: iconsMaps.navigation[key as keyof typeof iconsMaps.navigation],
	}));

	const [isOpen, setIsOpen] = useState(false);

	const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		const isInPageLink = href.startsWith("/#");
		if (isInPageLink && window.location.pathname === "/") {
			e.preventDefault();
			const targetId = href.split("#")[1];
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				window.history.pushState(null, "", href);
			}
			setIsOpen(false);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-16 items-center justify-between px-8">
				<TypewriterText />

				{/* Desktop Navigation */}
				<NavigationMenu className="hidden lg:flex">
					<NavigationMenuList className="gap-2 items-center">
						{navigationItems.map((item) => (
							<NavigationMenuItem asChild key={item.title}>
								<NavigationMenuLink
									href={item.href}
									onClick={(e) => handleNavigation(e, item.href)}
									className="group inline-flex h-9 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
								>
									{item.title}
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
						<Button
							variant="outline"
							size="sm"
							className="flex items-center gap-2"
							onClick={() => downloadResume(translation)}
						>
							<DownloadIcon className="h-4 w-4" />
							{ui.resume}
						</Button>
						<ThemeToggle />
					</NavigationMenuList>
				</NavigationMenu>

				{/* Mobile Navigation */}
				<div className="lg:hidden flex gap-1 items-center">
					<ThemeToggle />

					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="relative hover:bg-accent/50 transition-colors"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-80 flex flex-col backdrop-blur-xl backdrop-saturate-150 bg-background/95 border-l border-border/40"
						>
							<div className="flex flex-col h-full">
								<nav className="flex flex-col space-y-4 mt-8">
									{navigationItems.map((item) => {
										const Icon = item.icon;
										return (
											<SheetClose asChild key={item.title}>
												<Link
													href={item.href}
													onClick={(e) => handleNavigation(e, item.href)}
													className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-md hover:bg-accent/10"
												>
													{Icon && <Icon className="h-5 w-5" />}
													{item.title}
												</Link>
											</SheetClose>
										);
									})}
								</nav>
								<div className="mt-auto pt-4">
									<Button
										variant="outline"
										size="sm"
										className="flex items-center gap-2 w-full"
										onClick={() => downloadResume(translation)}
									>
										<DownloadIcon className="h-4 w-4" />
										{ui.downloadResume}
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
