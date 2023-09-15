/* Change this file to get your personal Portfolio */

// Website related settings
export const settings = {
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-8X6FHHR9P4",
};

// eslint-disable-next-line no-extend-native
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const logoNames = [
  "kian.portfolio()",
  "logo.generate()",
  "if ('2' == 2) { console.log(❤) }",
  "generating future.main()",
  "Developing the mind",
  "Made with ❤",
  "10% luck, 20% skill, 100% pain",
  "🙈 🙉 🙊",
];

//Home Page
export const greeting = {
  title: "Hello 👋.",
  title2: "Kian Shahangyan",
  getLogo: () => logoNames.sample(),
  nickname: "Kian",
  full_name: "Kian Shahangyan",
  subTitle: "Full Stack / Backend developer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1O4D-Yk48I8jh4J-MtzRlFDA9XR4YWcRI/view?usp=sharing",
  mail: "mailto:kian.shahangyan@alumni.ubc.ca",
};

export const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/kianshah",
  linkedin: "https://www.linkedin.com/in/kian-shahangyan/",
  google: "mailto:kianshah376@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: "",
};

export const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front End / User Interfaces for web and mobile applications",
        "⚡ Building complex backend infrastructure to fulfill business needs",
        "⚡ Application deployment and configuration on the cloud",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Scala",
          fontAwesomeClassname: "logos:scala",
          style: {
            color: "#dc322f",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178c6",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MaterialUI",
          fontAwesomeClassname: "logos:material-ui",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
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
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
          style: {
            color: "#CB3837",
          },
        },
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "IntelliJ",
          fontAwesomeClassname: "logos:intellij-idea",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration tools",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB Cloud",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "Jenkins",
          fontAwesomeClassname: "vscode-icons:file-type-jenkins",
          style: {
            color: "#1438C6",
          },
        },
      ],
    },
  ],
};

export const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "BSc. - Computer Science",
      logo_path: "ubc-logo.png",
      alt_name: "UBC",
      duration: "Sept. 2016 - Nov. 2021",
      descriptions: [
        "⚡ Intimate knowledge of core CS topics like Data Structures, Relational Databases, Networking, Operating Systems, etc.",
        "⚡ Completed 2 Machine Learning fundamentals courses (Sklearn, supervised and unsupervised models, Neural Networks)",
        "⚡ Developed strong fundamental math skills in Calculus, Linear Algebra and Statistics.",
        "⚡ Participated in 12 months of the Science Co-op program",
      ],
      website_link: "https://www.ubc.ca/",
    },
  ],
};

export const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "NWHacks",
      logo_path: "nwhacks.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
export const experience = {
  title: "Experience",
  subtitle: "Work and Volunteer experience",
  description:
    "I've completed 1 year of Co-op. I've mostly done projects on my own and I am actively looking for a new full-time opportunity.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Engineer",
          company: "SupportingLines",
          company_url: "https://supportinglines.com/",
          logo_path: "supportinglines.png",
          duration: "Oct 2021 - Present",
          location: "Vancouver, BC",
          description:
            "Resposibilities and skills:\n" +
            "• Product Leadership: Led the design and development of a new web platform for our clients to integrate with their HR coaching sessions" +
            "• Worked cross-functionally with CEO and other stakeholders to design wireframes in Figma\n" +
            "• Built web application powered by Next.js and hosted using Google App Engine\n" +
            "• Architected and built SQL (Google Cloud MySQL) and NoSQL (Firestore) databases to store customer data\n" +
            "• Bootstrapped Cypress and Jest testing frameworks, and created unit, integration and e2e tests\n" +
            "• Integrated production-grade tools including Auth0, Knex.js, Typescript to make it easier to write high-quality, secure code\n" +
            "• Implemented secure coding practices including the OWASP Top 10, SAST tools like nodejsscan, and created documented procedures to ensure packages are not outdated and that our software supply chain is secure\n" +
            "Python: Developed Python codebase to generate data visualizations using Weasyprint and Pandas, and hosted on Google Cloud Functions as a micro-service\n" +
            "Machine Learning: Produced NLP visualizations using SpaCy, YAKE for Sentiment Analysis of text responses\n" +
            "Flask: Created Flask-based web application hosted on Heroku to allow Client Delivery team to generate surveys/reports\n" +
            "ETL: Created and maintained ETL pipelines for onboarding of customer survey data from Qualtrics into our MySQL database",
          color: "#0071C5",
        },
        {
          title: "Co-op Software Developer",
          company: "Visier",
          company_url: "https://www.visier.com/",
          logo_path: "visier.jpeg",
          duration: "Sept 2018 - Aug 2019",
          location: "Vancouver, BC",
          description:
            "Responsibilities and skills:\n" +
            "• Writing and testing Scala and Java code\n" +
            "• Writing tests with Scalatest and Mockito frameworks\n" +
            "• Daily scrum and Agile methodology\n" +
            "• Creating documentation on Confluence\n" +
            "• Hotfixing production issues\n" +
            "• Using Google Suite for email communications\n" +
            "• Using SBT to build software\n" +
            "\n" +
            "Accomplished Projects:\n" +
            "• Migrated Visier platform to Java 11\n" +
            "• Debugged major development and production issues, such as server deadlocks\n" +
            "• Developed feature to asynchronously load data environments to reduce load time for customers\n",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "NWHacks Mentor",
          company: "NWHacks",
          company_url: "https://www.nwhacks.io/",
          logo_path: "nwhacks.png",
          duration: "Jan 2021, Jan 2022",
          location: "WFH",
          description:
            "Mentored students requiring help in using tools like Python, Java, React, Git, and others.\n\n" +
            "I was also involved in the judging phase of the competition, grading projects based on presentation, code quality, and innovation.\n\n" +
            "Received the nwHacks 2021 Mentor Recognition Award",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
export const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of modern frameworks and tools. Most of my experience consists of developing full-stack projects and deploying them on the Cloud.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
export const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kian-compressed.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can! ",
  },
};

export const projects = {
  data: [
    {
      name: "Ensemble AutoML",
      url: "https://github.com/nikkimoteva/unDecided",
      description:
        "A full-stack website developed as a group to enable easier access to ML",
      languages: [
        {
          name: "MongoDB Cloud",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
      ],
    },
    {
      name: "Lived Experiences",
      url: "https://github.com/zareef4/lived-experiences-app",
      description:
        "A cross-platform mobile app for PoC to log their experiences of places in Vancouver. VanHacks 2020 Finalist.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NativeBase",
          iconifyClass: "",
        },
      ],
    },
    {
      name: "UBCourseFinder",
      url: "https://www.ubccourses.ca",
      description:
        "A full-stack web application for UBC students to find courses and reserve seats",
      languages: [
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Node",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Budget Bunny",
      url: "https://github.com/KianShah/NWHacks_2019",
      description:
        "A personal budgeting tool developed during NWHacks 2019 that uses ML vision to read pictures of uploaded receipts",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Android",
          iconifyClass: "logos:android-icon",
        },
        {
          name: "Gradle",
          iconifyClass: "logos:gradle",
        },
        {
          name: "Google Mobile Vision",
          iconifyClass: "mdi:ocr",
        },
      ],
    },
  ],
};
