import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const UserId = styled.h2`
  color: #5877cf;
  background-color: #f5f5f5;
  font-size: 14px;
  margin: 5px 0;
  padding: 30px 15px;
  font-weight: normal;
`;

const Button = styled.button`
  background-color: #b3c1e7;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 12px 40px;
  font-size: 14px;
  cursor: pointer;
`;

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #e0e4f5;
`;

const SubHeading = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  color: #6a6e84;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AlertsOnlyToggle = styled.div`
  display: flex;
  align-items: center;
  float: right;
`;

const StyledHeader = styled.header`
  overflow: auto; // to clearfix the float of the AlertsOnlyToggle
`;

const Header = ({ user }) => {
  return (
    <StyledHeader>
      <UserId>{user}</UserId>
      <FlexSpaceBetween>
        <SubHeading>Timeline</SubHeading>
        <Button>Go to query</Button>
      </FlexSpaceBetween>
      <HorizontalLine />
      <AlertsOnlyToggle>
        <ToggleButton checkboxId="alertsOnly" />
        <label htmlFor="alertsOnly">Alerts Only</label>
      </AlertsOnlyToggle>
    </StyledHeader>
  );
};

export default Header;
