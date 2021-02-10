import React from 'react';
// import {robots} from "./robots";
import Card from "./Card";

function CardList({robots}){
    // if (true){        // To check ErrorBoundary
    //     throw new Error("noooooo");
    // }
   
    const cardArray = robots.map((user,i) => { 
        return <Card key ={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
            <div>
                {cardArray}
            </div>

    );
}
export default CardList;