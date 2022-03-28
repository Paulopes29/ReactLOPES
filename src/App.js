import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Test from "./Components/Test";

function App() {
 // let myVar ='Hello World';
const [myVar,setMyVar] = useState('Hello World');
const [count, setCount] = useState(0);
const [movies, setMovies] = useState([]);



    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/')
            .then(response => {
                console.log(response);
               return  response.json()
            }).then(data => {
                console.log(data);
                setMovies(data.results)
        })
    }

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
       // setMyVar(`Vous avez cliqué ${count} fois`);
        fetchMoviesHandler();
    }, [count]);

    const onClickHandler = () => {
      console.log('Clicked');
     // myVar = 'GoodBye';
      setMyVar ('Hello World updated');
      console.log(myVar);

      setMyVar((prevState) => {
          prevState += ' updated';
          console.log(prevState);
          return prevState;
      })

    }

    const ChildToParentUpdater =(data) => {
      //console.log('ChildToParentUpdater',data);
    }

  return (
      <div className="App">
        <h2>{myVar}</h2>
        <button onClick={onClickHandler}>Click me</button>
          <button onClick={() => setCount(count + 1)}>
              Cliquez ici
          </button>

          <Test myProp='hello' updater={ChildToParentUpdater} />
          {movies.map((element) => {
                return <h1>{element.title}</h1> })}






      </div>
  );
}

export default App;