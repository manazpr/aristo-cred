import styled from "@emotion/styled";
import React from "react";
import Router from "next/router";
import useSWR, {mutate, trigger} from "swr";
import { Button } from "../buttons/SynthButtonTop.style"
import CustomLink from "./CustomLink";
import Maybe from "./Maybe";
import checkLogin from "lib/utils/checkLogin";
import storage from "lib/utils/storage";

const NavbarContainer = styled("nav")`
  position: relative;
  background: rgba(33, 36, 38, 1);

  padding: 0.5rem 1rem;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  @media (min-width: 544px) {
    border-radius: 0.25rem;
  }
`;

const NavbarPresenter = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  background: rgba(33, 36, 38, 1);

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Logo = styled(CustomLink)`
  float: left;
  font-face: Gilroy-Bold;
  font-size: 1.5rem;
  margin-right: 2rem ;
  padding-top: 0 ;
  padding-bottom: 0.25rem;
  color: rgba(249, 211, 180, 0.55);
  
`;

const NavbarList = styled("ul")`
  float: right !important;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

const NavbarItem = styled("li")`
  float: left;

  & + & {
    margin-left: 1rem;
  }
`;

const Navbar = () => {
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

   const handleLogout = async (e) => {
    e.preventDefault();
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("profile");
    mutate("user", null);
    mutate("profile", null);
    mutate("token", null);
    Router.push(`/user/login`).then(() => trigger("user"));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    Router.push(`/user/login`).then(() => trigger("user"));
  };



  return (
    <NavbarContainer>
      <NavbarPresenter>
        <Logo href="/" as="/">
          ARISTOCRED
        </Logo>
        <NavbarList>
          <Maybe test={isLoggedIn}>

            <NavbarItem>
              <Button onClick={handleLogout}>
                Logout</Button>
            </NavbarItem>
          </Maybe>
          <Maybe test={!isLoggedIn}>
            <NavbarItem>
            
            <Button onClick={handleLogin}>
                Sign in CRED
                </Button> 
            
            </NavbarItem>
           
          </Maybe>
        </NavbarList>
      </NavbarPresenter>
    </NavbarContainer>
  );
};

export default Navbar;
