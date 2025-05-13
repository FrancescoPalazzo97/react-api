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
      filtered = actors.map(actor => ({
        id: actor.id,
        name: actor.name,
        image: actor.image,
        biography: actor.biography,
        birth_year: actor.birth_year,
        nationality: actor.nationality,
        awards: actor.awards,
      }))
    } else if (gender === `female`) {
      filtered = actresses.map(actress => ({
        id: actress.id,
        name: actress.name,
        image: actress.image,
        biography: actress.biography,
        birth_year: actress.birth_year,
        nationality: actress.nationality,
        awards: actress.awards,
      }))
    } else {
      let maxLenght = actresses.length + actors.length
      for (let i = 0; i < maxLenght; i++) {
        filtered.push({
          id: i + 1,
          name: actors[i].name,
          image: actors[i].image,
          biography: actors[i].biography,
          birth_year: actors[i].birth_year,
          nationality: actors[i].nationality,
          awards: actors[i].awards,
        })
        filtered.push({
          id: i + 2,
          name: actresses[i].name,
          image: actresses[i].image,
          biography: actresses[i].biography,
          birth_year: actresses[i].birth_year,
          nationality: actresses[i].nationality,
          awards: actresses[i].awards,
        })
      }
    }

    setShow(filtered)

  }, [gender, actors, actresses])

  // useEffect(() => {
  //   gender === `male`
  //     ? setShow(actors)
  //     : gender === `female`
  //       ? setShow(actresses)
  //       : setShow([...actors, ...actresses])
  // }, [gender, actors, actresses]);

  console.log(actors[0])


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
