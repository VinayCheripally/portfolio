import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from "lucide-react";

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: "Essay Evaluator",
    techStack: "Django, OpenAI, PostgreSql, HTML, CSS",
    imageUrl: "essayevaluator.png",
    href: "https://github.com/VinayCheripally/django",
  },
  {
    id: 2,
    title: "Ecommerce Backend",
    techStack: "NodeJs ,Mongoose, Express, MongoDB, Swagger",
    imageUrl: "ecommerce.jpeg",
    href: "https://github.com/VinayCheripally/EcommerceBackend",
  },
  {
    id: 3,
    title: "IMDB Analysis",
    techStack: "Python ,Pandas ,Matplotlib ,Numpy ,Seaborn",
    imageUrl: "imdb.png",
    href: "https://github.com/VinayCheripally/CVIP-datascience",
  },
  {
    id: 4,
    title: "SuperStore Analysis",
    techStack: "Python ,Pandas ,Matplotlib ,Numpy ,Seaborn",
    imageUrl: "images.jpeg",
    href: "https://github.com/VinayCheripally/superstoreanalysis",
  },
];

export const moreProjects = [
  {
    id: 1,
    title: "Eco-tracker",
    techStack: "React native ,Expo, Supabase",
    icon: "lottery",
    href: "https://github.com/VinayCheripally/Eco-tracker",
  },
  {
    id: 2,
    title: "SocialMedia Posts",
    techStack: "Python ,Mongoose ,FastAPI",
    icon: "shirt",
    href: "https://github.com/VinayCheripally/wellfound",
  },
  {
    id: 3,
    title: "Minimal os",
    techStack: "Assembly",
    icon: "share",
    href: "https://github.com/VinayCheripally/MinimalOs",
  },

  {
    id: 4,
    title: "Snake Game",
    techStack: "Next.js 13, Tailwind CSS, Typescript",
    icon: "game",
    href: "https://snake-nwaliaez.vercel.app/",
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "HTML, CSS",
    src: "/tech/frontend/htmlcss.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "Tailwind",
    src: "/tech/frontend/tailwind.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "Javascript, Typescript",
    src: "/tech/frontend/jsts.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: "Reactjs",
    src: "/tech/frontend/reactjs.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: "Nextjs 13",
    src: "/tech/frontend/nextjs13.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "NodeJs",
    src: "/tech/backend/nodejs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "ExpressJs",
    src: "/tech/backend/express.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "DenoJs",
    src: "/tech/backend/denojs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: "Next Auth",
    src: "/tech/backend/nextauth.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: "PHP",
    src: "/tech/backend/php.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: "MySQL",
    src: "/tech/database/mysql.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "MongoDB",
    src: "/tech/database/mongo.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "Redis",
    src: "/tech/database/redis.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: "PostgreSQL",
    src: "/tech/database/postgres.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: "Elastic Search",
    src: "/tech/database/elasticSearch.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Docker",
    src: "/tech/devops/docker.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "Kubernetes",
    src: "/tech/devops/k8s.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "GIT",
    src: "/tech/devops/git.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: "Jenkins",
    src: "/tech/devops/jenkins.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: "Terraform",
    src: "/tech/devops/terraform.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: "Solidity",
    src: "/tech/web3/solidity.jfif",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "Hardhat",
    src: "/tech/web3/hardhat.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "Metamask",
    src: "/tech/web3/metamask.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: "Chainlink",
    src: "/tech/web3/chainlink.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: "OpenZeppelin",
    src: "/tech/web3/openzeppelin.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Rest API",
    src: "/tech/others/rest.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "SOAP API",
    src: "/tech/others/soap.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: "GraphQl",
    src: "/tech/others/graphql.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];
