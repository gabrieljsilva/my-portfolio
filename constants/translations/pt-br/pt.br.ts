export const ptBr = {
	ui: {
		resume: "Currículo",
		downloadResume: "Baixar Currículo",
		viewProjects: "Ver Projetos",
		getInTouch: "Entrar em Contato",
		sendMeAMessage:
			"Me envie uma mensagem e eu responderei o mais cedo possível",
		aboutMe: "Sobre mim",
		featuredProjects: "Projetos em Destaque",
		discoverMyRecentWork: "Descubra alguns dos meus trabalhos recentes",
		myProfessionalJourney:
			"Minha jornada profissional e os projetos em que eu atuei",
		experiences: "Experiências",
		professionalExperience: "Experiência Profissional",
		technicalSkills: "Habilidades Técnicas",
		skillsAndExpertise: "Habilidades e especialidades",
		exploreMySkillsAndExpertise:
			"Explore as tecnologias e ferramentas nas quais me destaco para construir sistemas escaláveis e eficientes.",
		navigation: "navegação",
		inspiration: "Inspiração",
		letsConnect: "Vamos nos conectar",
		latestPosts: "Últimos posts",
		viewMore: "Ver mais",
		minRead: "tempo de leitura",
		views: "visualizações",
		professionalSummary: "Resumo profissional",
		location: "Endereço",
		present: "atual",
		keyAchievements: "Conquistas",
		at: "em",
		close: "Fechar",
		keyFeatures: "Funcionalidades",
		whatsYourName: "Qual o seu nome?",
		whatsYouEmailAddress: "Qual o seu endereço de e-mail?",
		yourMessage: "Sua mensagem",
		yourNamePlaceholder: "Seu nome",
		yourEmailPlaceholder: "seu.email@example.com",
		yourMessagePlaceholder: "Deixe sua mensagem aqui...",
		sendMessage: "Enviar Mensagem",
		sendingMessage: "Enviando...",
		comingSoon: "Em Breve...",
		viewProject: "Ver Projeto",
		technologies: "Tecnologias",
		academicBackground: "Formação Acadêmica",
		portfolio: "Portifólio",
		phone: "Telefone",
	},
	profile: {
		name: "Gabriel Silva",
		fullName: "Gabriel de Jesus Silva",
		role: "Software Developer",
		currentCompany: "Hospital Israelita Albert Einstein",
		currentCompanyShortName: "HIAE",
		birthdayDate: "2000-01-23",
		resumeSummary:
			"Desenvolvedor Full Stack com mais de 5 anos de experiência criando soluções corporativas para os setores de saúde e tecnologia. Comprovada habilidade em construir sistemas de alta performance capazes de lidar com mais de 10k requisições por minuto. Contribuidor open source focado em ferramentas para desenvolvedores.",
		resume: `Desenvolvedor Full Stack apaixonado por tecnologia com mais de 5 anos de experiência, especializado em criar soluções tecnológicas eficientes. Minha jornada começou em 2018 como estagiário, onde construí a base que sustenta meu trabalho até hoje.

Ao longo da carreira, tive o privilégio de trabalhar em projetos importantes para grandes instituições de saúde, incluindo Hospital Israelita Albert Einstein e Rede Fleury. Essa experiência moldou minha abordagem para desenvolver soluções robustas e confiáveis.

Como contribuidor open source, me dedico a melhorar o ecossistema JavaScript/TypeScript criando bibliotecas e ferramentas que ajudam outros desenvolvedores. Acredito no poder do desenvolvimento colaborativo e na aprendizagem contínua.`,
		shortDescription:
			"Criando soluções elegantes através de código. Especializado em desenvolver aplicações web modernas com tecnologias de ponta e experiências de usuário excepcionais.",
		contact: {
			email: "contact@gabrieljs.dev",
			formAccessKey: "81309db0-39fb-4bb6-8738-4dae02fcbd40",
		},
		social: {
			linkedin: "https://www.linkedin.com/in/gabrieldjs21/",
			github: "https://github.com/gabrieljsilva",
			website: "https://gabrieljs.dev",
		},
		location: {
			city: "Senhor do Bonfim",
			state: "Bahia",
			country: "Brasil",
		},
		navigation: [
			{ key: "Home", title: "Início", href: "/#home" },
			{ key: "About", title: "Sobre", href: "/#about" },
			{ key: "Projects", title: "Projetos", href: "/#projects" },
			{ key: "Experiences", title: "Experiências", href: "/#experiences" },
			{ key: "Skills", title: "Habilidades", href: "/#skills" },
			{ key: "Blog", title: "Blog", href: "/blog" },
		],

		/**
		 * SKILL SECTION
		 */

		skillsSet: [
			{
				category: "Back-end",
				description:
					"Desenvolvimento de microsserviços escaláveis que lidam com mais de 10k RPM. Expertise em Node.js e TypeScript permitiu otimizar tempos de resposta de APIs mantendo padrões de arquitetura limpa.",
				skills: [
					{
						name: "JavaScript",
						description: "Domínio de recursos ES6+ e programação assíncrona",
					},
					{
						name: "TypeScript",
						description: "Tipagem forte e padrões avançados",
					},
					{ name: "Node.js", description: "Runtime server-side eficiente" },
					{ name: "Nest.js", description: "Framework estruturado e escalável" },
					{ name: "GraphQL", description: "Desenvolvimento de APIs GraphQL" },
					{
						name: "Express",
						description: "Framework robusto para APIs RESTful",
					},
				],
			},
			{
				category: "Front-end",
				description:
					"Entreguei mais de 15 interfaces responsivas usando React. Foco em otimização de performance, reduzindo tempo de carregamento inicial em 40% através de code splitting e lazy loading.",
				skills: [
					{ name: "HTML", description: "Estrutura semântica e acessibilidade" },
					{ name: "CSS", description: "Estilização criativa e animações" },
					{ name: "React", description: "UI dinâmica baseada em componentes" },
					{
						name: "Tailwind",
						description: "Desenvolvimento rápido com utility classes",
					},
					{
						name: "Material UI",
						description: "Design moderno com princípios Material",
					},
				],
			},
			{
				category: "Banco de Dados",
				description:
					"Projetei modelos de dados para mais de 8 sistemas em produção. Implementei cache com Redis que reduziu chamadas ao banco em 70% em plataformas de e-commerce de alto tráfego.",
				skills: [
					{
						name: "MySQL",
						description: "Expertise em bancos relacionais",
					},
					{
						name: "PostgreSQL",
						description: "Recursos SQL avançados e confiabilidade",
					},
					{
						name: "MongoDB",
						description: "Soluções NoSQL flexíveis",
					},
					{
						name: "Redis",
						description: "Armazenamento in-memory de alta performance",
					},
					{ name: "SQLite", description: "Banco de dados leve e eficiente" },
				],
			},
			{
				category: "Infraestrutura & DevOps",
				description:
					"Automatizei pipelines de deploy reduzindo ciclos de release de dias para horas. Containerizei mais de 12 serviços melhorando consistência de ambientes de desenvolvimento.",
				skills: [
					{ name: "Docker", description: "Containerização para consistência" },
					{
						name: "CI/CD",
						description: "Pipelines de desenvolvimento eficientes",
					},
					{ name: "AWS", description: "Gerenciamento de infraestrutura cloud" },
				],
			},
			{
				category: "Arquitetura",
				description:
					"Projetei sistemas orientados a eventos processando mais de 1M de eventos diários. Implementações com Kafka reduziram acoplamento do sistema enquanto melhoravam tolerância a falhas.",
				skills: [
					{ name: "Kafka", description: "Event streaming escalável" },
					{ name: "RabbitMQ", description: "Message brokering confiável" },
					{ name: "AWS", description: "Cloud message queuing" },
				],
			},
			{
				category: "Metodologias & Qualidade",
				description:
					"Liderei times ágeis entregando mais de 30 sprints com taxa de conclusão de 95%. Implementei testes com Jest alcançando 85% de cobertura em serviços críticos.",
				skills: [
					{
						name: "Agile",
						description: "Desenvolvimento iterativo e flexível",
					},
					{
						name: "Testes",
						description: "Testes automatizados e garantia de qualidade",
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
				title: "Coordenação do Cuidado",
				description:
					"O projeto que tem como objetivo vincular Pacientes a Profissionais de Saúde por meio de Times de Cuidado. Desenvolvido utilizando Node.js com o framework Nest.js, GraphQL e React, o sistema integra seu front-end ao Portal Empresas do Hospital Israelita Albert Einstein, uma solução composta por micro front-ends que permite que diversos times atuem de forma independente em cada módulo. O projeto também adota Vitest para testes, MySQL para gerenciamento de dados, e utiliza soluções de mensageria como Kafka, RabbitMQ e SQS, apoiadas pela infraestrutura da Amazon Web Services.",
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
					"Gerenciar times de cuidados",
					"Gerenciar planos de cuidado",
					"Cuidado personalizado",
				],
			},
			{
				id: 2,
				title: "Decorated Dataloaders",
				description:
					"NestJS Decorated Dataloaders é um módulo que simplifica a criação de dataloaders para GraphQL usando decorators. Ele resolve o problema N+1 ao agrupar e armazenar em cache as requisições, otimizando as consultas e facilitando a integração com o NestJS. O módulo oferece uma configuração declarativa para caching, definição de batch size e manipulação de dependências, permitindo a criação de resolvers eficientes e escaláveis.",
				technologies: ["Node.js", "TypeScript", "NestJS", "GraphQL"],
				features: [
					"Declaração de dataloaders com decorators",
					"Batching e caching eficientes",
					"Configurações personalizadas",
					"Aliases para classes abstratas",
					"Resolução de dependências circulares",
				],
				link: "https://github.com/gabrieljsilva/nestjs-decorated-dataloaders",
			},
			{
				id: 3,
				title: "Decorated Factory",
				description:
					"Decorated Factory é uma biblioteca que utiliza decorators para criar instâncias de objetos com dados gerados via Faker, ideal para cenários de testes. Ela permite definir, por meio de decorators, como cada campo de uma classe deve ser populado, suportando relações entre entidades, arrays e sobreposição de valores, inspirada na abordagem do PrismaORM.",
				technologies: [
					"TypeScript",
					"Node.js",
					"JavaScript",
					"Faker",
					"Rollup",
				],
				features: [
					"Declaração de campos com valores padrão ou falsos usando faker",
					"Declaração de relacionamentos via decorators",
					"Criação de instâncias sob demanda com faker",
					"Substituição dinâmica de valores",
				],
				link: "https://github.com/gabrieljsilva/decorated-factory",
			},

			{
				id: 4,
				title: "Untimeless",
				description:
					"Untimeless é um sistema de timesheet e timetracker que facilita o acompanhamento de horas trabalhadas. Com funcionalidades de geração de relatórios, ele oferece uma visão do tempo dedicado às tarefas. Utilizando inteligência artificial, proporciona insights sobre o desempenho dos colaboradores, ajudando a otimizar a produtividade e a tomada de decisões.",
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
					"Gestão de projetos",
					"Gestão de ponto",
					"Gestão de escala",
					"Gestão de eventos",
					"Exportação massiva de dados ponto",
					"Importação massiva de dados de ponto",
				],
				link: "https://untimeless.com",
			},
			{
				id: 5,
				title: "Demand To Invoice",
				description:
					"A Takaoka Anestesia é uma rede de anestesiologistas que contrata anestesistas sob demanda para hospitais ou cirurgiões. O projeto Demand To Invoice desenvolvido foi um sistema de escalas médicas, que atende o cliente desde o cadastro, passando pelo atendimento ao paciente até o pagamento.",
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
					"Escalas médicas",
					"Negociação de plantões",
					"Gestão de solicitações",
					"Gestão de cirurgiões",
					"Gestão de anestesistas",
					"Gestão de procedimentos e cirurgias",
					"Geração de relatórios de faturamento",
					"Gestão de dados secretárias",
					"Sistema robusto de notificações",
				],
			},
			{
				id: 6,
				title: "Fleury - Escalas Médicas",
				description:
					"Fleury - Escalas Médicas foi um projeto que trabalhei desde o back-end até o front-end web e mobile. Usando Node.js, React e React Native. A ideia do projeto era criar um aplicativo de escala para médicos da rede Fleury. O objetivo era facilitar a negociação de escalas entre os médicos.",
				image: "/images/logo/fleury-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"Next.js",
					"React Native",
					"Materiau UI",
					"Postgresql",
					"Docker",
					"CI/CD",
					"Microsoft Azure",
				],
				features: [
					"Escalas médicas",
					"Negociação de plantões",
					"Gestão de solicitações",
					"Geração de formulários dinâmicos para anamnese",
					"Sistema robusto de notificações",
				],
			},
			{
				id: 7,
				title: "GoHealth - NPS",
				description:
					"A GoHealth é uma empresa que oferece uma série de produtos para clínicas e hospitais. Um desses produtos é o GoHealth NPS (Net Promoter Score), que tem como objetivo avaliar a satisfação dos pacientes e identificar as chances de promoção dos serviços dos hospitais parceiros.",
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
					"Gestão de unidades hospitalares",
					"Gestão de pontos de atendimento",
					"Sistema robusto de notificações pós-atendimento",
				],
			},
			{
				id: 8,
				title: "Pecunias",
				description:
					"Este foi um projeto que visava dividir grandes títulos de precatórios em outros títulos menores, tornando-os mais acessíveis para negociação. O projeto, além de gerenciar as transações entre os usuários, também gerava contratos automaticamente.",
				technologies: ["Node.js", "MySQL", "Express.js", "Bootstrap"],
				features: [
					"Gestão de precatórios",
					"Divisão de títulos de precatórios por lote",
					"Negociação de títulos",
					"Criação de documentos",
				],
			},
		],

		/**
		 * EXPERIENCIES SECTION
		 */
		experiences: [
			{
				id: 1,
				shouldShowInResume: true,
				company: "Hospital Israelita Albert Einstein",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				description:
					"Como desenvolvedor Fullstack no Hospital Israelita Albert Einstein, atuei em diversas iniciativas, com foco no desenvolvimento de ferramentas para Atendimento Primário à Saúde.",
				detailedDescription:
					"Contribui para a melhoria da eficiência e qualidade dos serviços oferecidos aos pacientes e profissionais de saúde, além de desenvolver bibliotecas que aprimoraram a qualidade do código e a experiência de desenvolvimento.",
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
				endDate: "atual",
				description:
					"Sou consultor em tecnologia da informação no Grupo GBI, prestando serviços como Desenvolvedor Fullstack para grandes clientes, incluindo o Hospital Israelita Albert Einstein, o maior hospital da América Latina.",
				detailedDescription:
					"Minha atuação envolve o desenvolvimento de soluções tecnológicas personalizadas, com foco em melhorar a eficiência dos processos de saúde e contribuir para a excelência no atendimento ao paciente e profissionais de saúde. Além disso, como consultor, atuo em diversas frentes, identificando necessidades técnicas, propondo soluções inovadoras e garantindo a entrega de projetos de alta qualidade, adaptados às demandas de cada cliente.",
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
				role: "Desenvolvedor fullstack",
				startDate: "Out 2022",
				endDate: "Mar 2024",
				description:
					"Como desenvolvedor fullstack freelancer tive a oportunidade de colaborar com diversas empresas em setores variados incluindo Recursos Humanos, Recrutamento & Seleção e LawTech.",
				detailedDescription:
					"Meu conjunto de habilidades inclui tecnologias como JavaScript, Next.js, Node.js, TypeScript e GraphQL, entre outras. A diversidade de projetos que conduzi me proporcionou uma visão multidisciplinar, apta a atender desafios cotidianos e entregar soluções eficazes e inovadoras.",
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
				startDate: "Abr 2021",
				endDate: "Set 2022",
				description:
					"Como programador Fullstack na RedFox, tive a oportunidade de atuar em vários projetos voltados para a área da saúde.",
				detailedDescription:
					"Além disso, pude aprender e aprimorar minhas habilidades em diversas tecnologias do ecossistema de desenvolvimento web. Tais como: Typescript, React.js, GraphQL entre outros.",
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
				role: "Programador de sistemas de informação",
				startDate: "Set 2019",
				endDate: "Fev 2020",
				description:
					"Atuei como programador de sistemas de informação na Cameja e tive a oportunidade de desenvolver sistemas para a área jurídica e financeira.",
				detailedDescription:
					"Nesse tempo utilizei tecnologias como Javascript, Node.js e MySQL para o desenvolvimento de API, interface de usuários e automação de processos.",
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
				role: "Desenvolvedor web",
				startDate: "Dez 2018",
				endDate: "Jan 2019",
				description:
					"Tive a oportunidade de atuar como estagiário na Newtic, onde pude aprender tecnologias como: Javascript, Node.js e Vue.js.",
				detailedDescription: "",
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
				level: "Ensino Superior",
				course: "Ciências da Computação",
				startDate: "Abr 2018",
				status: "Trancado",
				workload: "4000 horas",
			},
			{
				location: "Instituto Federal de Educação, Ciência e Tecnologia",
				level: "Ensino Técnico",
				course: "Informática",
				startDate: "Fev 2018",
				endDate: "Ago 2018",
				status: "Concluído",
				workload: "1200 horas",
			},
		],
		footer: {
			quote: {
				text: "Qualquer um pode escrever código que um computador entenda. Bons programadores escrevem código que humanos entendem.",
				author: "Martin Fowler",
			},
			copyright: "© 2025. Todos os direitos reservados.",
		},
		posts: [],
	},
};
