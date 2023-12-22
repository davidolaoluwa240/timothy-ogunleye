// Images
// ===========================================================================
// ============================HERO IMAGES====================================
// ===========================================================================
import heroGallery1 from "../assets/images/hero_gallery_1.svg";
import heroGallery2 from "../assets/images/hero_gallery_2.svg";
import heroGallery3 from "../assets/images/hero_gallery_3.svg";
import heroGallery4 from "../assets/images/hero_gallery_4.svg";
import heroGallery5 from "../assets/images/hero_gallery_5.svg";
import heroGallery6 from "../assets/images/hero_gallery_6.svg";
import heroGallery7 from "../assets/images/hero_gallery_7.svg";
import heroGallery8 from "../assets/images/hero_gallery_8.svg";
import heroGallery9 from "../assets/images/hero_gallery_9.svg";
import heroGallery10 from "../assets/images/hero_gallery_10.svg";
import heroGallery11 from "../assets/images/hero_gallery_11.svg";
import heroGallery12 from "../assets/images/hero_gallery_12.svg";
import heroGallery13 from "../assets/images/hero_gallery_13.svg";
import heroGallery14 from "../assets/images/hero_gallery_14.svg";
import heroGallery15 from "../assets/images/hero_gallery_15.svg";

// ===========================================================================
// ============================PAST EVENT IMAGES==============================
// ===========================================================================
import pastEventPic1 from "../assets/images/past-event-pic-1.jpg";
import pastEventPic2 from "../assets/images/past-event-pic-2.jpg";
import pastEventPic3 from "../assets/images/past-event-pic-3.jpg";
import pastEventPic4 from "../assets/images/past-event-pic-4.jpg";
import pastEventPic5 from "../assets/images/past-event-pic-5.jpg";
import pastEventPic6 from "../assets/images/past-event-pic-6.jpg";

// ===========================================================================
// ==================================ABOUT====================================
// ===========================================================================
import timothyImg from "../assets/images/timothy_img.svg";

// Navbar Items
export const NAVBAR_ITEMS = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About",
    to: "/about",
  },
  {
    id: 3,
    name: "Academic Profiles",
    items: [
      {
        id: 1,
        name: "Google Scholar",
        to: "https://scholar.google.com/citations?user=j42dVZsAAAAJ",
      },
      {
        id: 2,
        name: "Research Gate",
        to: "https://www.researchgate.net/profile/Timothy-Ogunleye",
      },
    ],
  },
  {
    id: 4,
    name: "Contact And Partners",
    to: "/contact",
  },
];

// Hero Items
export const HERO_ITEMS = [
  { id: 1, image: heroGallery1 },
  { id: 2, image: heroGallery2 },
  { id: 3, image: heroGallery3 },
  { id: 4, image: heroGallery4 },
  { id: 5, image: heroGallery5 },
  { id: 6, image: heroGallery6 },
  { id: 7, image: heroGallery7 },
  { id: 8, image: heroGallery8 },
  { id: 9, image: heroGallery9 },
  { id: 10, image: heroGallery10 },
  { id: 11, image: heroGallery11 },
  { id: 12, image: heroGallery12 },
  { id: 13, image: heroGallery13 },
  { id: 14, image: heroGallery14 },
  { id: 15, image: heroGallery15 },
];

// Software Skill Items
export const SOFTWARE_SKILL_ITEMS = [
  {
    id: 1,
    title: "Data Analysis and Manipulation",
    description:
      "Proficient in utilizing R and Python for data wrangling, statistical analysis, and data mining. Experienced in handling complex statistical analyses and producing data visualizations using R and Python.",
  },
  {
    id: 2,
    title: "Programming Proficiency",
    description:
      "Expertise in using R and Python programming languages for data simulations, modeling, and analysis. Skilled in integrating SQL with Python and R for efficient data retrieval and manipulation from databases.",
  },
  {
    id: 3,
    title: "Statistical Skills",
    description:
      "Sound knowledge in statistical packages such as SPSS, E-view, STATA, and others, complementing R and Python for advanced statistical analysis and modeling. Experience in data analysis relating to Data Science, Econometrics, Sample Surveys, Biostatistics, and Morphometrics.",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "Demonstrated proficiency in imparting knowledge of data management software programs to others, including SQL databases. Experience in developing and facilitating training and capacity building activities on databases, leveraging SQL as a key component.",
  },
  {
    id: 5,
    title: "Report Writing and Communication",
    description:
      "Excellent report writing, analytical, and oral presentation skills, enabling effective communication of research findings derived from R, Python, and SQL analyses. Ability to articulate technical information clearly to both technical and non-technical audiences, emphasizing insights from SQL-integrated data analysis.",
  },
  {
    id: 6,
    title: "Project Management and Leadership",
    description:
      "Capable of working independently with a high volume of workflow, utilizing R, Python, and SQL for tasks such as prioritization, tight deadline management, and leading and supervising others. Proven experience in high-integrity managerial settings and fast-paced NGO environments, showcasing leadership, strategic thinking, and relationship management capabilities.",
  },
  {
    id: 7,
    title: "Survey and Data Collection",
    description:
      "Proficient in using R for conducting surveys independently and integrating collected data with SQL for comprehensive analysis and reporting.",
  },
];

