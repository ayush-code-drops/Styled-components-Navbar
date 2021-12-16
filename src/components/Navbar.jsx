import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;
const Logo = styled.div`
  margin-top: 5px;
`;
const Links = styled.div`
  display: flex;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px;
`;

const Button = styled.button`
  background-color: grey;
  color: white;
  padding: 5px;
  width: 120px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
function Navbar() {
  return (
    <Nav>
      <Logo>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="logo.png"
          height="40px"
        />
      </Logo>
      <Links>
        <A>Home</A>
        <A>Resources</A>
        <A>About us</A>
      </Links>

      <Button>Login</Button>
    </Nav>
  );
}

export default Navbar;
