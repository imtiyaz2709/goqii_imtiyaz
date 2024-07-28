import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Home from './components/Home';
import 'animate.css';


function Main() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");


  const handleSearch = () => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=3l8GT_4zBofmtuq_yq5nSy8WkEU9I6EHxvXYXsm0pzM`).then(resp => resp.json()).then(resp => setData(resp.results));
  }
   useEffect(() => {
      fetch(`https://api.unsplash.com/photos?client_id=3l8GT_4zBofmtuq_yq5nSy8WkEU9I6EHxvXYXsm0pzM&count=30`).then(res => res.json()).then(res => setData(res));
  }, [])

  return (
    <>
    <Header />
    <Home setData={setData} data={data} handleSearch={handleSearch} query={query} setQuery={setQuery} />
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:px-32 px-5 mt-5">

    {
      data.map((product, i ) => <Card key={i} {...product}/>)
    }
   
    </div>
    </>
    // <div> 
    // <ProductCard />
    // </div>
    
  );
}

export default Main;