// International Engagement Items
export const INTERNATIONAL_ENGAGEMENT_ITEMS = [
  {
    id: 1,
    title:
      "A member of the Committee for the 7th Annual Conference for Research Engineering held at Swansea University, United Kingdom (UK) between 5th - 7th September, 2023",
    to: "https://rsecon23.society-rse.org/conference-committee/",
    tags: ["Member"],
  },
  {
    id: 2,
    title:
      "An interview held with the R Consortium on spreading the gospel about R language across African continent on 13th December, 2021",
    to: "https://www.r-consortium.org/blog/2021/12/13/osun-r-user-group-in-nigeria-talks-about-spreading-the-gospel-of-r-across-africa",
    tags: ["Interview"],
  },
  {
    id: 3,
    title:
      "A webinar to be conducted by International Association for Statistical Computing (IASC) - African Members Group featuring Timothy A. OGUNLEYE on the topic: Optimal Pathways: A Comparative Study of Linear and Non-Linear Optimization Techniques using R Language on 26th January, 2024",
    to: "https://isi-web.org/webinar/iasc-optimal-pathways-comparative-study-linear-and-non-linear-optimization-techniques-using",
    tags: ["Webinar"],
  },
  {
    id: 4,
    title:
      "A Faculty member (International Instructor handling Data Science courses) at Osiri University, Nebraska, USA",
    to: "https://osiriuniversity.org/school-of-computer-science-and-information-systems/",
    tags: ["Member"],
  },
  {
    id: 5,
    title:
      "A member of International Statistical Institute (ISI) directly with International Association for Statistical Computing (IASC)",
    to: "https://isi-web.org/our-members?country=NG&alphabet=O#scroll-to-form",
    tags: ["Member"],
  },
];

// Youtube Embed Items
export const YOUTUBE_EMBED_ITEMS = [
  {
    id: 1,
    title:
      "Full video clip on our Day 2 of Data Analytics with Python training conducted on 26th Sept., 2023.",
    src: "https://www.youtube.com/embed/LgBCah6bPyo",
  },
  {
    id: 2,
    title:
      "Day 3 of the virtual training on DATA ANALYTICS WITH PYTHON conducted on 28th September, 2023.",
    src: "https://www.youtube.com/embed/1D0POdyqzLE",
  },
];

// Past Event Picture Items
export const PAST_EVENT_PICTURE_ITEMS = [
  {
    id: 1,
    image: pastEventPic1,
  },
  {
    id: 2,
    image: pastEventPic2,
  },
  {
    id: 3,
    image: pastEventPic3,
  },
  {
    id: 4,
    image: pastEventPic4,
  },
  {
    id: 5,
    image: pastEventPic5,
  },
  {
    id: 6,
    image: pastEventPic6,
  },
];

// Past Event Items
export const PAST_EVENT_ITEMS = [
  {
    id: 1,
    title: "Educational and Professional Development",
    description:
      "Undertook formal education and training in data analysis, programming, and statistics. This has been achieved through the two non-profit, non-governmental organizations which are under my control.",
  },
  {
    id: 2,
    title: "Career Milestones",
    description:
      "Developed and honed their skills through practical applications, such as conducting complex statistical analyses, building data visualizations, and handling data mining tasks.",
  },
  {
    id: 3,
    title: "Statistical Skills",
    description:
      "Contributed to or led projects involving data analysis, statistical modeling, and database management for organizations. This included developing and implementing efficient data retrieval processes and imparting knowledge to others.",
  },
];

// Future Event Items
export const FUTURE_EVENT_ITEMS = [
  {
    id: 1,
    title: "Advanced Projects and Research",
    description:
      "Engaging in more extensive and intricate data analysis and manipulation projects, such as working with big data, AI, or machine learning applications.",
  },
  {
    id: 2,
    title: "Leadership Roles",
    description:
      "Progressing into leadership positions where I can guide projects and teams, leverage skills in project management, and lead data-driven initiatives within organizations.",
  },
  {
    id: 3,
    title: "Capacity Building and Training",
    description:
      "Expanding my roles in training and capacity building within several fields such as programming, monitoring and evaluation, and potentially contributing to educational programs, workshops, and consulting activities.",
  },
  {
    id: 4,
    title: "Expert Consultation",
    description:
      "Providing expert consultation in data analysis, statistical modeling, and database management for organizations or clients seeking advanced insights and solutions.",
  },
  {
    id: 5,
    title: "Specialized Research Areas",
    description:
      "Diving deeper into specialized areas within data science and statistical analysis such as biostatistics, morphometrics, and advanced machine learning applications.",
  },
];

