/* Sahithi Reddy Chitkula - Personal Portfolio */

// Change portfolio colors globally in src/_globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/*
 * Temporary image generator.
 * This lets the website work without adding custom image files yet.
 */
const makePlaceholder = (title, subtitle = "") =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="500"
      viewBox="0 0 900 500"
    >
      <rect width="900" height="500" fill="#f4f5f7" />
      <rect
        x="25"
        y="25"
        width="850"
        height="450"
        rx="24"
        fill="#ffffff"
        stroke="#d9dce1"
        stroke-width="3"
      />
      <text
        x="450"
        y="235"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="42"
        font-weight="700"
        fill="#2b2d42"
      >
        ${title}
      </text>
      <text
        x="450"
        y="290"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="23"
        fill="#62677a"
      >
        ${subtitle}
      </text>
    </svg>
  `)}`;

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Main Illustration

const illustration = {
  animated: true
};

// Greeting Section

const greeting = {
  username: "Sahithi Reddy Chitkula",

  title: "Hi, I'm Sahithi",

  subTitle: emoji(
  "I'm a University of Wisconsin–Madison graduate with a background in Data Science and Economics and hands-on experience across research, analytics, and large-scale data projects."
),

  resumeLink: "sahithichitkula_resume.pdf",

  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chitkulasahithi",

  linkedin: "https://www.linkedin.com/in/sahithi-reddy-chitkula/",

  gmail: "sahithi058@gmail.com",

  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",

  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",

  subTitle:
     "I USE DATA TO IDENTIFY PATTERNS, ANSWER BUSINESS QUESTIONS, AND COMMUNICATE CLEAR, ACTIONABLE INSIGHTS.",

  skills: [
    emoji(
      "⚡ Analyze data using Python, SQL, R, Excel, and statistical methods to identify patterns and answer business questions"
    ),

    emoji(
      "⚡ Build dashboards, reports, and data visualizations that make technical findings clear and actionable"
    ),

    emoji(
      "⚡ Develop data applications and web solutions using React, Java, Spring Boot, PostgreSQL, and cloud technologies"
    ),

    emoji(
      "⚡ Translate analytical findings into practical recommendations for business, research, and operational teams"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "University of Wisconsin–Madison",

      logo: makePlaceholder("UW–Madison", "Education"),

      subHeader: "Bachelor's Degree in Data Science and Economics",

      duration: "Graduated 2026",

      desc:
        "Developed a multidisciplinary foundation in data analysis, economics, statistics, programming, research, and business problem-solving.",

      descBullets: [
        "Completed coursework in data science, economics, statistics, machine learning, time series analysis, and computer science",

        "Applied analytical methods through research, technical projects, and business-focused data analysis"
      ]
    }
  ]
};

// Proficiency Section

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,

  experience: [
    {
      role: "Peer Mentor — Big Data Systems",

      company: "UW–Madison Computer Sciences",

      companylogo: require("./assets/images/madison.png"),

      date: "September 2025 – May 2026",

      desc: "Mentored 100+ students in large-scale data systems.",

      descBullets: [
        "SQL, Spark, BigQuery, MySQL, and Linux pipelines",
        "Debugging queries, schemas, data issues, and pipeline failures"
      ]
    },

    {
      role: "API Product Intern",

      company: "VoteSmart",

      companylogo:require("./assets/images/vote.png"),

      date: "June 2025 – January 2026",

      desc: "Built reusable workflows for large-scale political data.",

      descBullets: [
        "Python data ingestion across 60+ REST API endpoints",
        "JSON normalization, validation, documentation, and query examples"
      ]
    },

    {
      role: "Research Assistant — Behavioral Research",

      company: "Wisconsin School of Business",

      companylogo: require("./assets/images/buss.png"),

      date: "June 2025 – December 2025",

      desc: "Automated analysis of reviews and interview transcripts.",

      descBullets: [
        "Classified 1,200+ product reviews using Python",
        "Text cleaning, sentiment scoring, and recurring-theme analysis"
      ]
    },

    {
      role: "Undergraduate Research Assistant",

      company: "Wisconsin School of Business",

      companylogo: require("./assets/images/buss.png"),

      date: "August 2024 – May 2025",

      desc: "Cleaned and validated a 140K+ record research dataset.",

      descBullets: [
        "Python and Excel Power Query automation",
        "Deduplication, missing-value checks, outlier detection, and validation"
      ]
    }
  ]
};
// GitHub Pinned Projects Section

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Featured Projects Section

