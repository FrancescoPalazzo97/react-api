import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardSection from "./components/CardSection";

const ActressesAPI = "https://lanciweb.github.io/demo/api/actresses/";
const ActorsAPI = "https://lanciweb.github.io/demo/api/actors/";

function App() {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const [show, setShow] = useState([]);

  const [gender, setGender] = useState(``);

  const setMale = () => {
    setGender(`male`)
  }

  const setFemale = () => {
    setGender(`female`)
  }

  const setAll = () => {
    setGender(``)
  }

  const fetchActresses = () => {
    axios.get(ActressesAPI)
      .then((res) => {
        setActresses(res.data);
      })
      .catch((error) => {
        console.error("Error fetching actresses:", error);
      });
  }

  const fetchActors = () => {
    axios.get(ActorsAPI)
      .then((res) => {
        setActors(res.data);
        console.log(actors)
      })
      .catch((error) => {
        console.error("Error fetching actors:", error);
      });
  }



  useEffect(() => {
    fetchActresses();
    fetchActors();
  }
    , []);

  useEffect(() => {
    let filtered = [];
    if (gender === `male`) {
      filtered = actors
    } else if (gender === `female`) {
      filtered = actresses
    } else {
      let maxLenght = Math.max(actresses.length, actors.length)
      for (let i = 0; i < maxLenght; i++) {
        if (actors.length) {
          filtered.push({
            id: (i * 2) + 1,
            name: actors[i].name,
            image: actors[i].image,
            biography: actors[i].biography,
            birth_year: actors[i].birth_year,
            nationality: actors[i].nationality,
            awards: actors[i].awards,
          })
        }
        if (actresses.length) {
          filtered.push({
            id: (i * 2) + 2,
            name: actresses[i].name,
            image: actresses[i].image,
            biography: actresses[i].biography,
            birth_year: actresses[i].birth_year,
            nationality: actresses[i].nationality,
            awards: actresses[i].awards,
          })
        }
      }
    }

    setShow(filtered)

  }, [gender, actors, actresses])

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <section className="row">
            <div className="col my-2">
              <button className="btn btn-primary me-2" onClick={setAll}>
                Tutti
              </button>
              <button className="btn btn-primary me-2" onClick={setMale}>
                Attori
              </button>
              <button className="btn btn-primary" onClick={setFemale}>
                Attrici
              </button>
            </div>
          </section>
          <CardSection show={show} />
        </main>
      </div>
    </>
  )
}

export default App
