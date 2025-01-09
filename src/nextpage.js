import React,{ useState,useEffect } from "react";
function Nextpage(){
   
        const [message, setMessage] = useState('');
         useEffect(() => 
          { 
          // Fetch data from the backend using fetch 
          fetch('/nextpage') 
          .then(response => response.text()) 
          .then(data => setMessage(data)) 
          .catch(error => console.error('Error fetching next page message:', error));
         },[]); 
         return <div>{message}</div>; };
 
export default Nextpage;