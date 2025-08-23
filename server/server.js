const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());

// --- Expanded Knowledge Base ---
const knowledgeBase = {
  generalizedCurriculums: {
    "Computer Science (CSE)": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Software Engineering",
      "C Programming",
      "Mathematics for Computing"
    ],
    "Information Technology (IT)": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
      "Information Security"
    ],
    "Electronics & Communication (ECE)": [
      "Digital Logic",
      "Microprocessors",
      "Signals and Systems",
      "C Programming",
      "Communication Systems",
      "Embedded Systems",
      "VLSI Design"
    ],
  },
  jobRoles: {
    // --- Software Development & Engineering ---
    "Software Developer": {
      critical_skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Git", "A Major Programming Language (Python/Java/C++)", "Web Technologies"],
      resources: {
        "Data Structures and Algorithms": { reason: "The foundation for efficient problem-solving.", youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
        "Object-Oriented Programming": { reason: "Essential for building modular and reusable code.", youtube: "https://www.youtube.com/watch?v=bSrm9RXwBaI", article: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-for-beginners/" },
        "Git": { reason: "The standard for version control in team collaboration.", youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk", article: "https://www.atlassian.com/git/tutorials/what-is-git" },
        "A Major Programming Language (Python/Java/C++)": { reason: "Core tool for building applications.", youtube: "https://www.youtube.com/watch?v=e_H-sV_8nK4", article: "https://www.w3schools.com/python/" },
        "Web Technologies": { reason: "Needed for developing web-based applications.", youtube: "https://www.youtube.com/watch?v=kUMe1FH4paE", article: "https://developer.mozilla.org/en-US/docs/Web" }
      }
    },
    "Front-End Developer": {
        critical_skills: ["HTML, CSS, & JavaScript", "React.js", "Git", "UI/UX Design Principles", "API Integration"],
        resources: {
            "HTML, CSS, & JavaScript": { reason: "The three core technologies for building web interfaces.", youtube: "https://www.youtube.com/watch?v=G3e-cpL7ofc", article: "https://www.internetingishard.com/" },
            "React.js": { reason: "The most popular JavaScript library for building user interfaces.", youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8", article: "https://react.dev/learn" },
            "Git": { reason: "Essential for version control and collaboration.", youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk", article: "https://www.atlassian.com/git/tutorials/what-is-git" },
            "UI/UX Design Principles": { reason: "Understanding design helps create more intuitive and effective interfaces.", youtube: "https://www.youtube.com/watch?v=c9_ih_UaRj4", article: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
            "API Integration": { reason: "Connecting to backend services to fetch and display data.", youtube: "https://www.youtube.com/watch?v=r-h2_i-gXnQ", article: "https://www.freecodecamp.org/news/what-is-an-api-in-english-please/" }
        }
    },
    "Back-End Developer": {
        critical_skills: ["Node.js", "DBMS", "API Design (REST/GraphQL)", "Operating Systems", "Cloud Computing"],
        resources: {
            "Node.js": { reason: "A popular runtime for building scalable server-side applications.", youtube: "https://www.youtube.com/watch?v=f2EqECiTBL8", article: "https://nodejs.org/en/docs/guides/getting-started-guide" },
            "DBMS": { reason: "Crucial for managing and querying application data.", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY", article: "https://www.w3schools.com/sql/" },
            "API Design (REST/GraphQL)": { reason: "Designing interfaces for the front-end to communicate with.", youtube: "https://www.youtube.com/watch?v=Q-B_j9-K-10", article: "https://restfulapi.net/" },
            "Operating Systems": { reason: "Understanding server environments and processes.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", article: "https://www.geeksforgeeks.org/operating-systems/" },
            "Cloud Computing": { reason: "Deploying and managing applications on platforms like AWS, GCP, or Azure.", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-cloud-computing/" }
        }
    },
    "Full-Stack Developer": {
        critical_skills: ["React.js", "Node.js", "DBMS", "Git", "Cloud Computing"],
        resources: {
            "React.js": { reason: "A leading framework for the front-end.", youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8", article: "https://react.dev/learn" },
            "Node.js": { reason: "A popular choice for building the back-end.", youtube: "https://www.youtube.com/watch?v=f2EqECiTBL8", article: "https://nodejs.org/en/docs/guides/getting-started-guide" },
            "DBMS": { reason: "Essential for managing the database.", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY", article: "https://www.w3schools.com/sql/" },
            "Git": { reason: "Version control for the entire application stack.", youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk", article: "https://www.atlassian.com/git/tutorials/what-is-git" },
            "Cloud Computing": { reason: "Needed for deploying and scaling the full application.", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-cloud-computing/" }
        }
    },
    "Mobile Application Developer (iOS/Android)": {
        critical_skills: ["Mobile Development Framework (React Native/Flutter/Swift/Kotlin)", "API Integration", "UI/UX Design Principles", "Data Structures and Algorithms", "Git"],
        resources: {
            "Mobile Development Framework (React Native/Flutter/Swift/Kotlin)": { reason: "The core technology for building the mobile app.", youtube: "https://www.youtube.com/watch?v=0-S5a0eXPoc", article: "https://flutter.dev/docs" },
            "API Integration": { reason: "Connecting the mobile app to backend services.", youtube: "https://www.youtube.com/watch?v=r-h2_i-gXnQ", article: "https://www.freecodecamp.org/news/what-is-an-api-in-english-please/" },
            "UI/UX Design Principles": { reason: "Creating intuitive and user-friendly mobile interfaces.", youtube: "https://www.youtube.com/watch?v=c9_ih_UaRj4", article: "https://developer.apple.com/design/human-interface-guidelines/" },
            "Data Structures and Algorithms": { reason: "Optimizing app performance and logic.", youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
            "Git": { reason: "Version control for the mobile app codebase.", youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk", article: "https://www.atlassian.com/git/tutorials/what-is-git" }
        }
    },
    // --- Artificial Intelligence & Machine Learning ---
    "AI/ML Engineer": {
        critical_skills: ["Python for Data Science", "Machine Learning Frameworks (TensorFlow/PyTorch)", "Mathematics for Computing", "Data Structures and Algorithms", "Big Data Technologies"],
        resources: {
            "Python for Data Science": { reason: "The primary language for AI/ML, with libraries like NumPy, Pandas, and Scikit-learn.", youtube: "https://www.youtube.com/watch?v=r-uOLxNrNk8", article: "https://www.geeksforgeeks.org/python-for-data-science/" },
            "Machine Learning Frameworks (TensorFlow/PyTorch)": { reason: "Essential for building and training deep learning models.", youtube: "https://www.youtube.com/watch?v=Jy4wM2X21u0", article: "https://pytorch.org/tutorials/" },
            "Mathematics for Computing": { reason: "Linear algebra, calculus, and probability are the foundations of ML algorithms.", youtube: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t57w", article: "https://www.deeplearningbook.org/contents/part_basics.html" },
            "Data Structures and Algorithms": { reason: "Crucial for handling large datasets and optimizing model performance.", youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
            "Big Data Technologies": { reason: "Experience with tools like Spark or Hadoop for processing massive datasets.", youtube: "https://www.youtube.com/watch?v=t_a-Q6-6y-s", article: "https://spark.apache.org/docs/latest/quick-start.html" }
        }
    },
    "Data Scientist": {
        critical_skills: ["Python for Data Science", "Statistics & Probability", "Data Visualization", "Machine Learning Concepts", "DBMS"],
        resources: {
            "Python for Data Science": { reason: "The core language for data manipulation, analysis, and modeling.", youtube: "https://www.youtube.com/watch?v=r-uOLxNrNk8", article: "https://www.geeksforgeeks.org/python-for-data-science/" },
            "Statistics & Probability": { reason: "The theoretical foundation for making inferences and predictions from data.", youtube: "https://www.youtube.com/playlist?list=PL1328115D3D8A2566", article: "https://www.khanacademy.org/math/statistics-probability" },
            "Data Visualization": { reason: "Communicating insights effectively using tools like Matplotlib, Seaborn, or Tableau.", youtube: "https://www.youtube.com/watch?v=aHa_f3g_L6A", article: "https://www.tableau.com/learn/articles/data-visualization" },
            "Machine Learning Concepts": { reason: "Understanding algorithms to build predictive models.", youtube: "https://www.youtube.com/watch?v=i_LwzRVP7bg", article: "https://developers.google.com/machine-learning/crash-course" },
            "DBMS": { reason: "Extracting and managing data from databases using SQL.", youtube: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8SkeN62F4_szz5Uvi", article: "https://www.w3schools.com/sql/" }
        }
    },
    // --- Cloud, DevOps & Infrastructure ---
    "Cloud Engineer": {
        critical_skills: ["Cloud Platforms (AWS/GCP/Azure)", "Operating Systems", "Computer Networks", "Infrastructure as Code (Terraform)", "Scripting (Python/Bash)"],
        resources: {
            "Cloud Platforms (AWS/GCP/Azure)": { reason: "Deep knowledge of a major cloud provider's services is essential.", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-aws/" },
            "Operating Systems": { reason: "Managing and configuring Linux/Windows servers in the cloud.", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", article: "https://www.geeksforgeeks.org/operating-systems/" },
            "Computer Networks": { reason: "Understanding VPCs, subnets, and security groups to build secure cloud infrastructure.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.comptia.org/content/guides/what-is-computer-networking" },
            "Infrastructure as Code (Terraform)": { reason: "Automating the provisioning and management of cloud resources.", youtube: "https://www.youtube.com/watch?v=l5k1ai_GBDE", article: "https://www.terraform.io/intro" },
            "Scripting (Python/Bash)": { reason: "Automating tasks and managing cloud environments.", youtube: "https://www.youtube.com/watch?v=ysDurA5f3-I", article: "https://www.learnshell.org/" }
        }
    },
    "DevOps Engineer": {
        critical_skills: ["CI/CD Tools (Jenkins/GitLab CI)", "Containerization (Docker/Kubernetes)", "Cloud Platforms (AWS/GCP/Azure)", "Scripting (Python/Bash)", "Operating Systems"],
        resources: {
            "CI/CD Tools (Jenkins/GitLab CI)": { reason: "Automating the build, test, and deployment pipeline.", youtube: "https://www.youtube.com/watch?v=u-M1M2_Qz4g", article: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
            "Containerization (Docker/Kubernetes)": { reason: "Packaging applications and managing them at scale.", youtube: "https://www.youtube.com/watch?v=p-gXO_k6EHs", article: "https://www.docker.com/resources/what-container/" },
            "Cloud Platforms (AWS/GCP/Azure)": { reason: "Deploying and managing infrastructure on the cloud.", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-devops/" },
            "Scripting (Python/Bash)": { reason: "Writing automation scripts for infrastructure tasks.", youtube: "https://www.youtube.com/watch?v=ysDurA5f3-I", article: "https://www.learnshell.org/" },
            "Operating Systems": { reason: "Deep understanding of Linux is crucial for managing servers.", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", article: "https://www.geeksforgeeks.org/operating-systems/" }
        }
    },
    // --- Cybersecurity ---
    "Cybersecurity Analyst": {
        critical_skills: ["Computer Networks", "Information Security Principles", "Operating Systems", "Cybersecurity Tools (Wireshark/Metasploit)", "Scripting (Python/Bash)"],
        resources: {
            "Computer Networks": { reason: "Understanding network protocols and traffic is fundamental to security.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.comptia.org/content/guides/what-is-computer-networking" },
            "Information Security Principles": { reason: "Knowledge of the CIA triad, risk assessment, and security controls.", youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA", article: "https://www.sans.org/cyber-security-courses/introduction-cyber-security/" },
            "Operating Systems": { reason: "Securing and analyzing both Linux and Windows systems.", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", article: "https://www.geeksforgeeks.org/operating-systems/" },
            "Cybersecurity Tools (Wireshark/Metasploit)": { reason: "Hands-on experience with tools for network analysis and penetration testing.", youtube: "https://www.youtube.com/watch?v=TkBfPZE3s0c", article: "https://www.wireshark.org/docs/" },
            "Scripting (Python/Bash)": { reason: "Automating security tasks and analyzing log data.", youtube: "https://www.youtube.com/watch?v=ysDurA5f3-I", article: "https://automatetheboringstuff.com/" }
        }
    },
    // --- Product & Project Management ---
    "Product Manager": {
        critical_skills: ["Software Engineering", "User Experience (UX) Design", "Agile Methodologies", "Market Research", "Data Analysis"],
        resources: {
            "Software Engineering": { reason: "Understanding the development lifecycle is vital for effective communication.", youtube: "https://www.youtube.com/watch?v=XvI-UKiE7w4", article: "https://www.geeksforgeeks.org/software-engineering/" },
            "User Experience (UX) Design": { reason: "Advocating for the user and understanding design principles.", youtube: "https://www.youtube.com/watch?v=c9_ih_UaRj4", article: "https://www.nngroup.com/articles/definition-user-experience/" },
            "Agile Methodologies": { reason: "Managing the product development process using frameworks like Scrum.", youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY", article: "https://www.atlassian.com/agile" },
            "Market Research": { reason: "Identifying user needs and market opportunities.", youtube: "https://www.youtube.com/watch?v=iTOC0_B-i4g", article: "https://www.qualtrics.com/experience-management/research/what-is-market-research/" },
            "Data Analysis": { reason: "Using data to make informed product decisions.", youtube: "https://www.youtube.com/watch?v=ua-i_s-d-wY", article: "https://www.sisense.com/blog/data-analysis-for-product-managers/" }
        }
    }
    // Add other roles here following the same structure...
  }
};

// --- API Endpoint ---
app.post('/api/analyze', (req, res) => {
  const { branch, targetRole } = req.body;

  if (!branch || !targetRole) {
    return res.status(400).json({ error: 'Branch and Target Role are required.' });
  }

  const curriculum = knowledgeBase.generalizedCurriculums[branch];
  const roleInfo = knowledgeBase.jobRoles[targetRole];

  if (!curriculum || !roleInfo) {
    return res.status(404).json({ error: 'Selected branch or role not found in our knowledge base.' });
  }

  const curriculumSet = new Set(curriculum);
  const criticalSkills = roleInfo.critical_skills;
  const resources = roleInfo.resources;

  const coreFocus = criticalSkills
    .filter(skill => curriculumSet.has(skill))
    .map(skill => ({
      name: skill,
      reason: resources[skill]?.reason || "This is a foundational subject in your curriculum that directly applies to this role."
    }));

  const missingSkills = criticalSkills.filter(skill => !curriculumSet.has(skill));

  const personalizedRoadmap = criticalSkills.map(skill => ({
    name: skill,
    youtube: resources[skill]?.youtube || '#',
    article: resources[skill]?.article || '#'
  }));

  const responseData = {
    coreCurriculumFocus: coreFocus,
    criticalMissingSkills: missingSkills,
    personalizedRoadmap: personalizedRoadmap,
  };

  res.json(responseData);
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
