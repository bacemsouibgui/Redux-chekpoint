import { addtodu , deletetodu , edittodu  } from "./actionType";

const ADDTODU =(newTodu)=>{
    return {
        type : addtodu ,
        payload : newTodu
    }
}

const DELETETODU =(edittask)=>{
    return {
        type : deletetodu ,
        payload : edittask
    }
}

const EDITTODU =(id)=>{
    return {
        type : edittodu ,
        payload : id
    }
}



<input type="text"  placeholder="enter your Todu" value={newtext} onChange = {(e)=> setNewtext (e.target.value)}/>