// About Timothy
export const ABOUT_TIMOTHY = {
  image: timothyImg,
  descriptions: [
    "Tim, as usually called by his friends, is seasoned statistician and visionary data scientist. Timothy combines a robust academic foundation, extensive industry experience, and a passion for advancing statistical computing within and outside the continent of Africa. His journey began at the prestigious University of Ilorin, Nigeria, where he bagged his first and second degrees in Statistics. His comprehensive expertise encompasses a profound understanding of Computational Statistics, Mathematical and Data Sciences, Machine Learning, Robotic Intelligence, and programming skills, establishing him as a respected authority in these fields of study.",
    "Armed with a profound knowledge of statistical analysis and computational methods, Timothy is an expert in the use of R language, complemented by a strong command of SQL and Python programming languages. His dedication to expanding his skills led him to Department of Computing at Macquarie University, the City of Sydney, Australia, where he received official certification as an R and Python Programmer in the realm of Data Science. Tim also obtained Professional Diploma Certificate in Data Science with Python from the University of Lagos, Nigeria. These credentials attest to his unwavering commitment to mastering cutting-edge technologies and analytical tools within the data science landscape.",
    "Timothy’s higher educational pursuits initially commenced at the Federal Polytechnic, Ede, Nigeria, where he earned both National Diploma (ND) and Higher National Diploma (HND) certificates in Statistics, laying a solid academic groundwork for his future accomplishments. Notably, he currently serves as the Secretary-General of the International Association for Statistical Computing, African Members Group (IASC-AMG), demonstrating his influential presence in the statistical community on an international level.",
    "Boasting over 18 years of extensive experience spanning across industries and academia, Timothy has etched a distinguished career journey during which he has contributed significantly to both scholarly and professional domains. His intellectual prowess is reflected in his extensive publication record, comprising numerous academic papers that have made a noteworthy impact both locally and on the global stage. Furthermore, he is recognized for his profound expertise as a monitoring and evaluation (M&E) expert, showcasing an unparalleled aptitude for imparting knowledge as a distinguished educator and tutor.",
    "In minding the significance of knowledge dissemination and community enrichment, Timothy takes on leadership roles as the coordinator of the Osun R User Group, Nigeria, and as the Chairman, Board of Trustees of Tim-R Programming Consult, Nigeria - two non-profit, non-governmental organizations dedicated to nurturing a thriving community of statisticians and data enthusiasts. His commitment to the advancement of statistical computing techniques is apparent, reflecting his profound passion for driving impactful change and sustainable progress within the statistical and data science domains.",
    "With an inherent ability to grasp complex concepts swiftly and a proven aptitude for rapid assimilation, Timothy’s role as a lecturer at the Department of Statistics, Faculty of Basic and Applied Sciences, College of Science, Engineering and Technology (SET) at Osun State University, Osogbo, Nigeria, further underscores his commitment to excellence in education and his dedication to shaping the future generation of statistical and data science practitioners.",
  ],
};

// Education History Items
export const EDUCATION_HISTORY_ITEMS = [
  {
    id: 1,
    university: "University of Ilorin, Ilorin, Kwara State, Nigeria - Ongoing",
    degree: "Doctor of Philosophy in Statistics",
    type: "PhD",
  },
  {
    id: 2,
    university: "University of Ilorin, Ilorin, Kwara State, Nigeria - 2014",
    degree: "Master of Science in Statistics",
    type: "M.Sc.",
  },
  {
    id: 3,
    university: "University of Ilorin, Ilorin, Kwara State, Nigeria - 2011",
    degree: "Bachelor of Science in Statistics",
    type: "B.Sc.",
  },
  {
    id: 4,
    university: "Federal Polytechnic, Ede, Osun State, Nigeria - 2004",
    degree: "Higher National Diploma in Statistics",
    type: "HND",
  },
  {
    id: 5,
    university: "Federal Polytechnic, Ede, Osun State, Nigeria - 2001",
    degree: "National Diploma in Statistics ",
    type: "ND",
  },
  {
    id: 6,
    university: "Ogbaagba Community Grammar School, Ogbaagbaa",
    degree: "Senior School Certificate ",
    type: "SSC",
  },
];

// Professional Quanlification History Items
export const PROFESSIONAL_QUALIFICATION_HISTORY_ITEMS = [
  {
    id: 1,
    university: "Macquarie University, the City of Sydney, Australia",
    degree: "Diploma Certificate in Data Science with R and Python",
    type: "EXECUTIVE DIPLOMA",
  },
  {
    id: 2,
    university: "University of Lagos, the City of Akoka, Nigeria",
    degree: "Professional Diploma Certificate in Data Science Python",
    type: "PROFESSIONAL DIPLOMA",
  },
];
