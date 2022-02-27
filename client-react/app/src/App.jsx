import { useState } from "react"
import { useEffect } from "react"
import Header from "./components/Header.jsx"

function App() {
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("user")).favMovie)    
  },[])

  console.log(movies);



  return (
    <>
     <Header />
     <h2>Welcome : {} </h2>
     {movies.map(movie => (
      <div key={movie} 
      className="max-w-sm rounded overflow-hidden shadow-lg"
      >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        
      </div>
    </div>
     ))}
     
     
    </>
  )
}

export default App
