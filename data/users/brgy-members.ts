//Change the name section for any updates

type CommitteeMember = {
  id: number;
  name: string[]; // Array of names
  position: string;
  committees: string[];
  img: string[],
  role: string;
};

export const committeeMembers: CommitteeMember[] = [
  //Punong Barangay
  {
    id: 1,
    name: ["Richard V. Peralta"],
    position: "Punong Barangay",
    role: "",
    img: ["/male.jpg"],
    committees: ["Education and Culture", "Social Services", "Women & Family"],
  },

  //Kagawad Members
  {
    id: 2,
    name: ["Ma Meldy Antes-Tiamzon", "Edgardo P Cleofas"],
    position: "Kagawad",
    role: "",
    img: ["/female3.jpg", "/male.jpg"],
    committees: ["Livelihood"],
  },

  //Committee Members
  {
    id: 4,
    name: ["Dexter Croox"],
    position: "",
    img: ["/male.jpg"],
    role: "Committee",
    committees: [
      "Peace and Order",
      "Barangay Disaster Risk Reduction Management",
    ],
  },
  {
    id: 5,
    name: ["Virgilio M. Jara "],
    position: "",
    img: ["/male.jpg"],
    role: "Committee",
    committees: ["Public Works & Infrastructure"],
  },
  {
    id: 6,
    name: ["Bugz Manego Cabagyo"],
    position: "",
    img: ["/male.jpg"],
    role: "Committee",
    committees: ["Budget, Finance & Appropriation"],
  },
  {
    id: 7,
    name: ["Angelita S. De Vera"],
    position: "",
    img: ["/female3.jpg"],
    role: "Committee",
    committees: ["Ways & Means"],
  },
  {
    id: 8,
    name: ["Joven S. Gaspar"],
    position: "",
    img: ["/male.jpg"],
    role: "Committee",
    committees: ["Clean & Green", "Rules & Ethics"],
  },
  {
    id: 9,
    name: ["Kimberly S. Estrada"],
    position: "SK/Chairman",
    img: ["/female3.jpg"],
    role: "Committee",
    committees: ["Youth & Sports Development"],
  },

  //Barangay Secretary
  {
    id: 10,
    name: ["Ruth Majal C. Orfano"],
    position: "Barangay Secretary",
    img: ["/female3.jpg"],
    role: "Committee",
    committees: [""],
  },

  //Barangay Treasurer
  {
    id: 11,
    name: ["Beatriz C. Dulay"],
    position: "Barangay Treasurer",
    img: ["/female3.jpg"],
    role: "Committee",
    committees: [""],
  },
];

