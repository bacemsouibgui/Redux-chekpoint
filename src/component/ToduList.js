import React from 'react';
import ToduCard from "./ToduCard";
import {connect} from "react-redux";
function ToduList({todulist}) {
    return (
        <div className="todo">
           {
               todulist.map (el => <ToduCard key = {el.id} todu = {el}/>)
           }
        </div>
    );
}


const mapStateToProps =(state) => {
    return{
        todulist : state.todu
    }
}

export default connect (mapStateToProps) (ToduList);


