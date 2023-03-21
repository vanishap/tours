import './App.css';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours]= useState([]);

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
  return (
    <main >
    <Tours /> 
    </main>
  );
}

export default App;
