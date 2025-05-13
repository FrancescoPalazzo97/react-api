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
    gender === `male`
      ? setShow(actors)
      : gender === `female`
        ? setShow(actresses)
        : setShow([...actors, ...actresses])
  }, [gender, actors, actresses]);

  console.log(gender)


  return (
    <>
      <div className="container">
        <Header />
        <main>
          <section className="row">
            <div className="col my-2">
              <button className="btn btn-primary me-2" onClick={setMale}>
                Attori
              </button>
              <button className="btn btn-primary" onClick={setFemale}>
                Attrici
              </button
              ></div>
          </section>
          <CardSection show={show} />
        </main>
      </div>
    </>
  )
}

export default App
