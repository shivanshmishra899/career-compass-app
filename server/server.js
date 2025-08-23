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
    "Computer Science (CSE)": {
      "Semester 1": [
        { name: "Engineering Mathematics-I", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Engineering Physics", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRh3-PJ2A_2I1-1-p2gI-5za", article: "https://www.britannica.com/science/physics-science" },
        { name: "Basic Electrical Engineering", youtube: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaL23tjw2d2-3Gk3z23-a9vS", article: "https://www.allaboutcircuits.com/textbook/" },
        { name: "Programming for Problem Solving (C)", name_match: ["C Programming"], youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" }
      ],
      "Semester 2": [
        { name: "Engineering Mathematics-II", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Engineering Chemistry", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.khanacademy.org/science/chemistry" },
        { name: "Data Structures", name_match: ["Data Structures and Algorithms"], youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
        { name: "Object Oriented Programming", name_match: ["Object-Oriented Programming"], youtube: "https://www.youtube.com/watch?v=bSrm9RXwBaI", article: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-for-beginners/" }
      ],
      "Semester 3": [
        { name: "Engineering Mathematics-III", name_match: ["Mathematics for Computing"], youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Data Structures & Algorithms", youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
        { name: "Computer Organization & Architecture", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgVwEit3I_pkwM2Q-", article: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" },
        { name: "Operating Systems", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", article: "https://www.geeksforgeeks.org/operating-systems/" },
        { name: "Discrete Mathematics", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3", article: "https://www.javatpoint.com/discrete-mathematics-tutorial" }
      ],
      "Semester 4": [
        { name: "Design & Analysis of Algorithms", name_match: ["Data Structures and Algorithms"], youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
        { name: "Database Management Systems (DBMS)", name_match: ["DBMS"], youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj_0b-M4E3U2gC-g-u4g9s-", article: "https://www.javatpoint.com/dbms-tutorial" },
        { name: "Computer Networks", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", article: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
        { name: "Software Engineering", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/software-engineering/" },
        { name: "Theory of Computation", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4P6IP_8g2gaqg2j", article: "https://www.javatpoint.com/automata-tutorial" }
      ],
      "Semester 5": [
        { name: "Compiler Design", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjfrlGa_4Tdd8G54ad34_a-", article: "https://www.geeksforgeeks.org/compiler-design-tutorials/" },
        { name: "Artificial Intelligence (AI)", youtube: "https://www.youtube.com/watch?v=JzE34LpPI4M", article: "https://www.javatpoint.com/artificial-intelligence-tutorial" },
        { name: "Web Technologies", youtube: "https://www.youtube.com/watch?v=kUMe1FH4paE", article: "https://developer.mozilla.org/en-US/docs/Web" }
      ],
      "Semester 6": [
        { name: "Machine Learning", name_match: ["Machine Learning Concepts"], youtube: "https://www.youtube.com/watch?v=i_LwzRVP7bg", article: "https://developers.google.com/machine-learning/crash-course" },
        { name: "Distributed Systems", youtube: "https://www.youtube.com/watch?v=cQP8WApzI6w", article: "https://www.geeksforgeeks.org/distributed-systems-tutorials/" },
        { name: "Cloud Computing", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-cloud-computing/" },
        { name: "Information Security", name_match: ["Information Security Principles"], youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA", article: "https://www.sans.org/cyber-security-courses/introduction-cyber-security/" }
      ],
      "Semester 7": [
        { name: "Data Science & Analytics", name_match: ["Data Analysis"], youtube: "https://www.youtube.com/watch?v=ua-i_s-d-wY", article: "https://www.geeksforgeeks.org/data-science-tutorial/" },
        { name: "Deep Learning", name_match: ["Machine Learning Frameworks (TensorFlow/PyTorch)"], youtube: "https://www.youtube.com/watch?v=Jy4wM2X21u0", article: "https://pytorch.org/tutorials/" },
        { name: "Natural Language Processing (NLP)", youtube: "https://www.youtube.com/watch?v=fOvTtapxa9c", article: "https://www.geeksforgeeks.org/natural-language-processing-overview/" }
      ]
    },
    "Information Technology (IT)": {
      "Semester 1": [
        { name: "Engineering Mathematics-I", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Engineering Physics", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRh3-PJ2A_2I1-1-p2gI-5za", article: "https://www.britannica.com/science/physics-science" },
        { name: "Basic Electrical Engineering", youtube: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaL23tjw2d2-3Gk3z23-a9vS", article: "https://www.allaboutcircuits.com/textbook/" },
        { name: "Programming for Problem Solving (C)", name_match: ["C Programming"], youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" }
      ],
      "Semester 2": [
        { name: "Engineering Mathematics-II", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Data Structures", name_match: ["Data Structures and Algorithms"], youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
        { name: "Object Oriented Programming", name_match: ["Object-Oriented Programming"], youtube: "https://www.youtube.com/watch?v=bSrm9RXwBaI", article: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-for-beginners/" }
      ],
      "Semester 3": [
            { name: "Data Structures & Algorithms", youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
            { name: "Computer Organization", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgVwEit3I_pkwM2Q-", article: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" },
            { name: "Operating Systems", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", article: "https://www.geeksforgeeks.org/operating-systems/" }
        ],
        "Semester 4": [
            { name: "Database Management Systems (DBMS)", name_match: ["DBMS"], youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj_0b-M4E3U2gC-g-u4g9s-", article: "https://www.javatpoint.com/dbms-tutorial" },
            { name: "Computer Networks", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", article: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
            { name: "Software Engineering", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/software-engineering/" },
            { name: "Web Technologies", youtube: "https://www.youtube.com/watch?v=kUMe1FH4paE", article: "https://developer.mozilla.org/en-US/docs/Web" }
        ],
        "Semester 5": [
            { name: "Information Security", name_match: ["Information Security Principles"], youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA", article: "https://www.sans.org/cyber-security-courses/introduction-cyber-security/" },
            { name: "Cloud Computing", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-cloud-computing/" }
        ],
        "Semester 6": [
            { name: "Machine Learning", name_match: ["Machine Learning Concepts"], youtube: "https://www.youtube.com/watch?v=i_LwzRVP7bg", article: "https://developers.google.com/machine-learning/crash-course" },
            { name: "Data Mining & Warehousing", youtube: "https://www.youtube.com/watch?v=p2_p_4jWp_Y", article: "https://www.javatpoint.com/data-mining" },
            { name: "Mobile Application Development", youtube: "https://www.youtube.com/watch?v=0-S5a0eXPoc", article: "https://flutter.dev/docs" }
        ],
        "Semester 7": [
            { name: "Data Science & Big Data Analytics", name_match: ["Data Analysis", "Big Data Technologies"], youtube: "https://www.youtube.com/watch?v=t_a-Q6-6y-s", article: "https://www.geeksforgeeks.org/what-is-big-data/" },
            { name: "Advanced Cybersecurity", name_match: ["Network Security"], youtube: "https://www.youtube.com/watch?v=L5gZ0k5983A", article: "https://www.fortinet.com/resources/cyberglossary/what-is-network-security" }
        ],
    
    "Electronics & Communication (ECE)": {
      "Semester 1": [
        { name: "Engineering Mathematics-I", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Engineering Physics", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRh3-PJ2A_2I1-1-p2gI-5za", article: "https://www.britannica.com/science/physics-science" },
        { name: "Basic Electrical Engineering", youtube: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaL23tjw2d2-3Gk3z23-a9vS", article: "https://www.allaboutcircuits.com/textbook/" },
        { name: "Programming for Problem Solving (C)", name_match: ["C Programming"], youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" }
      ],
      "Semester 2": [
        { name: "Engineering Mathematics-II", youtube: "https://www.youtube.com/playlist?list=PL_s_El_q-yYQ-8-Wd_h_q-yY0-x7b-x_x", article: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/" },
        { name: "Data Structures", name_match: ["Data Structures and Algorithms"], youtube: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", article: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" },
        { name: "Object Oriented Programming", name_match: ["Object-Oriented Programming"], youtube: "https://www.youtube.com/watch?v=bSrm9RXwBaI", article: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-for-beginners/" }
      ],
      "Semester 3": [
            { name: "Electronic Devices & Circuits", name_match: ["Analog Electronics"], youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqg_Ld2a_h_T_y_x-", article: "https://www.electronics-tutorials.ws/" },
            { name: "Signals & Systems", youtube: "https://www.youtube.com/playlist?list=PL_uaeekrhg9I54c6Zuc32ag2a55jVb2IM", article: "https://www.tutorialspoint.com/signals_and_systems/index.htm" },
            { name: "Digital System Design", name_match: ["Digital Logic"], youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRleS4cNgdVabDrLgEhCunRO", article: "https://www.allaboutcircuits.com/textbook/digital/" }
        ],
        "Semester 4": [
            { name: "Electromagnetic Field Theory", name_match: ["Electromagnetics"], youtube: "https://www.youtube.com/playlist?list=PL-51WBLyT3_2aO2wBEZA6klV5cT43L2ab", article: "https://www.allaboutcircuits.com/textbook/alternating-current/chpt-14/introduction-to-rf/" },
            { name: "Control Systems", youtube: "https://www.youtube.com/watch?v=oBc_BHxw78s", article: "https://www.electrical4u.com/control-system/" },
            { name: "Microprocessors & Microcontrollers", name_match: ["Microprocessors"], youtube: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8HbdMwBYIMAd3UdstWChFH", article: "https://www.geeksforgeeks.org/introduction-of-microcontroller/" },
            { name: "Digital Communication", name_match: ["Communication Systems"], youtube: "https://www.youtube.com/playlist?list=PL_uaeekrhg9I54c6Zuc32ag2a55jVb2IM", article: "https://www.tutorialspoint.com/digital_communication/index.htm" }
        ],
        "Semester 5": [
            { name: "VLSI Design", youtube: "https://www.youtube.com/playlist?list=PLTEh-60_zAfHm-oE5A-9T2QoK-o7L-r7t", article: "https://www.geeksforgeeks.org/vlsi-design-flow-y-chart/" },
            { name: "Antenna & Wave Propagation", name_match: ["Antenna Design"], youtube: "https://www.youtube.com/watch?v=f2-YJ9450-c", article: "https://www.antenna-theory.com/" },
            { name: "Digital Signal Processing (DSP)", name_match: ["Digital Signal Processing (DSP) Algorithms"], youtube: "https://www.youtube.com/watch?v=sJV2CIa2S_0", article: "https://www.analog.com/en/education/education-library/dsp-book.html" }
        ],
        "Semester 6": [
            { name: "Embedded Systems", youtube: "https://www.youtube.com/watch?v=IPnTCB4Dx_s", article: "https://www.freertos.org/about-freertos.html" },
            { name: "Microwave Engineering", youtube: "https://www.youtube.com/playlist?list=PL4BEF23A32A15232F", article: "https://www.microwaves101.com/" },
            { name: "Wireless Communication", youtube: "https://www.youtube.com/watch?v=vV4gIkjGGsY", article: "https://www.geeksforgeeks.org/wireless-communication-technologies/" }
        ],
        "Semester 7": [
            { name: "Satellite Communication", youtube: "https://www.youtube.com/watch?v=Y_2qg-Y2-6U", article: "https://www.tutorialspoint.com/satellite_communication/index.htm" }
        ],
      }
  }
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
    },
    // --- IT Roles (Full List) ---
    "IT Support Specialist": { critical_skills: ["Operating Systems", "Computer Networks", "Hardware Troubleshooting", "Customer Service Skills", "ITIL Foundations"], resources: { "Operating Systems": { reason: "Proficiency in Windows, macOS, and Linux is essential for troubleshooting user issues.", youtube: "https://www.youtube.com/watch?v=26QPDBe-NB8", article: "https://www.guru99.com/operating-system-tutorial.html" }, "Computer Networks": { reason: "Understanding networking concepts to diagnose connectivity problems.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.comptia.org/content/guides/what-is-computer-networking" }, "Hardware Troubleshooting": { reason: "Diagnosing and fixing issues with desktops, laptops, and peripherals.", youtube: "https://www.youtube.com/watch?v=d_MA6g-P5iE", article: "https://www.crucial.com/articles/pc-builders/how-to-troubleshoot-a-pc" }, "Customer Service Skills": { reason: "Effectively communicating with non-technical users to solve their problems.", youtube: "https://www.youtube.com/watch?v=yv-QiS2-W8I", article: "https://www.helpscout.com/helpu/customer-service-skills/" }, "ITIL Foundations": { reason: "Understanding best practices for IT service management.", youtube: "https://www.youtube.com/watch?v=pmyGfFq2-n4", article: "https://www.axelos.com/best-practice-solutions/itil" } } },
    "Network Administrator": { critical_skills: ["Computer Networks", "Network Security", "Cisco IOS / Juniper Junos", "Operating Systems (Server)", "Scripting (Python/Bash)"], resources: { "Computer Networks": { reason: "Deep knowledge of routing, switching, and protocols like TCP/IP, BGP, OSPF.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html" }, "Network Security": { reason: "Configuring firewalls, VPNs, and intrusion detection systems.", youtube: "https://www.youtube.com/watch?v=L5gZ0k5983A", article: "https://www.fortinet.com/resources/cyberglossary/what-is-network-security" }, "Cisco IOS / Juniper Junos": { reason: "Hands-on experience with the command-line interface of major network hardware.", youtube: "https://www.youtube.com/watch?v=3q5349t_iM4", article: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/15-e/fundamentals-15-e-book.html" }, "Operating Systems (Server)": { reason: "Managing network services on Windows Server and Linux.", youtube: "https://www.youtube.com/watch?v=LEk8-B32iFk", article: "https://docs.microsoft.com/en-us/windows-server/administration/server-core/server-core-overview" }, "Scripting (Python/Bash)": { reason: "Automating network configuration and monitoring tasks.", youtube: "https://www.youtube.com/watch?v=ysDurA5f3-I", article: "https://www.learnshell.org/" } } },
    "Systems Administrator (SysAdmin)": { critical_skills: ["Operating Systems (Linux/Windows Server)", "Scripting (PowerShell/Bash)", "Virtualization (VMware/Hyper-V)", "Computer Networks", "IT Infrastructure Management"], resources: { "Operating Systems (Linux/Windows Server)": { reason: "Expertise in managing, securing, and troubleshooting server operating systems.", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", article: "https://www.redhat.com/en/topics/linux/what-is-linux" }, "Scripting (PowerShell/Bash)": { reason: "Automating system administration tasks is a core responsibility.", youtube: "https://www.youtube.com/watch?v=f27341F-gT4", article: "https://docs.microsoft.com/en-us/powershell/scripting/overview" }, "Virtualization (VMware/Hyper-V)": { reason: "Managing virtual machines and server consolidation.", youtube: "https://www.youtube.com/watch?v=x9SQLZc_28A", article: "https://www.vmware.com/topics/glossary/content/virtualization" }, "Computer Networks": { reason: "Configuring server networking and troubleshooting connectivity.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.comptia.org/content/guides/what-is-computer-networking" }, "IT Infrastructure Management": { reason: "Overseeing servers, storage, and directory services like Active Directory.", youtube: "https://www.youtube.com/watch?v=I6hTWSuC-ss", article: "https://www.redhat.com/en/topics/automation/what-is-it-infrastructure-management" } } },
    "Cloud Administrator": { critical_skills: ["Cloud Platforms (AWS/GCP/Azure)", "Operating Systems", "Computer Networks", "Identity and Access Management (IAM)", "Scripting (Python/Bash)"], resources: { "Cloud Platforms (AWS/GCP/Azure)": { reason: "Managing services, users, and costs on a major cloud platform.", youtube: "https://www.youtube.com/watch?v=k1RI58waXbA", article: "https://aws.amazon.com/what-is-aws/" }, "Operating Systems": { reason: "Administering virtual machines in the cloud.", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", article: "https://www.geeksforgeeks.org/operating-systems/" }, "Computer Networks": { reason: "Configuring cloud networking (VPCs, subnets, security groups).", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" }, "Identity and Access Management (IAM)": { reason: "Managing user permissions and ensuring secure access to cloud resources.", youtube: "https://www.youtube.com/watch?v=Y6-x2ea7v50", article: "https://aws.amazon.com/iam/" }, "Scripting (Python/Bash)": { reason: "Automating administrative tasks in the cloud.", youtube: "https://www.youtube.com/watch?v=ysDurA5f3-I", article: "https://www.learnshell.org/" } } },
    "Security Administrator": { critical_skills: ["Information Security", "Firewall & IDS/IPS Management", "Vulnerability Assessment", "SIEM Tools", "Computer Networks"], resources: { "Information Security": { reason: "Core principles of confidentiality, integrity, and availability.", youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA", article: "https://www.comptia.org/content/guides/what-is-information-security" }, "Firewall & IDS/IPS Management": { reason: "Configuring and managing network security appliances.", youtube: "https://www.youtube.com/watch?v=32gqg-32-8g", article: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall" }, "Vulnerability Assessment": { reason: "Using tools like Nessus or OpenVAS to scan for weaknesses.", youtube: "https://www.youtube.com/watch?v=H8N7_NSo3-Y", article: "https://www.rapid7.com/fundamentals/vulnerability-assessment/" }, "SIEM Tools": { reason: "Analyzing security logs with tools like Splunk or Elastic Stack.", youtube: "https://www.youtube.com/watch?v=U-tETcu_y3o", article: "https://www.splunk.com/en_us/data-insider/what-is-siem.html" }, "Computer Networks": { reason: "A deep understanding of networking is required to secure it.", youtube: "https://www.youtube.com/watch?v=0Acik_pde_I", article: "https://www.geeksforgeeks.org/computer-network-tutorials/" } } },
    "IT Manager": { critical_skills: ["Project Management", "IT Infrastructure Management", "Budgeting and Financial Management", "Vendor Management", "Leadership and Communication"], resources: { "Project Management": { reason: "Leading IT projects from initiation to completion using methodologies like Agile.", youtube: "https://www.youtube.com/watch?v=z4_22_aI3yA", article: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }, "IT Infrastructure Management": { reason: "Overseeing the entire technology infrastructure of an organization.", youtube: "https://www.youtube.com/watch?v=I6hTWSuC-ss", article: "https://www.redhat.com/en/topics/automation/what-is-it-infrastructure-management" }, "Budgeting and Financial Management": { reason: "Planning and managing the IT department's budget.", youtube: "https://www.youtube.com/watch?v=sF4-S_J8I4M", article: "https://www.cio.com/article/238538/it-budgeting-a-beginner-s-guide.html" }, "Vendor Management": { reason: "Negotiating with and managing relationships with technology vendors.", youtube: "https://www.youtube.com/watch?v=uWQQa-m2a-A", article: "https://www.gartner.com/en/information-technology/glossary/vendor-management" }, "Leadership and Communication": { reason: "Leading a team of IT professionals and communicating with business stakeholders.", youtube: "https://www.youtube.com/watch?v=vk-t1k1cr3U", article: "https://www.forbes.com/sites/forbescoachescouncil/2021/01/15/14-essential-leadership-skills-for-the-modern-workplace/" } } },
    "Chief Information Officer (CIO)": { critical_skills: ["IT Strategy", "Business Acumen", "Financial Management", "IT Governance & Risk Management", "Leadership"], resources: { "IT Strategy": { reason: "Aligning technology strategy with overall business goals.", youtube: "https://www.youtube.com/watch?v=uS6V0_sO_T4", article: "https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-cio-agenda-for-the-next-12-months" }, "Business Acumen": { reason: "Deep understanding of business operations, finance, and marketing.", youtube: "https://www.youtube.com/watch?v=d_i-g8g-y4s", article: "https://hbr.org/2018/07/what-is-business-acumen" }, "Financial Management": { reason: "Managing large IT budgets, ROI analysis, and cost optimization.", youtube: "https://www.youtube.com/watch?v=sF4-S_J8I4M", article: "https://www.cio.com/article/238538/it-budgeting-a-beginner-s-guide.html" }, "IT Governance & Risk Management": { reason: "Establishing policies and frameworks for IT compliance and security.", youtube: "https://www.youtube.com/watch?v=A-UJ2-9a7_c", article: "https://www.isaca.org/resources/cobit" }, "Leadership": { reason: "Leading large, diverse technology teams and influencing executive peers.", youtube: "https://www.youtube.com/watch?v=p_P-f_t7Ajs", article: "https://www.kornferry.com/insights/this-week-in-leadership/the-5-marks-of-a-great-cio" } } },

    // --- ECE Roles (Full List) ---
    "Hardware Engineer": { critical_skills: ["Digital Logic", "Analog Electronics", "PCB Design", "Microprocessors", "VHDL/Verilog"], resources: { "Digital Logic": { reason: "The foundation for designing all digital circuits and systems.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRleS4cNgdVabDrLgEhCunRO", article: "https://www.allaboutcircuits.com/textbook/digital/" }, "Analog Electronics": { reason: "Essential for designing circuits that interface with the real world.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqg_Ld2a_h_T_y_x-", article: "https://www.electronics-tutorials.ws/amplifier/amp_1.html" }, "PCB Design": { reason: "The practical skill of laying out components on a printed circuit board using tools like Altium or KiCad.", youtube: "https://www.youtube.com/watch?v=va_29-L7mP8", article: "https://www.pcbway.com/blog/PCB_Design_Tutorial/Chapter_1_What_is_PCB_Design_Tutorial_.html" }, "Microprocessors": { reason: "Understanding computer architecture to design systems around CPUs.", youtube: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8HbdMwBYIMAd3UdstWChFH", article: "https://www.geeksforgeeks.org/introduction-of-microprocessor/" }, "VHDL/Verilog": { reason: "Hardware description languages used to design and model digital systems for FPGAs and ASICs.", youtube: "https://www.youtube.com/watch?v=OniN_4zI2YA", article: "https://www.allaboutcircuits.com/technical-articles/what-is-vhdl-an-introduction-to-hdl-for-digital-design/" } } },
    "Embedded Systems Engineer": { critical_skills: ["C Programming", "Microprocessors", "Operating Systems (RTOS)", "Communication Systems", "Digital Logic"], resources: { "C Programming": { reason: "The most widely used language for low-level hardware programming.", youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" }, "Microprocessors": { reason: "Deep understanding of microcontroller architecture (e.g., ARM, AVR).", youtube: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8HbdMwBYIMAd3UdstWChFH", article: "https://www.geeksforgeeks.org/introduction-of-microcontroller/" }, "Operating Systems (RTOS)": { reason: "Experience with Real-Time Operating Systems like FreeRTOS is crucial for many applications.", youtube: "https://www.youtube.com/watch?v=IPnTCB4Dx_s", article: "https://www.freertos.org/about-freertos.html" }, "Communication Systems": { reason: "Implementing protocols like I2C, SPI, UART, and TCP/IP.", youtube: "https://www.youtube.com/watch?v=V-gG3h_wA4Q", article: "https://www.circuitbasics.com/basics-of-the-i2c-communication-protocol/" }, "Digital Logic": { reason: "Fundamental for understanding how hardware works at the circuit level.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRleS4cNgdVabDrLgEhCunRO", article: "https://www.allaboutcircuits.com/textbook/digital/" } } },
    "RF (Radio Frequency) Engineer": { critical_skills: ["Communication Systems", "Analog Electronics", "Electromagnetics", "RF Simulation Software (e.g., HFSS)", "Antenna Design"], resources: { "Communication Systems": { reason: "Understanding modulation, demodulation, and signal propagation.", youtube: "https://www.youtube.com/playlist?list=PL_uaeekrhg9I54c6Zuc32ag2a55jVb2IM", article: "https://www.tutorialspoint.com/analog_communication/analog_communication_quick_guide.htm" }, "Analog Electronics": { reason: "Designing amplifiers, filters, and mixers for high-frequency signals.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqg_Ld2a_h_T_y_x-", article: "https://www.electronics-tutorials.ws/" }, "Electromagnetics": { reason: "The physics behind how radio waves travel and interact with components.", youtube: "https://www.youtube.com/playlist?list=PL-51WBLyT3_2aO2wBEZA6klV5cT43L2ab", article: "https://www.allaboutcircuits.com/textbook/alternating-current/chpt-14/introduction-to-rf/" }, "RF Simulation Software (e.g., HFSS)": { reason: "Using tools to model and simulate the behavior of RF circuits and antennas.", youtube: "https://www.youtube.com/watch?v=J3LPUf20fpM", article: "https://www.ansys.com/products/electronics/ansys-hfss" }, "Antenna Design": { reason: "The principles of designing antennas for specific frequencies and applications.", youtube: "https://www.youtube.com/watch?v=f2-YJ9450-c", article: "https://www.antenna-theory.com/" } } },
    "VLSI Design Engineer": { critical_skills: ["VLSI Design", "Digital Logic", "VHDL/Verilog", "Semiconductor Physics", "Scripting (Perl/Tcl)"], resources: { "VLSI Design": { reason: "Understanding the entire chip design flow, from specification to layout.", youtube: "https://www.youtube.com/playlist?list=PLTEh-60_zAfHm-oE5A-9T2QoK-o7L-r7t", article: "https://www.geeksforgeeks.org/vlsi-design-flow-y-chart/" }, "Digital Logic": { reason: "The absolute foundation for designing complex integrated circuits.", youtube: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRleS4cNgdVabDrLgEhCunRO", article: "https://www.allaboutcircuits.com/textbook/digital/" }, "VHDL/Verilog": { reason: "Hardware description languages used to specify the behavior of the chip.", youtube: "https://www.youtube.com/watch?v=OniN_4zI2YA", article: "https://www.chipverify.com/verilog/verilog-tutorial" }, "Semiconductor Physics": { reason: "Understanding how transistors work at a physical level.", youtube: "https://www.youtube.com/watch?v=KzC0m_soh_s", article: "https://www.electronics-tutorials.ws/diode/diode_1.html" }, "Scripting (Perl/Tcl)": { reason: "Automating design and verification tasks using scripting languages.", youtube: "https://www.youtube.com/watch?v=SBlzP3cf82A", article: "https://www.tcl.tk/about/language.html" } } },
    "Control Systems Engineer": { critical_skills: ["Control Systems", "MATLAB/Simulink", "PLC Programming", "Instrumentation", "C Programming"], resources: { "Control Systems": { reason: "Deep understanding of control theory, feedback loops, and stability analysis.", youtube: "https://www.youtube.com/watch?v=oBc_BHxw78s", article: "https://www.electrical4u.com/control-system/" }, "MATLAB/Simulink": { reason: "The industry standard for modeling, simulating, and analyzing control systems.", youtube: "https://www.youtube.com/watch?v=tQ-4Wc_L-0g", article: "https://www.mathworks.com/products/simulink.html" }, "PLC Programming": { reason: "Programming Programmable Logic Controllers for industrial automation.", youtube: "https://www.youtube.com/watch?v=l380s_f_EMA", article: "https://www.automationdirect.com/learning-center/what-is-a-plc" }, "Instrumentation": { reason: "Understanding sensors and actuators to interface with physical processes.", youtube: "https://www.youtube.com/watch?v=fANyq_F03cQ", article: "https://www.realpars.com/instrumentation/" }, "C Programming": { reason: "Often used for programming microcontrollers in control applications.", youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" } } },
    "Signal Processing Engineer (DSP)": { critical_skills: ["Signals and Systems", "Digital Signal Processing (DSP) Algorithms", "MATLAB", "C Programming", "Mathematics for Computing"], resources: { "Signals and Systems": { reason: "The theoretical foundation for understanding and manipulating signals.", youtube: "https://www.youtube.com/playlist?list=PL_uaeekrhg9I54c6Zuc32ag2a55jVb2IM", article: "https://www.tutorialspoint.com/signals_and_systems/index.htm" }, "Digital Signal Processing (DSP) Algorithms": { reason: "Knowledge of FFT, filters (FIR, IIR), and other core DSP algorithms.", youtube: "https://www.youtube.com/watch?v=sJV2CIa2S_0", article: "https://www.analog.com/en/education/education-library/dsp-book.html" }, "MATLAB": { reason: "A key tool for DSP algorithm development, simulation, and analysis.", youtube: "https://www.youtube.com/watch?v=T_ekAD7U-wU", article: "https://www.mathworks.com/solutions/signal-processing.html" }, "C Programming": { reason: "Implementing DSP algorithms efficiently on embedded processors.", youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0", article: "https://www.learn-c.org/" }, "Mathematics for Computing": { reason: "Strong skills in Fourier analysis, linear algebra, and complex numbers are essential.", youtube: "https://www.youtube.com/watch?v=spUNpyF58BY", article: "https://mathworld.wolfram.com/FourierTransform.html" } } },
    "Power Engineer": { critical_skills: ["Power Systems Analysis", "Electrical Machines", "Control Systems", "Power Electronics", "MATLAB/Simulink"], resources: { "Power Systems Analysis": { reason: "Analyzing power flow, fault currents, and stability in electrical grids.", youtube: "https://www.youtube.com/watch?v=522KVLdi-x4", article: "https://www.electrical4u.com/power-system-analysis/" }, "Electrical Machines": { reason: "Understanding the principles of generators, motors, and transformers.", youtube: "https://www.youtube.com/watch?v=Asnj_Vd8_s0", article: "https://www.tutorialspoint.com/electrical_machines/index.htm" }, "Control Systems": { reason: "Designing control systems for power generation and grid stability.", youtube: "https://www.youtube.com/watch?v=oBc_BHxw78s", article: "https://www.electrical4u.com/control-system/" }, "Power Electronics": { reason: "Designing converters and inverters for power conversion.", youtube: "https://www.youtube.com/watch?v=rjoLzY2k-xU", article: "https://www.allaboutcircuits.com/technical-articles/introduction-to-power-electronics/" }, "MATLAB/Simulink": { reason: "Simulating and modeling power systems and control algorithms.", youtube: "https://www.youtube.com/watch?v=tQ-4Wc_L-0g", article: "https://www.mathworks.com/solutions/power-electronics-control.html" } } },
    // Add other roles here following the same structure...
  }
};

// --- API Endpoint ---
app.post('/api/analyze', (req, res) => {
  const { branch, targetRole } = req.body;
  if (!branch || !targetRole) { return res.status(400).json({ error: 'Branch and Target Role are required.' }); }

  const semesterWiseCurriculum = knowledgeBase.generalizedCurriculums[branch];
  const roleInfo = knowledgeBase.jobRoles[targetRole];

  if (!semesterWiseCurriculum || !roleInfo) { return res.status(404).json({ error: 'Selected branch or role not found in our knowledge base.' }); }
  if (typeof semesterWiseCurriculum !== 'object' || Array.isArray(semesterWiseCurriculum)) {
      return res.status(404).json({ error: 'Semester-wise curriculum not available for the selected branch.' });
  }

  const criticalSkills = new Set(roleInfo.critical_skills);
  const resources = roleInfo.resources;

  const coreFocusBySemester = {};
  const allCurriculumSubjects = new Set();

  Object.keys(semesterWiseCurriculum).forEach(semester => {
    const subjectsInSemester = semesterWiseCurriculum[semester];
    const relevantSubjects = [];

    subjectsInSemester.forEach(subject => {
        allCurriculumSubjects.add(subject.name);
        if (subject.name_match) {
            subject.name_match.forEach(alias => allCurriculumSubjects.add(alias));
        }

        const isMatch = criticalSkills.has(subject.name) || (subject.name_match && subject.name_match.some(alias => criticalSkills.has(alias)));
        
        if (isMatch) {
            relevantSubjects.push({
                name: subject.name,
                youtube: subject.youtube,
                article: subject.article
            });
        }
    });

    if (relevantSubjects.length > 0) {
        coreFocusBySemester[semester] = relevantSubjects;
    }
  });

  const missingSkills = roleInfo.critical_skills.filter(skill => !allCurriculumSubjects.has(skill));
  
  const personalizedRoadmap = roleInfo.critical_skills.map(skill => ({
    name: skill,
    youtube: resources[skill]?.youtube || '#',
    article: resources[skill]?.article || '#'
  }));

  res.json({
    coreFocusBySemester: coreFocusBySemester,
    criticalMissingSkills: missingSkills,
    personalizedRoadmap: personalizedRoadmap,
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
