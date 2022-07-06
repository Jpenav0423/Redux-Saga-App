import './App.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";

function App() {

  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]); 

  console.log(cats);


  return (
    <div className="App">
      <h1>LA FERIA DE LOS GATOS</h1>
      <p>Imagenes de gatos</p>
      <hr />
      <div className='Gallery'>
        {cats.map( cat =>
          <div key={cats.id} className="row">
            <div className='columns column-left'>
              <img 
              alt={cat.name}
              src={cat.image.url}
              width="200"
              height="200"
              />
            </div>
            <div className="columns column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )}

      </div>
    <button>View More</button>
    </div>
  );
}

export default App;


/*
{cats.map((cat, key) => {
  return (
    <h1 key={cat.id}>{cat.name}</h1>
  )
}
  
)}
*/