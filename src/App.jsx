import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const ActressesAPI = "https://lanciweb.github.io/demo/api/actresses/";
const ActorsAPI = "https://lanciweb.github.io/demo/api/actors/";

function App() {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const fetchActresses = () => {
    axios.get(ActressesAPI)
      .then((res) => {
        console.log(res.data);
        setActresses(res.data);
      })
      .catch((error) => {
        console.error("Error fetching actresses:", error);
      });
  }

  useEffect(() => {
    fetchActresses();
  }
    , []);

  return (
    <>
      <div className="container">
        <Header />
        <Main actresses={actresses} />
      </div>
    </>
  )
}

export default App
