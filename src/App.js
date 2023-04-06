import React,{useState,useEffect} from 'react'
import Menu from './Components/Menu'
import NewsGrid from './Components/NewsGrid'

function App() {
    const[items, setItems]=useState([])
    const[active, setActive]=useState(1)
    const[category, setCategory]=useState("general")

    useEffect(() =>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bfe28db313254b389cf0817010ba2fab`)
        .then(res=>res.json())
        .then(data=>setItems(data.articles))
    },[category]
)
  return (
   <div className='App'>
    <h1 className='title'>See The Lastest News</h1>
    <Menu active={active} setActive={setActive} setCategory={setCategory}/>
    <NewsGrid  items={items}/>
   </div>
    )
}

export default App