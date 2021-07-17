import styled from "styled-components";

const StyledGridCell = styled.span`
  position: relative;
  cursor: pointer;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -1000%;
    left: -1000%;
    z-index: 1;
  }

  &:hover::before {
    background-color: yellow;
  }
`;

const GridCell = ({ children, onClick }) => (
  <StyledGridCell {...{ onClick }}>
    <span>{children}</span>
  </StyledGridCell>
);

export default GridCell;
