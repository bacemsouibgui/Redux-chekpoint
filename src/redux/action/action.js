import { addtodu , deletetodu , edittodu  } from "./actionType";

 export function ADDTODU (newTodu){
    return {
        type : addtodu ,
        payload : newTodu
    }
}

 export function DELETETODU (edittodu){
    return {
        type : deletetodu ,
        payload : edittodu
    }
}

 export function EDITTODU (id){
    return {
        type : edittodu ,
        payload : id
    }
}

export default (ADDTODU , DELETETODU , EDITTODU )

