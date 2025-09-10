const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/archives",
    title: "Archives",
  },
  {
    path: "/about-us",
    title: "About Us",
  },
  {
    path: "/sports",
    title: "Sports",
  },
  {
    path: "/team",
    title: "Our Team",
  },
];

const cocktailLists = [
  {
    name: "Cricket",
    country: "Cricket Ground",
    detail: "BKBIET",
    price: "₹52,000",
  },
  {
    name: "BasketBall",
    country: "BasketBall Court",
    detail: "BKBIET",
    price: "₹42,000",
  },
  {
    name: "Volleyball",
    country: "Volleyball Court",
    detail: "BKBIET",
    price: "₹42,000",
  },
  {
    name: "Football",
    country: "Football Ground",
    detail: "BITS Pilani",
    price: "₹42,000",
  },
  {
    name: "Kabaddi",
    country: "Kabaddi Court",
    detail: "BKBIET",
    price: "₹16,000",
  },
  {
    name: "Badminton",
    country: "Sports Complex",
    detail: "BKBIET",
    price: "₹7,000",
  },
];

const mockTailLists = [
  {
    name: "BasketBall",
    country: "BasketBall Court",
    detail: "BKBIET",
    price: "₹21,000",
  },
  {
    name: "Volleyball",
    country: "Volleyball Court",
    detail: "BKBIET",
    price: "₹16,000",
  },
  {
    name: "Futsal",
    country: "Ground",
    detail: "BKBIET",
    price: "₹12,000",
  },
  {
    name: "Kabaddi",
    country: "Kabaddi Court",
    detail: "BKBIET",
    price: "₹8,000",
  },
  {
    name: "Badminton",
    country: "Sports Complex",
    detail: "BKBIET",
    price: "₹6,000",
  }
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "BasketBall",
    image: "/images/1.jpg",
    title: "Basketball: Fast-Paced Action",
    description:
      "Dribble, shoot, and score! Join the basketball tournament and showcase your skills on the court. Teamwork and strategy lead to victory at QUASAR.",
  },
  {
    id: 2,
    name: "Football",
    image: "/images/2.jpg",
    title: "Football: The Beautiful Game",
    description:
      "Compete in the football league and experience the thrill of the game. Precision passes, powerful shots, and teamwork define this event at QUASAR.",
  },
  {
    id: 3,
    name: "Kabaddi",
    image: "/images/3.jpg",
    title: "Kabaddi: Strength & Strategy",
    description:
      "Enter the kabaddi arena and test your strength, agility, and tactics. Traditional sport meets fierce competition at QUASAR.",
  },
  {
    id: 4,
    name: "Volleyball",
    image: "/images/5.jpg",
    title: "Volleyball: Spike to Win",
    description:
      "Serve, block, and spike your way to the top in the volleyball showdown. Join the action and aim for glory at QUASAR.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
