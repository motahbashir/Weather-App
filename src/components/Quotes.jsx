import React, { useEffect, useState } from 'react'

export default function Quotes() {

const [data,setData] =useState (null)
useEffect (()=>{

fetch("https://thequoteshub.com/api/")    
.then(res => res.json ())
.then(data=>{setData (data);
console.log(data);}
)
.catch(err => console.error("Error fetching quote:", err));
},[])
  return (
  <>
 {data?.text}

  </>
  )
}
