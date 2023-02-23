import menus from "../enum/navConst";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBox>
      <ul>
        {menus.map((value) => {
          return (
            <li id={value.id} key={value.id}>
              <Link to={value.path}>{value.title}</Link>
            </li>
          );
        })}
      </ul>
    </NavBox>
  );
};

const NavBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 5vh;
  min-width: 55rem;
  line-height: 5vh;
  font-size: 1.3rem;
  background-color: #90e0a5;

  ul a {
    margin: 0 2rem;
    text-decoration: none;
    color: black;
    :hover {
      text-decoration: underline;
    }
  }
  li {
    display: inline; /* a태그는 글자성격 = inline */
  }
`;

export default Nav;
