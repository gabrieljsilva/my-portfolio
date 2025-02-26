import {
	Book,
	Briefcase,
	Building2,
	CheckSquare,
	Cloud,
	Code,
	Code2,
	Database,
	Folder,
	Home,
	Info,
	Layout,
	Mail,
	MapPin,
	Menu,
	Network,
	Quote,
	Settings,
} from "lucide-react";

import {
	SiAmazonsqs,
	SiAmazonwebservices,
	SiApachekafka,
	SiBootstrap,
	SiCss3,
	SiDocker,
	SiExpress,
	SiGithub,
	SiGithubactions,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiLinkedin,
	SiMongodb,
	SiMui,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiRabbitmq,
	SiReact,
	SiRedis,
	SiRollupdotjs,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiVitest,
	SiVuedotjs,
} from "react-icons/si";

export const iconsMaps = {
	navigation: {
		Home,
		About: Info,
		Projects: Folder,
		Experiences: Briefcase,
		Skills: Code,
		Blog: Book,
		Menu,
	},
	social: {
		GitHub: SiGithub,
		LinkedIn: SiLinkedin,
		Mail,
	},
	tech: {
		// Normalized all technology references
		JavaScript: SiJavascript,
		Javascript: SiJavascript,
		TypeScript: SiTypescript,
		"Node.js": SiNodedotjs,
		"Nest.js": SiNestjs,
		GraphQL: SiGraphql,
		Express: SiExpress,
		"Express.js": SiExpress,
		HTML: SiHtml5,
		CSS: SiCss3,
		React: SiReact,
		"React.js": SiReact,
		"React Native": SiReact,
		"Next.js": SiNextdotjs,
		Tailwind: SiTailwindcss,
		"Material UI": SiMui,
		MySQL: SiMysql,
		PostgreSQL: SiPostgresql,
		Postgresql: SiPostgresql,
		MongoDB: SiMongodb,
		Redis: SiRedis,
		SQLite: SiSqlite,
		Docker: SiDocker,
		"CI/CD": SiGithubactions,
		AWS: SiAmazonwebservices,
		Kafka: SiApachekafka,
		RabbitMQ: SiRabbitmq,
		Vite: SiVite,
		Bootstrap: SiBootstrap,
		"Vue.js": SiVuedotjs,
		Agile: CheckSquare,
		Testes: CheckSquare,
		Vitest: SiVitest,
		SQS: SiAmazonsqs,
		Rollup: SiRollupdotjs,
	},
	categories: {
		"Back-end": Code2,
		"Back-end Development": Code2,
		"Front-end": Layout,
		"Front-end Development": Layout,
		"Banco de Dados": Database,
		Databases: Database,
		"Infraestrutura & DevOps": Cloud,
		"Infrastructure & DevOps": Cloud,
		Arquitetura: Network,
		Architecture: Network,
		"Metodologias & Qualidade": CheckSquare,
		"Methodologies & Quality": CheckSquare,
	},
	misc: {
		Building: Building2,
		Quote,
		MapPin,
		settings: Settings,
	},
};
