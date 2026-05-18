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
    pictures: [
      {
        src: "/pictures/IMG_0793.jpg",
        alt: "Union Pacific internship picture 1",
        description: "the company sponsored our tickets to the college world series!",
      },
      {
        src: "/pictures/IMG_1213.jpg",
        alt: "Union Pacific internship picture 2",
        description: "cool sharks and fishes I saw at the Omaha's Henry Doorly Zoo and Aquarium.",
      },
      {
        src: "/pictures/IMG_1300.jpg",
        alt: "Union Pacific internship picture 3",
        description: "seeing my favorite animal at the Omaha's Henry Doorly Zoo and Aquarium",
      },
      {
        src: "/pictures/IMG_2348.jpg",
        alt: "Union Pacific internship picture 4",
        description: "random picture from my phone lol",
      },
      {
        src: "/pictures/IMG_3402.jpg",
        alt: "Union Pacific internship picture 5",
        description: "last outing before the interns departed :(",
      },
      {
        src: "/pictures/IMG_3991.jpg",
        alt: "Union Pacific internship picture 6",
        description: "practicing our presentation for the VIPs :)",
      },
      {
        src: "/pictures/IMG_7696.jpg",
        alt: "Union Pacific internship picture 7",
        description: "random picture with my twin Yami!",
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
