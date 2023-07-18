import styled from "styled-components";

const Heading = styled.h3`
  position: relative;
  padding: 0.8rem 0rem 0.5rem;
  color: darkgray;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: -60;
    width: 50px;
    height: 5px;
    background-color: #00539c;
    border-radius: 18px;
  }
`;

export default Heading;
