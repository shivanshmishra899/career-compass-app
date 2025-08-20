// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// --- The Knowledge Base ---
// This object acts as our in-memory database.
// It contains generalized curriculums for different engineering branches
// and the specific requirements for various job roles.
const knowledgeBase = {
  generalizedCurriculums: {
    "Computer Science (CSE)": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
    ],
    "Information Technology (IT)": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
    ],
    "Electronics & Communication (ECE)": [
      "Digital Logic",
      "Microprocessors",
      "Signals and Systems",
      "C Programming",
      "Communication Systems",
      "Embedded Systems",
    ],
  },
  jobRoles: {
    "Software Development Engineer (SDE-1)": {
      critical_skills: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Git",
        "React.js",
        "Node.js",
        "Cloud Computing (AWS/GCP/Azure)",
        "System Design",
      ],
      resources: {
        "Data Structures and Algorithms": {
          reason: "The absolute foundation for problem-solving and writing efficient code. Essential for technical interviews at top companies.",
          youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
          article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
        },
        "Operating Systems": {
          reason: "Crucial for understanding how software interacts with hardware, managing memory, and handling concurrency.",
          youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
          article: "https://www.geeksforgeeks.org/operating-systems/",
        },
         "Computer Networks": {
          reason: "Essential for building any application that communicates over the internet, from web apps to distributed systems.",
          youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
          article: "https://www.javatpoint.com/computer-network-tutorial",
        },
        "Git": {
          youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk",
          article: "https://www.atlassian.com/git/tutorials/what-is-git",
        },
        "React.js": {
          youtube: "https://www.youtube.com/playlist?list=PL4-IK0AVhVjM0H-vdl3p-5L_qS_Oa_x2a",
          article: "https://react.dev/learn",
        },
        "Node.js": {
          youtube: "https://www.youtube.com/watch?v=f2EqECiTBL8",
          article: "https://nodejs.org/en/docs/guides/getting-started-guide",
        },
        "Cloud Computing (AWS/GCP/Azure)": {
          youtube: "https://www.youtube.com/watch?v=k1RI58waXbA",
          article: "https://aws.amazon.com/what-is-cloud-computing/",
        },
        "System Design": {
            youtube: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo5-L0_2FkscLgYcQ22v2o",
            article: "https://github.com/donnemartin/system-design-primer",
        }
      },
    },
    "Data Analyst": {
        critical_skills: [
            "DBMS",
            "Python for Data Science",
            "Statistics",
            "Data Visualization (Tableau/PowerBI)",
            "Advanced Excel"
        ],
        resources: {
            "DBMS": {
                reason: "Understanding databases and SQL is the backbone of data analysis, allowing you to query, manipulate, and extract insights from data.",
                youtube: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8SkeN62F4_szz5Uvi",
                article: "https://www.w3schools.com/sql/",
            },
            "Python for Data Science": {
                youtube: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
                article: "https://www.geeksforgeeks.org/python-for-data-science/",
            },
            "Statistics": {
                youtube: "https://www.youtube.com/playlist?list=PL1328115D3D8A2566",
                article: "https://www.statista.com/chart/25333/most-important-statistical-methods-for-data-scientists/",
            },
            "Data Visualization (Tableau/PowerBI)": {
                youtube: "https://www.youtube.com/watch?v=aHa_f3g_L6A",
                article: "https://www.tableau.com/learn/articles/data-visualization",
            },
            "Advanced Excel": {
                youtube: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
                article: "https://www.excel-easy.com/data-analysis.html",
            }
        }
    },
    "Product Manager": {
        critical_skills: [
            "Software Engineering",
            "User Experience (UX) Design",
            "Agile Methodologies",
            "Market Research",
            "DBMS"
        ],
        resources: {
            "Software Engineering": {
                reason: "While not a coding role, understanding the software development lifecycle is vital for effective communication with the engineering team.",
                youtube: "https://www.youtube.com/watch?v=XvI-UKiE7w4",
                article: "https://www.geeksforgeeks.org/software-engineering/",
            },
            "DBMS": {
                 reason: "Basic SQL and database knowledge helps in understanding the product's data layer and making data-informed decisions.",
                 youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
                 article: "https://www.w3schools.com/sql/sql_intro.asp"
            },
            "User Experience (UX) Design": {
                youtube: "https://www.youtube.com/watch?v=c9_ih_UaRj4",
                article: "https://www.nngroup.com/articles/definition-user-experience/",
            },
            "Agile Methodologies": {
                youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
                article: "https://www.atlassian.com/agile",
            },
            "Market Research": {
                youtube: "https://www.youtube.com/watch?v=iTOC0_B-i4g",
                article: "https://www.qualtrics.com/experience-management/research/what-is-market-research/",
            }
        }
    }
  },
};


// --- API Endpoint ---
app.post('/api/analyze', (req, res) => {
  const { branch, targetRole } = req.body;

  // --- Validation ---
  if (!branch || !targetRole) {
    return res.status(400).json({ error: 'Branch and Target Role are required.' });
  }

  const curriculum = knowledgeBase.generalizedCurriculums[branch];
  const roleInfo = knowledgeBase.jobRoles[targetRole];

  if (!curriculum || !roleInfo) {
    return res.status(404).json({ error: 'Selected branch or role not found in our knowledge base.' });
  }

  // --- Core Analysis Logic ---
  const curriculumSet = new Set(curriculum);
  const criticalSkills = roleInfo.critical_skills;
  const resources = roleInfo.resources;

  // 1. Find Core Curriculum Focus (Intersection)
  const coreFocus = criticalSkills
    .filter(skill => curriculumSet.has(skill))
    .map(skill => ({
      name: skill,
      reason: resources[skill]?.reason || "This is a foundational subject in your curriculum that directly applies to this role."
    }));


  // 2. Find Critical Missing Skills (Difference)
  const missingSkills = criticalSkills.filter(skill => !curriculumSet.has(skill));

  // 3. Build the Personalized Roadmap
  const personalizedRoadmap = criticalSkills.map(skill => ({
    name: skill,
    youtube: resources[skill]?.youtube || '#',
    article: resources[skill]?.article || '#'
  }));

  // --- Construct Final Response ---
  const responseData = {
    coreCurriculumFocus: coreFocus,
    criticalMissingSkills: missingSkills,
    personalizedRoadmap: personalizedRoadmap,
  };

  res.json(responseData);
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});