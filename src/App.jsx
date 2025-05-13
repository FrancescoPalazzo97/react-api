import axios from "axios";
import { useState, useEffect, use } from "react";

const ActressesAPI = "https://lanciweb.github.io/demo/api/actresses/";
const ActorsAPI = "https://lanciweb.github.io/demo/api/actors/";

function App() {

  const fetchActresses = () => {
    axios.get(ActressesAPI)
      .then((res) => {
        console.log(res.data);
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
        <header className="row">
          <div className="col">
            <h1 className="text-center">React API</h1>
          </div>
        </header>
        <main className="row">

        </main>
      </div>
    </>
  )
}

export default App
