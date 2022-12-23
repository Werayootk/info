
/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Werayoot kunphai",
  logo_name: "Werayoot kunphai",
  nickname: "Toon",
  subTitle:
    "An aspiring developer who loves to take on new projects and explore new technology that challenges his skills.",
  resumeLink:
    "https://drive.google.com/drive/folders/1sruVORQkCruRjx7lBxjXO5lGjX_VKuWQ?usp=sharing",
  portfolio_repository: "https://github.com/Werayootk",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Werayootk",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/werayoot-kunphai/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link:
      "https://www.youtube.com/channel/UCoePSr-jCIk-ZBNZHW6LHmQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=werayoot5800@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/9064641/da12kness",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#F58025", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/werayoot.kunphai",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/werayootk/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Medium",
    link: "https://werayoot-kunphai.medium.com/",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and CSS",
        "⚡ Implementing secure access to database",
        "⚡ Creating application backend in .Net and NodeJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "redux-saga",
          fontAwesomeClassname: "simple-icons:reduxsaga",
          style: {
            color: "#999999",
          },
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E434AA",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Go(basic)",
          fontAwesomeClassname: "vscode-icons:file-type-go-gopher",
          style: {
            color: "#rgb(106, 215, 229)",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "icon-park:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "teenyicons:nextjs-outline",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "logos:nestjs",
          style: {
            color: "rgb(224, 35, 78)",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#FF6C37",
          },
        },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "ElasticSearch",
          fontAwesomeClassname: "logos:elasticsearch",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "mlflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "logos:airflow",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/werayoot58001",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/wedev",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "https://codeforces.com/profile/wedev",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@werayoot5800",
    // },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/Werayootk/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/werayootkunphai",
    },
    // {
    //   siteName: "Codewars",
    //   iconifyClassname: "simple-icons:codewars",
    //   style: {
    //     color: "#B1361E",
    //   },
    //   profileLink: "https://www.codewars.com/users/Werayootk",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chulalongkorn University",
      subtitle: "Master's degree, faculty of computer engineering",
      logo_path: "cu_logo.png",
      alt_name: "Werayoot Kunphai",
      duration: "Aug 2022 - Present",
      cgpa: "-",
      descriptions: [
        "⚡ I have studied Computer Science: Data Science, Data Engineer tool and more.",
      ],
      website_link: "https://www.cp.eng.chula.ac.th/en/prospective/graduate/master-computerscience/",
    },
    {
      title: "Software Park CodeCamp Full-stack JavaScript",
      subtitle: "BootCamp Coding Academy",
      logo_path: "software_park_logo.png",
      alt_name: "Werayoot Kunphai",
      duration: "October 2021 - March 2022",
      cgpa: "-",
      descriptions: [
        "⚡ I have studied Design: UI/UX design Figma, Technologies: React, Redux, Node.js, MySQL, Linux, Docker",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "https://getcodecamp.com/courses/codecamp-online-fullstack-javascript/",
    },
    {
      title: "CS50's Introduction to Computer Science",
      subtitle: "Online Academy",
      logo_path: "harvard_logo.png",
      alt_name: "Werayoot Kunphai",
      duration: "March 2019",
      cgpa: "-",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, web etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "https://www.edx.org/",
    },
    {
      title: "King Mongkut's University of Technology North Bangkok",
      subtitle: "B.Degree. in Material Handling Engineering",
      logo_path: 'logo_kmutnb.png',
      alt_name: "Werayoot Kunphai",
      duration: "March 2010 - December 2014",
      cgpa: "2.96 / 4.00",
      descriptions: [
        "⚡ I have studied in mechanical engineer",
      ],
      website_link: "https://kmutnb.ac.th/",
    },
  ],
};
//To do
const certifications = {
  certifications: [
    {
      title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d4f4741f-0c45-4768-b634-9ff0d65920ed/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c11f397e-7f3a-4e5d-b114-0f87a7c33176/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      subtitle: "- Jonas Schmedtmann",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-92841866-23e7-43e4-8761-3b2f74ee66f6/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "The Complete ASP.NET MVC 5 Course",
      subtitle: "- Mosh Hamedani",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bd061205-70df-4d07-b25c-335d47b95dd0/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "C# Intermediate: Classes, Interfaces and OOP ",
      subtitle: "- Mosh Hamedani",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-OHF75JNM/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain ",
      subtitle: "- Bret Fisher",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6f1367d0-d85d-45f5-916d-39ba28b46d33/",
      alt_name: "-",
      color_code: "#A435F0",
    },
    {
      title: "Complete Guide to Elasticsearch",
      subtitle: "- Bo Andersen",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-3382a820-4c7b-4fc1-adb8-aff771433ba2/",
      alt_name: "-",
      color_code: "#A435F0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteers",
  description:
    "I am eager to explore find challenge my skill with experience gained from voluntary works on sites like facebook community groups and create projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Lansing Business Systems Co. Ltd",
          company_url: "https://www.lansingbs.com/",
          logo_path: "lbs_logo.svg",
          duration: "Apr 2022 - PRESENT",
          location: "Bangkok, Thailand",
          description:
            "Reviewed code, debugged problems and corrected issues. " +
            "Developed clear specifications for project plans using customer requirements.",
          color: "#20BEFF",
        },
        {
          title: "Software Developer",
          company: "Panasonic Management (Thailand) co. ltd",
          company_url: "https://www.panasonic.com/th/",
          logo_path: "panasonic_logo.png",
          duration: "Nov 2020 - Apr 2022",
          location: "Bangkok, Thailand",
          description:
            "Responsible for design, programming, test UAT script and maintain programming application.",
          color: "#132CAB",
        },
        {
          title: "Software Engineer",
          company: "Magnecomp Precision Technology PCL.",
          company_url: "https://www.magnecomp.tdk.com/",
          logo_path: "TDK_logo.jpeg",
          duration: "Nov 2018 - Nov 2020",
          location: "Ayuthaya, Thailand",
          description:
            "Software development, design, debug applications and create a document for knowledge sharing, Implement add a new feature on applications",
          color: "#000000",
        },
		    {
          title: "Engineer",
          company: "MEKTEC MANUFACTURING CORPORATION (THAILAND) LIMITED",
          company_url: "http://www.mektec.co.th/",
          logo_path: "mmct_logo.svg",
          duration: "Nov 2014 - Nov 2018",
          location: "Ayuthaya, Thailand",
          description:
            "I am working on automation process in manufacturing and responsibility on 2D barcode system.",
          color: "#132CAB",
        },
      ],
    },
    {
      title: "Volunteers",
      experiences: [
        {
          title: "Thai Survive",
          company: "ThaiSurvive",
          company_url: "waiting for site deploy",
          logo_path: "Thaisurvie_logo.png",
          duration: "August 2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to this project as a frontend developer to develop user interface by design and integrate with RESTful API service from backend.",
          color: "#E5E5E5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience contributes to Volunteers' projects and deploys them to web applications using cloud infrastructure. Still trying to gain experience by trying my hands on different projects. Most of these are academic projects with some personal projects in between.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "weprofile-300.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://werayoot-kunphai.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangkok, Thailand",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/eZYAmaG7YaLVSTKb6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+669 49074665",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
