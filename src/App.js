import './App.css';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours]= useState([]);

  const deleteTour = (id)=>{
       const newTours=  tours.filter(tour=>tour.id !== id);
       setTours(newTours);
    }

  const getTourInfo = async()=>{
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setTours(json);
    setLoading(false);
  }
  useEffect(()=>{
    getTourInfo();
  },[]);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return (
    <main>
      <div className="title">
        <h2>No tours left</h2>
        <button className = 'btn' onClick={()=>getTourInfo()}>Refresh</button>
      </div>
    </main>
    )
  }
  return (
    <main >
    <Tours tours ={tours} deleteTour={deleteTour}/> 
    </main>
  );
}

export default App;
