import { Navbar } from "react-bootstrap"
import styled from "styled-components"

export const navLinkStyle = ({ isActive }) => (
  {
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    fontFamily: "Maru Buri",
    padding: "0.5rem",
  }
)

export const notAuthNavLinkStyle = ({ isActive }) => (
  {
    textDecoration: "none",
    color: "black",
    fontSize: "0.8rem",
    fontFamily: "Maru Buri",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.3rem",
    paddingRight: "0.3rem",
  }
)

export const MyNavbar = styled(Navbar)`
  position: sticky;
  z-index: 9;
  top: 0;
  background-color: #FFFDF6;
  height: 3rem;
`

export const Toggle = styled.div`
  width: 2rem;

  &:hover {
    cursor: pointer;
  }
`

export const LogoImg = styled.img`
  width: 3rem;
`

export const IconImg = styled.img`
  width: 1.3rem;
  margin-right: 0.7rem;
  vertical-align: text-bottom;
`

export const Logout = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.5rem;
  font-family: Maru Buri;
  text-align: start;
  padding: 1rem;
`

export const Offcanvas = styled(Navbar.Offcanvas)`
  background-color: #FFFDF6;
  border: none;
  width: 15rem;
`