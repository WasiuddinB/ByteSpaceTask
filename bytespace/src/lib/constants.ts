import type { StaticImageData } from "next/image";

import avatar1 from "@/components/images/Avatar1.svg";
import avatar2 from "@/components/images/Avatar2.svg";
import avatar3 from "@/components/images/Avatar3.svg";
import avatar4 from "@/components/images/Avatar4.svg";
import avatar5 from "@/components/images/Avatar5.svg";
import courseThumb1 from "@/components/images/CourseThumb1.svg";
import courseThumb2 from "@/components/images/CourseThumb2.svg";
import courseThumb3 from "@/components/images/CourseThumb3.svg";
import courseThumb4 from "@/components/images/CourseThumb4.svg";
import courseThumb5 from "@/components/images/CourseThumb5.svg";
import courseThumb6 from "@/components/images/CourseThumb6.svg";
import iconBusiness from "@/components/images/IconBusiness.svg";
import iconDesign from "@/components/images/IconDesign.svg";
import iconDevelopment from "@/components/images/IconDevelopment.svg";
import iconItSoftware from "@/components/images/IconItSoftware.svg";
import iconMarketing from "@/components/images/IconMarketing.svg";
import iconPhotography from "@/components/images/IconPhotography.svg";
import logoBar1 from "@/components/images/LogoBar1.png";
import logoBar2 from "@/components/images/LogoBar2.png";
import logoBar3 from "@/components/images/LogoBar3.png";
import logoBar4 from "@/components/images/LogoBar4.png";
import logoBar5 from "@/components/images/LogoBar5.png";
import testimonialAvatar1 from "@/components/images/TestimonialAvatar1.svg";
import testimonialAvatar2 from "@/components/images/TestimonialAvatar2.svg";
import testimonialAvatar3 from "@/components/images/TestimonialAvatar3.svg";

export const SITE = {
  name: "ByteSpace",
  tagline: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const AUTH_LINKS = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export const COURSE_SECTION = {
  title: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

export const COURSE_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export interface Course {
  id: string;
  title: string;
  author: string;
  thumbnail: StaticImageData;
  rating: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  learners: string;
  price: string;
  billing: string;
}

export const COURSES: Course[] = [
  {
    id: "learn-figma",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    thumbnail: courseThumb1,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    thumbnail: courseThumb2,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
  {
    id: "power-of-big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    thumbnail: courseThumb3,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
  {
    id: "balancing-productivity",
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    thumbnail: courseThumb4,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    thumbnail: courseThumb5,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    thumbnail: courseThumb6,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    learners: "26+",
    price: "$25",
    billing: "/lifetime",
  },
];

export const COURSE_AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];

export const LEARNING_PATHS_SECTION = {
  title: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
};

export const LEARNING_PATHS = [
  { id: "design", label: "Design", icon: iconDesign },
  { id: "development", label: "Development", icon: iconDevelopment },
  { id: "it-software", label: "IT & Software", icon: iconItSoftware },
  { id: "business", label: "Business", icon: iconBusiness },
  { id: "marketing", label: "Marketing", icon: iconMarketing },
  { id: "photography", label: "Photography", icon: iconPhotography },
];

export const GROWTH_SECTION = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { id: "students", value: "12K", label: "Students" },
    { id: "courses", value: "70+", label: "Courses" },
    { id: "creators", value: "16", label: "Creators" },
  ],
};

export const CREATOR_SECTION = {
  title: "Create & Manage Courses Easily.",
  description:
    "supports individuals or entities in the creation, publication, and administration of educational courses.",
  benefits: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
};

export const CREATOR_CTA = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  action: { label: "Join as Creator", href: "/signup" },
};

export const NEWSLETTER = {
  description:
    "Stay Up to date with our latest features and releases by joining our newsletter.",
  placeholder: "Enter your email",
  action: "Search",
  disclaimer:
    "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
};

export const FOOTER_COLUMNS = [
  {
    id: "browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses/business" },
      { label: "IT", href: "/courses/it-software" },
      { label: "Design", href: "/courses/design" },
    ],
  },
  {
    id: "topics",
    links: [
      { label: "Development", href: "/courses/development" },
      { label: "Marketing", href: "/courses/marketing" },
      { label: "Photography", href: "/courses/photography" },
      { label: "Finance", href: "/courses/finance" },
      { label: "Sport", href: "/courses/sport" },
    ],
  },
  {
    id: "company",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const FOOTER_LEGAL = {
  copyright: "© 2023 ByteSpace. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
};

export const COURSES_PAGE = {
  title: "Find Your Next Course",
  searchPlaceholder: "Search",
  scopeLabel: "Courses",
  toolbar: ["Filter", "Level", "Category"],
  sortLabel: "Most relevant",
  totalPages: 5,
};

export const CREATOR_PROFILE = {
  name: "Wasi Uddin Bhuyian",
  badge: "Creator",
  role: "Passionate Web Developer",
  bio: [
    "Welcome to the creative world of WUB. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  stats: [
    { id: "products", value: "3", label: "Products" },
    { id: "followers", value: "12", label: "Followers" },
  ],
  action: "Follow",
};

export const TESTIMONIALS_SECTION = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};

export const TESTIMONIALS = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: testimonialAvatar1,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "wasi",
    name: "Wasi Uddin Bhuyian",
    role: "Lifelong Learner",
    avatar: testimonialAvatar2,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: testimonialAvatar3,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const PARTNER_LOGOS = [
  { id: "wave", name: "Wasi D", mark: logoBar1 },
  { id: "burst", name: "Wasi O", mark: logoBar2 },
  { id: "bolt", name: "Wasi I", mark: logoBar3 },
  { id: "clover", name: "Wasi N", mark: logoBar4 },
  { id: "spiral", name: "Wasi S", mark: logoBar5 },
];
