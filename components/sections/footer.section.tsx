import { iconsMaps } from "@/constants/icons";
import { profile } from "@/constants/profile";
import Link from "next/link";
import type React from "react";
const { Quote } = iconsMaps.misc;

interface NavigationItem {
	title: string;
	href: string;
	icon: React.ElementType;
}

const navigationItems: NavigationItem[] = profile.navigation.map(({ title, href }) => ({
	title,
	href,
	icon: iconsMaps.navigation[title as keyof typeof iconsMaps.navigation],
}));

const socialLinks = [
	{
		href: profile.social.github,
		icon: iconsMaps.social.GitHub,
		label: "GitHub Profile",
	},
	{
		href: profile.social.linkedin,
		icon: iconsMaps.social.LinkedIn,
		label: "LinkedIn Profile",
	},
	{
		href: `mailto:${profile.contact.email}`,
		icon: iconsMaps.social.Mail,
		label: "Email Contact",
	},
];

export default function Footer() {
	return (
		<footer className="relative w-full bg-background">
			<div className="container relative mx-auto px-4 pt-16 pb-8">
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
					{/* Navigation Links */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold tracking-tight">
							<span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
								Navigation
							</span>
						</h3>
						<nav className="grid grid-cols-2 gap-4">
							{navigationItems.map((item) => (
								<Link
									key={item.title}
									href={item.href}
									className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
								>
									<span className="flex h-8 w-8 items-center justify-center rounded-md border bg-background transition-colors group-hover:border-primary group-hover:bg-primary/10">
										<item.icon className="h-4 w-4" />
									</span>
									<span className="font-medium">{item.title}</span>
								</Link>
							))}
						</nav>
					</div>

					{/* Quote Section */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold tracking-tight">
							<span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
								Inspiration
							</span>
						</h3>
						<div className="relative space-y-4 rounded-xl border bg-muted/50 p-6">
							<Quote className="h-5 w-5 text-primary" />
							<p className="text-sm italic text-muted-foreground">
								{profile.footer.quote.text}
							</p>
							<p className="text-sm font-medium">― {profile.footer.quote.author}</p>
						</div>
					</div>

					{/* Social Links Section */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold tracking-tight">
							<span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
								Let's Connect
							</span>
						</h3>
						<div className="flex gap-4">
							{socialLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative"
									aria-label={link.label}
								>
									<div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-0 blur transition duration-500 group-hover:opacity-100" />
									<div className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
										<link.icon className="h-5 w-5" />
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col items-center justify-center gap-4 pt-8">
					<p className="text-center text-sm text-muted-foreground">
						{profile.footer.copyright}
					</p>
				</div>
			</div>
		</footer>
	);
}
