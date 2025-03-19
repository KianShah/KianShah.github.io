/* Change this file to get your personal Portfolio */

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

export const getLogo = () => logoNames.sample();
export const resumeLink = "https://drive.google.com/file/d/1QzJ-VK7BTC_MpoCAVLxQsvm8-rPir1Zv/view";
export const profile_image_path = "kian-compressed.jpg";

export const socialMediaLinks = {
  // Icons from iconify
  github: {
    link: "https://github.com/kianshah",
    icon: "cib:github"
  },
  linkedin: {
    link: "https://www.linkedin.com/in/kian-shahangyan/",
    icon: "cib:linkedin"
  },
  google: {
    link: "mailto:kian.shahangyan@gmail.com",
    icon: "cib:google"
  }
};

// logos with iconify
export const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Frontend / User Interfaces for web and mobile applications",
        "⚡ Building complex backend infrastructure to fulfill business needs",
        "⚡ Application deployment and configuration on the Cloud",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#61DAFB",
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
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            color: "#61DAFB",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on both AWS and Google Cloud",
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
          skillName: "Firebase",
          fontAwesomeClassname: "devicon:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#47A248",
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
        "⚡ Deep knowledge of core CS topics like Data Structures, Relational Databases, Networking, Operating Systems, etc.",
        "⚡ Completed Machine Learning fundamentals courses (supervised and unsupervised models, neural networks)",
        "⚡ Developed strong fundamental math skills in Calculus, Linear Algebra and Statistics."
      ],
      website_link: "https://www.ubc.ca/",
    },
  ],
};

export const certifications = {
  certifications: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link:
        "",
      alt_name: "",
      color_code: "",
    }
  ],
};

// Experience Page
export const experience = {
  title: "Experience",
  subtitle: "Work and Volunteer experience",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Dev Lead",
          company: "SupportingLines",
          company_url: "https://supportinglines.com/",
          logo_path: "supportinglines.png",
          duration: "Oct 2021 - May 2024",
          location: "Vancouver, BC",
          description:
            "Team Leadership:\n" +
            "• Oversaw all stages of the software development lifecycle from initial concept to final delivery. \n" +
            "• Worked cross-functionally with CEO and other stakeholders to manage project timelines and design and develop features leading to dozens of signups prior to our official launch of the platform\n" +
            "• Facilitated regular sprint meetings to track progress, address challenges, and plan future sprints\n" +
            "• Performed code reviews in Python and Typescript to ensure code quality and team member improvement\n" +
            "• Mentored and supervised interns, ensuring code quality and personal improvement\n" +
            "\n" +
            "Product Leadership: Led the design and development of a Next.js web platform for our clients \n" +
            "• Created a document creation and sharing feature to allow clients to do their 1-on-1s and lead other strategic meetings \n" +
            "• Developed data visualizations of survey results using Chart.js \n" +
            "• Developed an admin tool to allow SupportingLines administrators to manage users and view usage metrics \n" +
            "• Architectured and set up Google Cloud infrastructure services including: Google App Engine, Google Cloud Run, Google Cloud Functions, Google Cloud SQL, and Google Cloud Memorystore \n" +
            "• Integrated and set up Auth0 with our web application, including SSO with our third-party platform Thinkific, enabling users to securely log in and manage their profiles \n" +
            "• Implemented secure coding practices including the OWASP Top 10, SAST tools like nodejsscan, and created documented procedures to ensure software supply chain security \n" +
            "• Developed Python codebase to generate data visualizations using Pandas and Weasyprint, leading to an increase in positive feedback from clients \n",
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
            "• Daily scrum and Agile methodology\n" +
            "• Hotfixing production issues\n" +
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
          location: "Remote",
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

export const projects = {
  data: [
    {
      name: "Ensemble AutoML",
      url: "https://github.com/nikkimoteva/unDecided",
      description:
        "A full-stack website developed as a group to enable easier access to AutoML tooling",
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
