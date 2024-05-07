"use client";
import { Navbar,  Dropdown } from "keep-react";
import { logo } from "../images/constant.js";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                width="40"
                height="40"
                className="rounded-full items-center font-serif "
              />
              <span className="ml-2 text-[18px]">Shivam Sharma</span>
            </div>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-center gap-8 "
          >
            <Navbar.Link className="hover:underline font-size: 1rem" linkName="Home" href="/" />
            <Navbar.Link className="hover:underline" linkName="Blog's" href="https://shivam-sharma.hashnode.dev/"  />
            <Dropdown
              action="Projects"
              actionClassName="border-none hover:underline text-[14px]  text-metal-500"
            >
              <Dropdown.List>
                <Dropdown.Item href="https://hotel-booking-app-rnfq.onrender.com/">Hotel Booking Service</Dropdown.Item>
                <Dropdown.Item href="https://tiddly-url.onrender.com/">Tiddly URL</Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" href="/" />
            <Navbar.Link linkName="Blog's"  href="https://shivam-sharma.hashnode.dev/" />
            </Navbar.Container>
          </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar.Container>
    </Navbar>
  );
};
