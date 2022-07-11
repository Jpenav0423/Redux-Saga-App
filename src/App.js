import './App.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { catSlice, getCatsFetch } from "./catState";
import { getVuelosFetch } from './vuelosState';

function App() {

  
  const jsonVuelos = {
    "data": [
      {
        "customer_id": "0",
        "first_name": "Rene",
        "last_name": "Pena",
        "email": "rpena0391@gmail.com",
        "phone": "50495937703",
        "status": "",
        "airport": "XPL",
        "airline": "AA",
        "airport_destination": "MIA",
        "flight_number": "1345",
        "departure_flight_time": "2022-10:10 10:45:00",
        "pickup_location": "Ruben Dario, Calle Ruben Dario Casa 2313",
        "pickup_time": "2022-10:10 07:00:00",
        "payment_type": "credit_card",
        "passengers_info": "{\"name\":\"Rene Pena\",\"age\":31},{\"name\":\"Jefry Pena\",\"age\":31}",
        "bags_info": "\"carry_on\":2,\"checked_bag\":2}",
        "cc_bin": "410000",
        "cc_number": "1234",
        "cc_name": "NOMBRE CREDIT CARD",
        "cc_type": "visa",
        "discount": 0.00,
        "amount": 45.00
      }
    ]
}

const handleVuelos = () =>{
  fetch("http://renedev.com/hyperdrive/public/api/v1/orders" , {
    method: 'POST',
    /*
    headers: {
      'Content-Type': 'application/json'
    },
    */
    //mode: 'cors',
    body: JSON.stringify(jsonVuelos)
  })
  console.log(vuelos)
}
    
  /*
  fetch('http://renedev.com/hyperdrive/public/api/v1', {
    method: 'POST',
    headers: {},
    body: JSON.stringify(data)
  }).then(() => {
    console.log("Data enviada")
  })
  */

  const vuelos = useSelector(state => state.vuelos.vuelos);
  const dispatchVuelos = useDispatch();

  useEffect(() => {
    dispatchVuelos(getVuelosFetch());
  }, [dispatchVuelos]); 
  console.log(vuelos);


  return (
    <div className="App">
      <h1>VUELOS</h1>
      <h2>PALMEROLA VIP</h2>
      <hr />

      {vuelos.map(vuelo => {
        {console.log(vuelo)}
        return (
          <div className='Gallery'>
          <div key={vuelo.id} className="row">
            <div className='columns column-left'>
              <h1>{vuelo.id}</h1>
            </div>
              <div className='columns column-right'>
                <h2>{vuelo.first_name}  {vuelo.last_name}</h2>
                <h5>{vuelo.email}</h5>
                <p>{vuelo.phone}</p>
                <p>{vuelo.pickup_location}</p>
                <p>{vuelo.passengers_info}</p>
              </div>
            
         </div>
         </div>
        )
      })
      }

      <button onClick={handleVuelos}>Fetch Json </button>

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


  /*
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();
  */


/*
 <h1>LA FERIA DE LOS GATOS</h1>
      <p>Imagenes de gatos</p>
      <hr />
      <div className='Gallery'>
        {cats.map( cat =>
          <div key={cat.id} className="row">
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

    */
