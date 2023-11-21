import { useState, useEffect } from "react";

import Display from "./Components/Display";
import Buttons from "./Components/ControlButtons"


function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      const data = await response.json()
      console.log(data)
      setData(data)
    }
    fetchData()
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }


  const displayImage = () => {
    if (!DataTransfer.primaryImage) {
      return (
        <h2>No Image!</h2>
      )
    }
  }
  return (
    <div className="App">
      <Display objectImage={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Buttons handleIterate={handleIterate} />
    </div>
  );
}

export default App;
