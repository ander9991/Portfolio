import project1 from "../assets/projects/stock.jpeg";
import project2 from "../assets/projects/PriceHub.jpg";
import project3 from "../assets/projects/roomio.png";
import project4 from "../assets/projects/project-4.jpg";

export const PROFILE_CONTENT = `I am a passionate back end developer and a Masters student at NYU, studying Computer Science with a concentration in Machine Learning and Data Science. With a few years of hands-on experience, I have honed my skills in developing Python scripts to manipulate data, and automate workflow tasks. Currently, I am a Junior DevOps Engineer at CUNY, where I am learning to create custom Chocolatey packages and utilizing my Python skills to automate workflows. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "My journey in Computer Science began in high school, where I took a college level programming course and have built my first PC. This is where my deep curiosity for how things work began and the enjoyment of solving complex problems by connecting 'puzzle pieces' together. It is from one of my undergraduate advisor and professor where he introduced me to Machine Learning and quickly sparked my interest in this field. The idea of using technology to determine untrivial relationships between several data points, as well as leveraging Machine Learning to make predictions based on old data. Suddenly, Machine Learning opened the world to many more opportunities, such as developing medicine to diseases we have deemed to be incurable, and even self driving vehicles. Outside of Computer Science, I am also a professional table tennis player and coach in the United states with a USATT rating of 2360, making me top 10 in New York State, and top 86 in the United States. It is through table tennis where I have met amazing and powerful people, such as Tim Cook himself, and have allowed me to connect with people from around the world!";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Junior DevSecOps Engineer",
    company: "The City University of New York",
    description: `• Automated Report Generation: Streamlined the creation of student and faculty reports by integrating Oracle Identity Management with a local database, enhancing data accessibility and accuracy.
                  • License Management: Collaborated with a team of six to identify and deactivate licenses for inactive accounts, resulting in annual savings exceeding $100,000.
                  • Cost Analysis: Conducted thorough reviews of university agreements and partnerships, leading to cost-effective subscription choices that reduced annual spending by over $500,000.
                  • Custom Software Development: Developed bespoke Chocolatey packages with tailored configurations for CUNY’s internal server use, utilizing Python and integrating with MySQL databases to improve software deployment efficiency.`,
    technologies: ["Python", "MySQL", "Chocolatey", "MS Teams"],
  },
  {
    year: "2021 - Present",
    role: "Table Tennis Coach",
    company: "PingPod",
    description: `• Market table tennis equipment and services related to learning table tennis.
                  • Work directly with students to understand their needs and reach their desired goal.
                • Promote PingPod and the sport of table tennis by running events in corporate spaces.
                • Delegated to operate a 6-week summer camp for kids aging 10-14.`,
    technologies: [""],
  },
  {
    year: "2016 - 2019",
    role: "Information Technology Assistant",
    company: "NYC Department of Youth & Community Development",
    description: `• Modernization Project Leadership: Led a comprehensive project to upgrade and update all computer systems within the facility, significantly enhancing operational efficiency.
                  • Inventory Management: Systematically itemized the entire inventory of electronics into a local database (MySQL), utilizing Python scripts to execute queries and generate insightful and actionable reports.
                  • Website Optimization: Worked with a team of three to update and optimize the organization’s website using WordPress and Bootstrap, improving user experience and functionality.`,
    technologies: ["Python", "MySQL", "ReactJS", "WordPress"],
  },
];

export const PROJECTS = [
  {
    title: "Stock Closing Price Predictor",
    image: project1,
    description:
      "A fully functional stock closing price predictor using machine learning and real world financial data obtained from the yFinance library.",
    technologies: ["Python", "TensorFlow", "Sci-Kit Learn", "MatPlotLib", "SeaBorn", "Jupyter"],
    link: "https://github.com/ander9991/CS-GY-6923-Machine-Learning/tree/main/Project"
  },
  {
    title: "PriceHub Android Application",
    image: project2,
    description:
      "An android application designed to find the cheapest price of any product, queried from multiple APIs. This was aimed to be an accessible version of the Honey extension.",
    technologies: ["Flutter", "Dart", "RapidAPI", "Google Firebase"],
    link: "https://github.com/ander9991/PriceHub"
  },
  {
    title: "Roomio Database Web Application",
    image: project3,
    description:
      "A web application that helps customers research apartments and make reservations.",
    technologies: ["Python", "Django", "MySQL", "CSS", "HTML"],
    link: "https://github.com/ashleysi/db_project"
  },
  {
    title: "Bike Rental Prediction",
    image: project4,
    description:
      "Designed a Poisson distribution model to predict public bike rentals per day for Seoul, South Korea.",
    technologies: ["Python", "PyMC", "Numpy", "Pandas", "Arviz", "Seaborn", "Jupyter"],
    link: "https://github.com/ander9991/CS-GY-6053-Data-Science"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
