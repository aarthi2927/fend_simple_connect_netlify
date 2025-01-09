import React,{ useState,useEffect } from "react";

function Home(){
    const [message, setMessage] = useState(''); 
    useEffect(() => 
      { 
        // Fetch data from the backend using fetch 
      fetch('/home') 
      .then(response => response.text()) 
      .then(data => setMessage(data))
       .catch(error => console.error('Error fetching home page message:', error))
       ; }, []); 
       return <div>{message}</div>; 
      }; 
export default Home;
