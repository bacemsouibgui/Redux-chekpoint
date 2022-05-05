import {useState} from "react";
import './App.css';
import AddTodu from "./component/addTodu";
import ToduList from "./component/ToduList"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodu/>
        <ToduList/>
      </header>
     
    </div>
  );
}

export default App;
