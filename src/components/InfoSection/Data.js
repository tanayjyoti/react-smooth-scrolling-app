export const Data = [
  {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headline: "Unlimited Transactions with zero fees",
    description:
      "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees",
    buttonLabel: "Get Started",
    to: "signup",
    imgStart: false,
    img: require("../../images/svg-5.svg"),
    alt: "Piggy Bank",
    dark: true,
    dark2: true,
    primary: true,
    darkText: false,
  },
  {
    id: "discover",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headline: "Login to your account at any time",
    description:
      "We have you covered no matter where you are located, All you need is an internet connection and a phone or computer",
    buttonLabel: "Learn More",
    to: "top",
    imgStart: true,
    img: require("../../images/svg-1.svg"),
    alt: "Wallet",
    dark: false,
    dark2: true,
    primary: false,
    darkText: true,
  },
  {
    id: "services",
    services: [
      {
        id: "service1",
        icon: require("../../images/svg-2.svg"),
        alt: "Reduce",
        title: "Reduce Expenses",
        desc: "We help reduce your fees and increase your overall revenue",
      },
      {
        id: "service2",
        icon: require("../../images/svg-3.svg"),
        alt: "Virtual",
        title: "Virtual Offices",
        desc: "You can access our platform online anywhere in the world",
      },
      {
        id: "service3",
        icon: require("../../images/svg-4.svg"),
        alt: "Premium",
        title: "Premium Benefits",
        desc: "Unlock our special membership card that return 5% cashback",
      },
    ],
  },
  {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Join our team",
    headline: "Creating an account is extreamly easy",
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go..",
    buttonLabel: "Start Now",
    to: "signup",
    imgStart: false,
    img: require("../../images/svg-6.svg"),
    alt: "document",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true,
  },
];