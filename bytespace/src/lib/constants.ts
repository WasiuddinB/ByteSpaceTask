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
import reviewAvatar1 from "@/components/images/ReviewAvatar1.svg";
import reviewAvatar2 from "@/components/images/ReviewAvatar2.svg";
import iconCertificate from "@/components/images/IconCertificate.svg";
import iconConsultation from "@/components/images/IconConsultation.svg";
import iconResources from "@/components/images/IconResources.svg";
import iconVideos from "@/components/images/IconVideos.svg";
import sneakPeek1 from "@/components/images/SneakPeek1.svg";
import sneakPeek2 from "@/components/images/SneakPeek2.svg";
import sneakPeek3 from "@/components/images/SneakPeek3.svg";
import sneakPeek4 from "@/components/images/SneakPeek4.svg";

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
  copyright: "© 2026 ByteSpace. All rights reserved. WUB",
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

export const NOT_FOUND = {
  code: "404",
  title: "The page you are looking for doesn't exist",
  description: "Try to use a correct url or go back to homepage to start again",
  action: { label: "Back to Home", href: "/" },
};

export const LOGIN_PAGE = {
  intro: {
    title: "Sign in with ease",
    description:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  eyebrow: "Sign In",
  title: "Welcome Back",
  action: "Sign In",
  pending: "Signing in…",
  success: "Signed in successfully.",
  footer: {
    text: "New user?",
    linkLabel: "Create an account",
    href: "/signup",
  },
};

export const SIGNUP_PAGE = {
  intro: {
    title: "Sign up and come in",
    description:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
  eyebrow: "Create an Account",
  title: "Welcome to ByteSpace",
  action: "Continue",
  pending: "Creating account…",
  success: "Account created successfully.",
  footer: {
    text: "Already have an account?",
    linkLabel: "Login",
    href: "/login",
  },
};

export const COURSE_DETAIL = {
  titleSuffix: ": A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: "4.8 (172 reviews)",
  students: "199 Students",
  shareLabel: "Share",
  tabs: ["About", "Lesson", "Reviews"],
  curriculum: {
    title: "112 Lessons (24 hours)",
    lessons: [
      {
        id: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
      {
        id: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    more: "99 more videos",
  },
  pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  enrolLabel: "Enroll Now",
  includesTitle: "This course include",
  includes: [
    { id: "resources", label: "Learning Resources", icon: iconResources },
    { id: "videos", label: "Quality Lesson Videos", icon: iconVideos },
    {
      id: "certificate",
      label: "Certificate of Completion",
      icon: iconCertificate,
    },
    {
      id: "consultation",
      label: "Private Consultation",
      icon: iconConsultation,
    },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    action: "See Full Profile",
    href: "/creators",
  },
  descriptionTitle: "Description",
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeekTitle: "Sneak Peak",
  sneakPeek: [sneakPeek1, sneakPeek2, sneakPeek3, sneakPeek4],
  keyPointsTitle: "Key Points",
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
};

export const COURSE_LESSONS = {
  title: "Explore the Modules",
  description:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  listTitle: "Lesson List",
  modules: [
    {
      id: "module-1",
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: "module-2",
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: "module-4",
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: "module-5",
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: "module-6",
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: "module-7",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  contentTitle: "Lesson Content",
  contentDescription:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressTitle: "Lesson Progress Tracking",
  progressDescription:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: { label: "Learning Progress", value: 67 },
};

export const COURSE_REVIEWS = {
  title: "What Learners Are Saying",
  description:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  summaryLabel: "Ratings",
  average: "4.7",
  breakdown: [
    { stars: 5, count: 720 },
    { stars: 4, count: 120 },
    { stars: 3, count: 21 },
    { stars: 2, count: 12 },
    { stars: 1, count: 16 },
  ],
  listTitle: "Individual Reviews:",
  allLabel: "All rating",
  emptyMessage: "No reviews with this rating yet.",
  reviews: [
    {
      id: "purepearl",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: reviewAvatar1,
      date: "a year ago",
      rating: 5,
      quote:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: "wasiuddin",
      name: "Wasi Uddin Bhuyian",
      role: "Software Engineer",
      avatar: testimonialAvatar2,
      date: "an hour ago",
      rating: 4,
      quote:
        '"The organisation provided me with a comprehensive understanding of building a frontend based project e2e and deliver it with quality with highly frontend focused designs. Highly recommended!"',
    },
    {
      id: "albert",
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: reviewAvatar2,
      date: "a year ago",
      rating: 5,
      quote:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
  ],
};

export const PARTNER_LOGOS = [
  { id: "wave", name: "Wasi D", mark: logoBar1 },
  { id: "burst", name: "Wasi O", mark: logoBar2 },
  { id: "bolt", name: "Wasi I", mark: logoBar3 },
  { id: "clover", name: "Wasi N", mark: logoBar4 },
  { id: "spiral", name: "Wasi S", mark: logoBar5 },
];
