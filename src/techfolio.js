import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "SagarRaut Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: "ayin_qoph.png",
  description:
    "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/raut07sagar",
  linkden: "https://www.linkedin.com/in/sagar07/",
  facebook: "https://www.facebook.com/profile.php?id=100006896625330",
  instagram: "https://www.instagram.com/_ayin_qoph/",
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Sagar Raut",
  bannerHeading: "Hey I Am Sagar",
  bannerTagLine: emoji(
    "Enthusiastic and dynamic “Full stack developer [MERN]” with hands-on experience in designing and developing web applications using a range of technologies and programming languages."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "sagarnew.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1l_9A7AXt9AD23Iy5-FdvnVnCNpOtK3XE/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "raut07sagar",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "I'm Sagar Raut, I completed my Bachelor's Degree in 2020 from Priyadarshini College Of Engineering.I am a person who has high passion in Technologies.I have been Coding for around 6 months now. I look back to those days where it all began from blank screens to beautiful websites/web application nowadays and that's how far I have grown now. I Love to create full stack applications using MERN stack preferably.I have a dream to master all the Technologies and become the TOP developers in the World and now I am working toward it!I love Travelling and Exploring different places and my most favourite game is BasketBall.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Scss.",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "raut07sagar",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Unichat",
      projectBio:
        "This is a full-fledged Firebase Chat Application. With social authentication including Google and Facebook using Firebase,  great design, and functionality, image support, the ability to create multiple rooms.",

      projectUrl: "https://talki-app.netlify.app/",
      backend: "https://github.com/raut07sagar/talki_app",
      frontend: "https://github.com/raut07sagar/talki_app",
      stackList: ["ReactJs", "Firebase", "Chat-engine"],
    },
    {
      projectName: "Plant-House",

      projectBio:
        "Plant House is a MERN Stack ecommerce application where users can buy plants online. ",

      projectUrl: "https://plant-house1.netlify.app/",
      backend: "https://github.com/raut07sagar/plant_house_backend",
      frontend: "https://github.com/raut07sagar/plant_house_frontend",
      stackList: ["React", "mongodb", "html", "css", "nodejs"],
    },
    {
      projectName: "NoteZipper",
      projectBio:
        "This is a really simple notepad application which is as easy to use as a notepad. Just put your notes to the notepad which grows and shrinks automatically",

      projectUrl: "https://notezipper09.herokuapp.com/",
      backend: "https://github.com/raut07sagar/noteZipper-backend",
      frontend: "https://github.com/raut07sagar/note-Zipper/tree/main/frontend",
      stackList: ["React", "NodeJs", "Mongodb", "ExpressJs", "HTML"],
    },

    {
      projectName: "Google-Drive_clone",
      projectBio:
        "This app includes, authentication, file storage, database storage, and so much more using Reactjs and firebase",

      projectUrl: "https://googledrive-clone.netlify.app/",
      backend: "https://github.com/raut07sagar/goole_dirve_clone",
      frontend: "https://github.com/raut07sagar/goole_dirve_clone",
      stackList: ["ReactJs", "Firebase", "Google authentication"],
    },

    {
      projectName: "Food Recipe App",
      projectBio: "Search Food Online and Know Recipe of it",

      projectUrl: "https://serene-carson-96f0c2.netlify.app/",
      backend: "https://github.com/raut07sagar/Food_recipie_App",
      frontend: "https://github.com/raut07sagar/Food_recipie_App",
      stackList: ["React Hooks", "HTML", "Css"],
    },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Bootcamp in MERN Stack ",
      experienceDesc:
        "Underwent an intense training on full stack web development using JavaScript and its framework with a number of projects and hands-on experience with each and every technology involved. Worked on daily tasks and assessments which are around 60 and performed well in all of them.",
      experienceDuration: "07/21-12/21",
      experienceTags: ["5 months", "chennai"],
      url: "https://drive.google.com/file/d/1RA5JjsgbCFjj-QNzuRPD8KL8h6lG5Yaa/view",
    },
    {
      experienceTitle: "JAVASCPRIT",
      experienceDesc: "",
      experienceDuration: "2021",
      experienceTags: ["chennai"],
      url: "https://drive.google.com/file/d/1WKOXphs25NrZKvkIbwxRQ0DjLRBgIrnc/view?usp=drivesdk",
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["9579583007", "rautsagar622@gmail.com"],
};

// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
