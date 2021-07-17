import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import Timeline from "./components/Timeline";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #6381d0;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 12px 40px;
  font-size: 14px;
  cursor: pointer;
  margin: 50px;
`;

const App = () => {
  const [calls, setCalls] = useState([]);
  const [user, setUser] = useState(null);
  const [visibleCallsAmount, setVisibileCallsAmount] = useState(10);

  const loadMore = () => setVisibileCallsAmount(visibleCallsAmount + 10);

  useEffect(() => {
    axios
      .get("/rest/calls")
      .then((response) => {
        if (calls.length > 0) {
          setUser(calls[0].user_id);
        }
        setCalls(response.data);
      })
      .catch((error) => console.error(error));
  }, [calls]);

  const userCalls = calls
    .filter((call) => call.user_id === user)
    .slice(0, visibleCallsAmount);
  return (
    <Container>
      <Header {...{ user }} />
      <Timeline {...{ userCalls, visibleCallsAmount }} />
      <Button onClick={loadMore}>Load more</Button>
    </Container>
  );
};

export default App;
