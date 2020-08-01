import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import logo from "./logo.svg";
import "./App.css";

const SOME_QUERY = gql`
  query {
    isConnected @client
    savedList @client
  }
`;

function App() {
  const { loading, data } = useQuery(SOME_QUERY);

  if (loading) return <span>loading...</span>;
  if (!data) return <span>error!</span>;

  console.log("data");
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>isConnected : {data && data.isConnected ? "true" : "false"}</span>
      </header>
    </div>
  );
}

export default App;
