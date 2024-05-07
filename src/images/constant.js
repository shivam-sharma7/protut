import logo from "./1.png";
import profile from "./1.png";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "1", link: "/" },
      { name: "2", link: "/" },
      { name: "3", link: "/" },
      { name: "4", link: "/" },
      { name: "5", link: "/" },
      { name: "6", link: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "1", link: "/" },
      { name: "2", link: "/" },
      { name: "3", link: "/" },
      { name: "4", link: "/" },
      { name: "5", link: "/" },
      { name: "6", link: "/" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "1", link: "/" },
      { name: "2", link: "/" },
      { name: "3", link: "/" },
      { name: "4", link: "/" },
      
    ],
  },

];

export const socialMedia = [
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/shivamstwt1",
  },
  {
    src: linkedin,
    alt: "linkedin logo",
    href: "https://linkedin.com/in/meshivamsharma",
  },
];

export { logo, profile, footerLinks };