const bigProjects = {
  title: "Projects",

  subtitle:
    "DATA ANALYTICS, BUSINESS INTELLIGENCE, CLOUD, AND MACHINE LEARNING PROJECTS.",

  projects: [
    {
      image: makePlaceholder(
        "E-Commerce Analytics",
        "SQL • PostgreSQL • Excel • Power BI"
      ),

      projectName: "E-Commerce Sales & Operations Analytics",

      projectDesc:
        "Analyzed revenue, customer behavior, product performance, discounts, and operational KPIs. Built SQL queries and interactive reports to identify growth and pricing opportunities.",

      footerLink: []
    },

    {
      image: makePlaceholder(
        "Student Dropout Risk",
        "Python • Pandas • Data Visualization"
      ),

      projectName: "Student Dropout Risk Analysis",

      projectDesc:
        "Identified academic, financial, and demographic factors associated with student dropout. Created risk scores, intervention tiers, and recommendations for targeted student support.",

      footerLink: []
    },

    {
      image: makePlaceholder(
        "Loan Geography Analysis",
        "BigQuery • SQL • Google Cloud"
      ),

      projectName: "BigQuery Loan & Geography Analysis",

      projectDesc:
        "Combined public geographic data, loan records, and live form data in BigQuery. Used SQL and cloud tools to compare county-level lending patterns and evaluate query costs.",

      footerLink: []
    },

    {
      image: makePlaceholder(
        "Loan Applications Analytics",
        "Spark • Spark SQL • Hive • Machine Learning"
      ),

      projectName: "Loan Applications Analytics with Spark",

      projectDesc:
        "Analyzed Wisconsin loan applications using Spark DataFrames, Spark SQL, joins, caching, and grouped aggregations. Trained a decision tree model to predict loan approval outcomes.",

      footerLink: []
    },

    {
      image: makePlaceholder(
        "Socioeconomic Clustering",
        "Python • Hierarchical Clustering • Visualization"
      ),

      projectName: "Country Socioeconomic Clustering",

      projectDesc:
        "Grouped countries using economic, health, demographic, and trade indicators. Applied feature normalization and hierarchical clustering to identify similar development profiles.",

      footerLink: []
    },

    {
      image: makePlaceholder(
        "NYPD Arrest Trends",
        "R • Statistical Analysis • Visualization"
      ),

      projectName: "NYPD Arrest Trends Analysis",

      projectDesc:
        "Analyzed arrest patterns across boroughs, age groups, and offense levels. Used statistical comparisons and visualizations to examine geographic and demographic differences.",

      footerLink: []
    }
  ],

  display: true
};
// Achievements Section

const achievementSection = {
  title: emoji("Achievements and Recognition 🏆"),

  subtitle: "Academic, leadership, and professional milestones.",

  achievementsCards: [],

  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",

  subtitle: "",

  displayMediumBlogs: "false",

  blogs: [],

  display: false
};

// Talks Section

const talkSection = {
  title: "Talks",

  subtitle: "",

  talks: [],

  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",

  subtitle: "",

  podcast: [],

  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",

  subtitle:
    "View my education, experience, technical skills, and project work.",

  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me"),

  subtitle:
    "I am currently exploring entry-level opportunities in data analytics, business intelligence, research, and related roles.",

  number: "",

  email_address: "sahithi058@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

// Shows that you are open to job opportunities

const isHireable = true;

// Export All Sections

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};