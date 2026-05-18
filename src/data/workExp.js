import unionLogo from './1280px-Union_pacific_railroad_logo.svg.png';
import ksuLogo from './Kennesaw_State_Owls_logo.svg.png';
import unionPictureOne from '../../union pacific folder/IMG_0793.png';
import unionPictureTwo from '../../union pacific folder/IMG_1213.png';
import unionPictureThree from '../../union pacific folder/IMG_1300.png';
import unionPictureFour from '../../union pacific folder/IMG_2348.png';
import unionPictureFive from '../../union pacific folder/IMG_3402.png';
import unionPictureSix from '../../union pacific folder/IMG_3991.jpg';
import unionPictureSeven from '../../union pacific folder/IMG_7696.png';

const workEx = [
  {
    company: "Union Pacific Railroad",
    date: "May 2025 - May 2026",
    linkKey: "union",
    buttonLabel: "Pictures",
    image: unionLogo,
    imageAlt: "Union Pacific Railroad logo",
    pictures: [
      {
        src: unionPictureOne,
        alt: "Union Pacific internship picture 1",
        description: "Union Pacific internship picture 1.",
      },
      {
        src: unionPictureTwo,
        alt: "Union Pacific internship picture 2",
        description: "Union Pacific internship picture 2.",
      },
      {
        src: unionPictureThree,
        alt: "Union Pacific internship picture 3",
        description: "Union Pacific internship picture 3.",
      },
      {
        src: unionPictureFour,
        alt: "Union Pacific internship picture 4",
        description: "Union Pacific internship picture 4.",
      },
      {
        src: unionPictureFive,
        alt: "Union Pacific internship picture 5",
        description: "Union Pacific internship picture 5.",
      },
      {
        src: unionPictureSix,
        alt: "Union Pacific internship picture 6",
        description: "Union Pacific internship picture 6.",
      },
      {
        src: unionPictureSeven,
        alt: "Union Pacific internship picture 7",
        description: "Union Pacific internship picture 7.",
      },
    ],
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
