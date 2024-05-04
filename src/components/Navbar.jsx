"use client";
import { Navbar, Button, Dropdown } from "keep-react";
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
                className="rounded-full items-center "
              />
              <span className="ml-2">Protut</span>
            </div>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="About" />
            <Dropdown
              action="Products"
              actionClassName="border-none text-[14px] text-metal-500"
            >
              <Dropdown.List>
                <Dropdown.Item>Product 1</Dropdown.Item>
                <Dropdown.Item>Product 2</Dropdown.Item>
                <Dropdown.Item>Product 3</Dropdown.Item>
                <Dropdown.Item>Product 4</Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="About" />
            </Navbar.Container>
          </Navbar.Collapse>

        <Navbar.Container className="flex gap-2">
          <Button size="sm">Login</Button>
          <Button size="sm">Sign Up</Button> 
        </Navbar.Container>
        <Navbar.Toggle />
      </Navbar.Container>
    </Navbar>
  );
};
