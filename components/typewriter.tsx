"use client";

import { useTranslations } from "@/constants/profile";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function TypewriterText() {
	const { profile } = useTranslations();
	const texts = [profile.name, profile.role];
	const [displayText, setDisplayText] = useState("");
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	const displayTextRef = useRef(displayText);
	const isDeletingRef = useRef(isDeleting);
	const currentTextIndexRef = useRef(currentTextIndex);

	useEffect(() => {
		displayTextRef.current = displayText;
	}, [displayText]);

	useEffect(() => {
		isDeletingRef.current = isDeleting;
	}, [isDeleting]);

	useEffect(() => {
		currentTextIndexRef.current = currentTextIndex;
	}, [currentTextIndex]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const typingSpeed = 150;
		const deletingSpeed = 50;
		const pauseBeforeDelete = 2000;
		let timer: NodeJS.Timeout;

		const typeWriter = () => {
			const fullText = texts[currentTextIndexRef.current];

			if (!isDeletingRef.current) {
				if (displayTextRef.current.length < fullText.length) {
					setDisplayText(fullText.slice(0, displayTextRef.current.length + 1));
					timer = setTimeout(typeWriter, typingSpeed);
				} else {
					timer = setTimeout(() => {
						setIsDeleting(true);
						timer = setTimeout(typeWriter, deletingSpeed);
					}, pauseBeforeDelete);
				}
			} else {
				if (displayTextRef.current.length > 0) {
					setDisplayText(fullText.slice(0, displayTextRef.current.length - 1));
					timer = setTimeout(typeWriter, deletingSpeed);
				} else {
					setIsDeleting(false);
					setCurrentTextIndex((prev) => (prev + 1) % texts.length);
					timer = setTimeout(typeWriter, typingSpeed);
				}
			}
		};

		timer = setTimeout(typeWriter, typingSpeed);
		return () => clearTimeout(timer);
	}, [profile]);

	return (
		<Link
			href="/"
			className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-tighter transition-colors hover:text-primary"
		>
			<Code2 className="h-8 w-8" />
			<span>{displayText}</span>
			<span className="animate-pulse">|</span>
		</Link>
	);
}
