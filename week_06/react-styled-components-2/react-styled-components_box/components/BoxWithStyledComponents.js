import styled from "styled-components";

/* export default function BoxWithStyledComponents() {
  return (
    <>
      <StyledBox></StyledBox>
      <StyledBox $isBlack></StyledBox>
    </>
  );
} */

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
