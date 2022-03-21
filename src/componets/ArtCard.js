import React, {useEffect, useState} from "react";

export default function ArtCard() {
  const [arts, setArts] = useState()

  useEffect(() => {
    fetch('https://bidding-bunch.uc.r.appspot.com/art', {
      method: "GET", 
      headers: { "Content-Type" : "application/json"}
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(...data)
      setArts(data)
    })
    .catch((err) => alert(err))
  },[])

return <>
    {
      arts && arts.map((art, index) => (
        <>
      <img src={art.url} alt=" "/>
      <h1>{art.name}</h1>
      <h2>{art.isSold}</h2>
      <p>{art.startingBid}</p>
      <p>{art.currentBid}</p>
      <p>{art.id}</p>
      </>
    )
    )}
    
    </>
  };
  

  