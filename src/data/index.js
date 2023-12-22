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
