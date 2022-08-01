import logo from "./logo.svg";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { listPets, getPet } from "./graphql/queries";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    todos();
  }, []);

  const todos = async () => {
    try {
      //const { data } = await API.graphql(graphqlOperation(listPets));
      //console.log(data);

      const { data } = await API.graphql({
        query: getPet,
        variables: { id: "1" },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
