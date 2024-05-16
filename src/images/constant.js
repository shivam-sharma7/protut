import logo from "./1.png";
import profile from "./1.png";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import javascript from "./javascript.svg";
import typescript from "./typescript.svg";
import react from "./react.svg";
import nodejs from "./node-js.svg";
import postgresql from "./postgresql.svg";
import express from "./express-js.svg";
import git from './git.svg'
import docker from './docker.svg'


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
  {
    src: github,
    alt: "github logo",
    href: "https://github.com/shivam-sharma7"
  },
];

export const skills = [
   {
    src: javascript,
    alt: "javascript logo",
   },
    {
      src: typescript,
      alt: "typescript logo",
    },
    {
      src: react,
      alt: "react logo",
    },
    {
      src: nodejs,
      alt: "nodejs logo",
    },
    {
      src: express,
      alt: "express logo",
    },
    {
      src: git,
      alt: "git logo",
    },
    {
      src: postgresql,
      alt: "postgresql logo",
    },
    {
      src: docker,
      alt: "docker logo",
    },
     
];

 
export { logo, profile, footerLinks,  };
