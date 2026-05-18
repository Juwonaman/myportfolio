import unionLogo from './1280px-Union_pacific_railroad_logo.svg.png';
import ksuLogo from './Kennesaw_State_Owls_logo.svg.png';

const workEx = [
  {
    company: "Union Pacific Railroad",
    date: "May 2025 - May 2026",
    linkKey: "union",
    buttonLabel: "Pictures",
    image: unionLogo,
    imageAlt: "Union Pacific Railroad logo",
    pictures: [],
    duties: ["Angular", "Java", "Spring Boot", "Jira", "Figma", "OracleDB"],
    positions: [
      {
        role: "Software Engineering Intern",
        location: "Omaha, NE",
        date: "May 2025 - August 2025",
      },
      {
        role: "Software Engineering Intern, Part Time",
        location: "Remote",
        date: "August 2025 - May 2026",
      },
    ],
  },
  {
    company: "Kennesaw State University",
    role: "Undergraduate Research Assistant",
    date: "January 2025 - May 2025",
    location: "Kennesaw GA",
    linkKey: "symposium",
    buttonLabel: "Research Poster",
    image: ksuLogo,
    imageAlt: "Kennesaw State University logo",
    duties: ["Python", "Machine Learning", "Data Analysis", "Data Preprocessing"],
  },
];

export default workEx;
