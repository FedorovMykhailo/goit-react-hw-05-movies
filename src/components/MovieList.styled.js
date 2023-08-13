import { NavLink} from "react-router-dom";
import styled from "styled-components";

  export const Link = styled(NavLink)`
//   padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 12px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const MoviesList = styled.ul`
list-style: none;
`