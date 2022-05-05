import React , {useState} from 'react';
import {connect} from "react-redux";
import {ADDTODU} from '../redux/action/action';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTodu = ({ADDTODU}) => {


    const [newtext , setNewtext] = useState ("")



    const handelAdd =(e) => {
        e.preventDefault()
        const newTodu = {
            text : newtext ,
            id : Math.random()
        }
        ADDTODU(newTodu)
        console.log (newtext)
        setNewtext("")
    } 



    return (
        <div className="prin-comp">
            <Form.Group>
                <Form.Control id="add-btn" type="text" placeholder="enter your Todo" value={newtext} onChange={(e) => setNewtext(e.target.value)} />
            </Form.Group>
            <Button className="btn" variant="warning" type="submit" className="mr-2" onClick={ handelAdd}>ADD Todo</Button>
        </div>
    );
}

export default connect(null, { ADDTODU })(AddTodu);

