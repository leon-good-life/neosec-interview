import React, { useState } from "react";
import styled from "styled-components";
import GridCell from "./GridCell";

const TimelineGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 240px 10px 10px 90px 300px;
  grid-row-gap: 50px;
  overflow: hidden;

  span {
    color: #b4b6c1;
  }
`;

const RoundedLabel = styled.span`
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color};
  color: ${(props) => props.color} !important;
  border-radius: 5px;
  padding: 2px 6px;
  font-size: 12px;
`;

const VerticalDashedLine = styled.span`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: span ${(props) => props.visibleCallsAmount};
  border-left: 3px dashed #5877cf;
`;

const Circle = styled.span`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    right: 2px;
    top: 5px;
    width: 10px;
    background: ${(props) => (props.selected ? "#5877cf" : "white")};
    border: solid 1px #5877cf;
    height: 10px;
    border-radius: 50%;
  }
`;

const mapMethodToColor = {
  GET: "#a4d5ec",
  AUTH: "#9a93d6",
  POST: "blue",
  DELETE: "red",
};

const Timeline = ({ userCalls, visibleCallsAmount }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TimelineGrid>
      {userCalls.map((call, index) => {
        const onClick = (event) => setSelectedIndex(index);
        return (
          <React.Fragment key={call.id}>
            <GridCell {...{ onClick }}>{call.timestamp.split(" ")[1]}</GridCell>
            <GridCell {...{ onClick }}>
              <Circle selected={index === selectedIndex} />
            </GridCell>
            {index === 0 && <VerticalDashedLine {...{ visibleCallsAmount }} />}
            <GridCell {...{ onClick }}>
              <RoundedLabel color={mapMethodToColor[call.method]}>
                {call.method}
              </RoundedLabel>
            </GridCell>
            <GridCell {...{ onClick }}>{call.endpoint_path}</GridCell>
          </React.Fragment>
        );
      })}
    </TimelineGrid>
  );
};

export default Timeline;
