import React from 'react';
import ReactDOM from 'react-dom';

function List(props) { 

   return(
     <div>
      {props.myData.map((soccer, key) => {
       return (
        <div key= {key}>
          <h2>Name: {soccer.name}</h2>
          <h3>Country: {soccer.country}</h3> 
          <h3>Searches: {soccer.searches}</h3>           
        </div>
       )
      })}
    </div>      
    )

     };

export default List;