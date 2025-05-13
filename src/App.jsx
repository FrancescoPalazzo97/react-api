import axios from "axios";
import { useState, useEffect } from "react";

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
        <header className="row">
          <div className="col">
            <h1 className="text-center">React API</h1>
          </div>
        </header>
        <main className="row gy-4">
          <div className="col-lg-3 col-m-4 col-sm-6">
            <div className="card">
              <img src={actresses[0].image} className="card-img-top" alt="Actress 1" />
              <div className="card-body">
                <h5 className="card-title">{actresses[0].name}</h5>
                <p className="card-text">{actresses[0].biography}</p>
                <p className="card-text">{actresses[0].birth_year}</p>
                <p className="card-text">{actresses[0].nationality}</p>
                <p className="card-text">{actresses[0].awards}</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App
