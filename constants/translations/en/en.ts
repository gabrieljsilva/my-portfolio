export const en = {
	ui: {
		resume: "Resume",
		downloadResume: "Download Resume",
		viewProjects: "View Projects",
		getInTouch: "Get in Touch",
		sendMeAMessage: "Send me a message and I'll respond as soon as possible",
		aboutMe: "About Me",
		featuredProjects: "Featured Projects",
		discoverMyRecentWork: "Discover some of my recent work",
		myProfessionalJourney:
			"My professional journey and the projects I've worked on",
		experiences: "Experiences",
		professionalExperience: "Professional Experience",
		technicalSkills: "Technical Skills",
		skillsAndExpertise: "Skills & Expertise",
		exploreMySkillsAndExpertise:
			"Explore the technologies and tools I excel at to build scalable and efficient systems.",
		navigation: "navigation",
		inspiration: "Inspiration",
		letsConnect: "Let's Connect",
		latestPosts: "Latest Posts",
		viewMore: "View More",
		minRead: "min read",
		views: "views",
		professionalSummary: "Professional Summary",
		location: "Location",
		present: "present",
		keyAchievements: "Key Achievements",
		at: "at",
		close: "Close",
		keyFeatures: "Key Features",
		whatsYourName: "What's your name?",
		whatsYouEmailAddress: "What's your email address?",
		yourMessage: "Your Message",
		yourNamePlaceholder: "Your name",
		yourEmailPlaceholder: "your.email@example.com",
		yourMessagePlaceholder: "Leave your message here...",
		sendMessage: "Send Message",
		sendingMessage: "Sending...",
		comingSoon: "Coming Soon...",
		viewProject: "View Project",
		technologies: "Technologies",
		academicBackground: "Academic Background",
		portfolio: "Portfolio",
		phone: "Phone",
	},
	profile: {
		name: "Gabriel Silva",
		fullName: "Gabriel de Jesus Silva",
		role: "Software Developer",
		currentCompany: "Hospital Israelita Albert Einstein",
		currentCompanyShortName: "HIAE",
		birthdayDate: "2000-01-23",
		resumeSummary:
			"Full Stack Developer with over 5 years of experience creating robust and scalable solutions for healthcare and technology sectors. Specialized in modular architectures with Nest.js and implementing microservices using Kafka, RabbitMQ, and CI/CD practices, I possess advanced skills in JavaScript, TypeScript, React, and GraphQL. Open source contributor committed to the evolution of the technological ecosystem, always seeking to apply best practices to enhance system performance and quality.",
		resume: `Passionate Full Stack Developer with over 5 years of experience in developing high-performance digital solutions. My journey began in 2018 as an intern, where I built a solid foundation in programming. Throughout my career, I've worked on highly relevant projects for the healthcare sector, collaborating with prominent institutions such as Hospital Israelita Albert Einstein, where I contributed to creating modular and scalable systems using modern technologies like Nest.js for robust architectures and optimized microservices with Kafka and RabbitMQ.

I extensively use JavaScript, TypeScript, and Node.js to develop efficient integrations between front-end and back-end, employing frameworks like React, Next.js, and Material UI to build intuitive and responsive interfaces. My practice is guided by the best agile methodologies and supported by automation and quality tools such as Docker, Kubernetes, CI/CD, Vite, and Vitest, ensuring consistent and secure deliveries.

Additionally, as an open source contributor, I dedicate myself to developing libraries and tools that drive innovation and strengthen the developer community. This dedication to continuous learning and applying advanced technological solutions reflects my commitment to excellence and digital business transformation.`,
		shortDescription:
			"Creating elegant solutions through code. Specialized in developing modern web applications with cutting-edge technologies and exceptional user experiences.",
		contact: {
			email: "contato@gabrieljs.dev",
			formAccessKey: "81309db0-39fb-4bb6-8738-4dae02fcbd40",
			phone: "+55 74 99909-1508",
		},
		social: {
			linkedin: "https://www.linkedin.com/in/gabrieldjs21",
			github: "https://github.com/gabrieljsilva",
			website: "https://gabrieljs.dev",
		},
		location: {
			city: "Senhor do Bonfim",
			state: "Bahia",
			country: "Brazil",
		},
		navigation: [
			{ key: "Home", title: "Home", href: "/#home" },
			{ key: "About", title: "About", href: "/#about" },
			{ key: "Projects", title: "Projects", href: "/#projects" },
			{ key: "Experiences", title: "Experiences", href: "/#experiences" },
			{ key: "Skills", title: "Skills", href: "/#skills" },
			{ key: "Blog", title: "Blog", href: "/blog" },
		],

		/**
		 * SKILL SECTION
		 */
		skillsSet: [
			{
				category: "Back-end",
				description:
					"Back-end developer with extensive experience in Node.js and TypeScript. Specialized in modular architectures and microservices, with a focus on performance and scalability.",
				skills: [
					{
						name: "JavaScript",
						description: "ES6+ features and asynchronous programming mastery",
					},
					{
						name: "TypeScript",
						description: "Strong typing and advanced patterns",
					},
					{ name: "Node.js", description: "Efficient server-side runtime" },
					{ name: "Nest.js", description: "Structured and scalable framework" },
					{ name: "GraphQL", description: "GraphQL API development" },
					{
						name: "Express",
						description: "Robust framework for RESTful APIs",
					},
				],
			},
			{
				category: "Front-end",
				description:
					"Front-end developer with experience in React and UI/UX design. Specialized in modern and responsive interfaces.",
				skills: [
					{ name: "HTML", description: "Semantic structure and accessibility" },
					{ name: "CSS", description: "Creative styling and animations" },
					{ name: "React", description: "Component-based dynamic UI" },
					{
						name: "Tailwind",
						description: "Rapid development with utility classes",
					},
					{
						name: "Material UI",
						description: "Modern design with Material principles",
					},
				],
			},
			{
				category: "Database",
				description:
					"Designed and implemented database solutions for critical systems. Specialized in relational and NoSQL databases.",
				skills: [
					{
						name: "MySQL",
						description: "Relational database expertise",
					},
					{
						name: "PostgreSQL",
						description: "Advanced SQL features and reliability",
					},
					{
						name: "MongoDB",
						description: "Flexible NoSQL solutions",
					},
					{
						name: "Redis",
						description: "High-performance in-memory storage",
					},
					{ name: "SQLite", description: "Lightweight efficient database" },
				],
			},
			{
				category: "Infrastructure & DevOps",
				description:
					"Automated development and deployment processes to ensure efficiency and quality. Specialized in Docker and CI/CD.",
				skills: [
					{ name: "Docker", description: "Containerization for consistency" },
					{
						name: "CI/CD",
						description: "Efficient development pipelines",
					},
					{ name: "AWS", description: "Cloud infrastructure management" },
				],
			},
			{
				category: "Architecture",
				description:
					"Designed and implemented scalable and efficient architectures for critical systems. Specialized in microservices and messaging in various scenarios.",
				skills: [
					{ name: "Kafka", description: "Scalable event streaming" },
					{ name: "RabbitMQ", description: "Reliable message brokering" },
					{ name: "AWS", description: "Cloud message queuing" },
				],
			},
			{
				category: "Methodologies & Quality",
				description:
					"Used agile methodologies such as Scrum and Kanban to ensure consistent and high-quality deliveries. Specialized in automated testing with Jest and Vitest for quality deliveries.",
				skills: [
					{
						name: "Agile",
						description: "Iterative and flexible development",
					},
					{
						name: "Testing",
						description: "Automated testing and quality assurance",
					},
				],
			},
		],

		/**
		 * PROJECTS SECTION
		 */
		projects: [
			{
				id: 1,
				title: "Care Coordination",
				description:
					"A project aimed at connecting Patients with Healthcare Professionals through Care Teams. Developed using Node.js with Nest.js framework, GraphQL and React, the system integrates its front-end with the Hospital Israelita Albert Einstein's Corporate Portal, a micro front-end solution enabling independent team work on each module. Utilizes Vitest for testing, MySQL for data management, and messaging solutions like Kafka, RabbitMQ and SQS supported by AWS infrastructure.",
				image: "/images/logo/hiae.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Kafka",
					"RabbitMQ",
					"MySQL",
					"Redis",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"AWS",
					"Microsoft Azure",
				],
				features: [
					"Manage care teams",
					"Manage care plans",
					"Personalized care",
				],
			},
			{
				id: 2,
				title: "Decorated Dataloaders",
				description:
					"NestJS Decorated Dataloaders module simplifies GraphQL dataloader creation using decorators. Solves N+1 problem through request batching and caching, optimizing queries and easing NestJS integration. Offers declarative configuration for caching, batch sizing, and dependency management to create efficient resolvers.",
				technologies: ["Node.js", "TypeScript", "NestJS", "GraphQL"],
				features: [
					"Dataloader declaration via decorators",
					"Efficient batching and caching",
					"Custom configurations",
					"Aliases for abstract classes",
					"Circular dependency resolution",
				],
				link: "https://github.com/gabrieljsilva/nestjs-decorated-dataloaders",
			},
			{
				id: 3,
				title: "Decorated Factory",
				description:
					"Decorated Factory uses decorators to create object instances with Faker-generated data, ideal for testing scenarios. Allows defining field population through decorators, supporting entity relationships, arrays, and value overrides, inspired by PrismaORM's approach.",
				technologies: [
					"TypeScript",
					"Node.js",
					"JavaScript",
					"Faker",
					"Rollup",
				],
				features: [
					"Field declaration with default/fake values using faker",
					"Relationship declaration via decorators",
					"On-demand instance creation with faker",
					"Dynamic value substitution",
				],
				link: "https://github.com/gabrieljsilva/decorated-factory",
			},
			{
				id: 4,
				title: "Untimeless",
				description:
					"Untimeless is a timesheet system facilitating work hour tracking. With report generation features, it provides visibility into task dedication time. Using AI, it offers performance insights to optimize productivity and decision-making.",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Tailwind",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"CI/CD",
				],
				features: [
					"Project management",
					"Time tracking",
					"Shift management",
					"Event management",
					"Bulk time data export",
					"Bulk time data import",
				],
				link: "https://untimeless.com",
			},
			{
				id: 5,
				title: "Demand To Invoice",
				description:
					"Takaoka Anesthesia is a network of anesthesiologists providing on-demand services to hospitals/surgeons. The Demand To Invoice project was a medical shift system covering client registration, patient care, and payment processing.",
				image: "/images/logo/takaoka-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"Microsoft Azure",
				],
				features: [
					"Medical shifts",
					"Shift negotiation",
					"Request management",
					"Surgeon management",
					"Anesthesiologist management",
					"Procedure/surgery management",
					"Billing report generation",
					"Secretary data management",
					"Robust notification system",
				],
			},
			{
				id: 6,
				title: "Fleury - Medical Shifts",
				description:
					"Fleury - Medical Shifts project involved full-stack development from back-end to web/mobile front-end using Node.js, React and React Native. The app facilitates shift negotiations among Fleury network doctors.",
				image: "/images/logo/fleury-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"Next.js",
					"React Native",
					"Material UI",
					"Postgresql",
					"Docker",
					"CI/CD",
					"Microsoft Azure",
				],
				features: [
					"Medical shifts",
					"Shift negotiation",
					"Request management",
					"Dynamic anamnesis forms generation",
					"Robust notification system",
				],
			},
			{
				id: 7,
				title: "GoHealth - NPS",
				description:
					"GoHealth offers healthcare products including GoHealth NPS (Net Promoter Score) to evaluate patient satisfaction and service promotion likelihood for partner hospitals.",
				image: "/images/logo/gohealth-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"Microsoft Azure",
				],
				features: [
					"Hospital unit management",
					"Care point management",
					"Post-care notification system",
				],
			},
			{
				id: 8,
				title: "Pecunias",
				description:
					"Project focused on dividing large court order titles into smaller negotiable units. Managed user transactions and automated contract generation.",
				technologies: ["Node.js", "MySQL", "Express.js", "Bootstrap"],
				features: [
					"Court order management",
					"Batch title division",
					"Title negotiation",
					"Document generation",
				],
			},
		],

		/**
		 * EXPERIENCES SECTION
		 */
		experiences: [
			{
				id: 1,
				shouldShowInResume: true,
				company: "Hospital Israelita Albert Einstein",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				description:
					"I work on developing solutions at Hospital Israelita Albert Einstein, focused on digitally transforming Primary Healthcare tools. I use a modern stack including Nest.js, enabling the creation of modular and scalable applications, as well as microservices with Kafka and RabbitMQ to ensure high availability and performance.",
				detailedDescription:
					"Daily, I participate in implementing robust systems using JavaScript, Node.js, TypeScript, and GraphQL to create efficient integrations between front-end and back-end. The use of React and Material UI provides intuitive interfaces, while tools like Vite and Vitest accelerate development and quality testing. \n\nAdditionally, I work with Docker, Kubernetes, and CI/CD practices to ensure consistent environments and continuous integrations with AWS and Microsoft Azure, reinforcing the stability and scalability of projects. On some occasions, I mentor junior developers, supporting technical evolution without assuming formal leadership roles.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 2,
				shouldShowInResume: false,
				company: "Grupo GBI",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				endDate: "present",
				description:
					"I work as a fullstack developer at Grupo GBI, offering technological consulting that drives digital transformation for major clients. I employ modern technologies such as Nest.js to build modular solutions, as well as microservices with Kafka and RabbitMQ that ensure high availability and performance.",
				detailedDescription:
					"In my daily work, I integrate with multidisciplinary teams to develop customized systems, using JavaScript, TypeScript, Node.js, and GraphQL to ensure efficient communication between application layers. The use of React and Material UI contributes to modern and intuitive interfaces, while utilizing Vite and Vitest speeds up development and validation cycles. \n\nAdditionally, the adoption of Docker, Kubernetes, and CI/CD practices allows for the creation of robust and scalable environments, with support on AWS and Microsoft Azure platforms, ensuring continuous delivery of high-quality solutions without compromising data security.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 3,
				shouldShowInResume: true,
				company: "Freelancer",
				role: "Fullstack Developer",
				startDate: "Oct 2022",
				endDate: "Mar 2024",
				description:
					"I worked as a freelance fullstack developer, collaborating with projects in sectors such as Human Resources, Recruitment and Selection, and LawTechs. I used modern technologies like Next.js and Nest.js to create customized, scalable, and efficient solutions that met the specific demands of each client.",
				detailedDescription:
					"During this experience, I implemented integrated applications using JavaScript, Node.js, and TypeScript, combining the flexibility of Next.js with the robustness of Nest.js, which provides a modular architecture. I employed microservices with Kafka and RabbitMQ to optimize communication between systems and ensure high availability. \n\nAdditionally, the use of tools such as React, Tailwind, and Material UI contributed to responsive and intuitive interfaces, while CI/CD, Docker, and Kubernetes practices ensured consistent environments and continuous delivery processes. The support of Vite and Vitest allowed me to accelerate development and strengthen test quality, ensuring technical excellence in the projects.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Next.js" },
					{ name: "Tailwind" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Postgresql" },
					{ name: "SQLite" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 4,
				shouldShowInResume: true,
				company: "RedFox Digital Solutions",
				role: "Fullstack Software Developer",
				startDate: "Apr 2021",
				endDate: "Sep 2022",
				description:
					"I worked as a fullstack developer at RedFox Digital Solutions, contributing to the creation and enhancement of systems for the healthcare area. I applied technologies such as Nest.js to develop modular and scalable applications, integrating critical components with high performance.",
				detailedDescription:
					"During my time there, I implemented solutions using JavaScript, Node.js, and TypeScript, combining the flexibility of React and Next.js with the robustness of Nest.js to build integrated applications. The use of GraphQL facilitated communication between front-end and back-end layers, while Docker and CI/CD ensured continuous and high-quality delivery. \n\nAdditionally, I used tools such as Vite and Vitest to optimize development and testing cycles, and integrated databases like PostgreSQL and Redis to ensure the integrity and agility of systems, always aligned with market best practices.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Next.js" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Postgresql" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 5,
				shouldShowInResume: false,
				company: "CAMEJA",
				role: "Information Systems Programmer",
				startDate: "Sep 2019",
				endDate: "Feb 2020",
				description:
					"I worked as an information systems programmer at CAMEJA, developing integrated solutions for the legal and financial areas. I used essential technologies such as JavaScript, Node.js, and MySQL to create robust and efficient systems, contributing to the automation of critical processes.",
				detailedDescription:
					"During this period, I implemented APIs and user interfaces that facilitated communication between different modules, ensuring data integrity and security. The application of agile practices and the use of modern libraries allowed for the delivery of consistent solutions adaptable to client needs. This experience reinforced my commitment to technical quality and continuous improvement of operational processes.",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "MySQL" },
				],
			},
			{
				id: 6,
				shouldShowInResume: false,
				company: "Newtic",
				role: "Web Developer",
				startDate: "Dec 2018",
				endDate: "Jan 2019",
				description:
					"I worked as a web development intern at Newtic, where I gained practical experience in technologies such as JavaScript, Node.js, and Vue.js. This experience was fundamental to consolidate my technical foundation and provide support in innovative projects.",
				detailedDescription:
					"During my internship, I participated in the creation and maintenance of functionalities in web applications, using Vue.js to develop dynamic and responsive interfaces. With the support of Node.js and JavaScript, I contributed to the implementation of solutions that met the company's operational requirements. This experience allowed me to improve the integration of new technologies and strengthen my knowledge in web development.",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "Vue.js" },
				],
			},
		],
		academicBackground: [
			{
				location: "Instituto Federal de Educação, Ciência e Tecnologia",
				level: "Higher Education",
				course: "Computer Science",
				startDate: "Apr 2018",
				status: "On Hold",
				workload: "4000 hours",
			},
			{
				location: "Instituto Federal de Educação, Ciência e Tecnologia",
				level: "Technical Education",
				course: "Information Technology",
				startDate: "Feb 2018",
				endDate: "Aug 2018",
				status: "Completed",
				workload: "1200 hours",
			},
		],
		footer: {
			quote: {
				text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
				author: "Martin Fowler",
			},
			copyright: "© 2025. All rights reserved.",
		},
		posts: [],
	},
};
