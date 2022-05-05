import React , {useState} from 'react';
import { connect } from "react-redux";
import { ADDTODU, DELETETODU , EDITTODU } from "../redux/action/action";
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function ToduCard({todu , DELETETODU , EDITTODU}) {
    const [show, setShow] = useState(false);
    const [textmod, setTextmod] = useState(todu.text);


            



    const modifytodu = (e) => {
        e.preventDefault()
        const newtodu =  {...todu , text: textmod, }
    
        EDITTODU(newtodu)
        
    }
    return (
        <div className="todo">
            <div className="todo-btn">
            <p style={{ color: "white" , fontFamily:"arial" }} >{todu.text}</p>
            
            <Button style={{margin:"10px"}} id="btnAdd" variant="primary" onClick={() => setShow(true)}>
                Edit
            </Button>
<Button style={{margin:"10px"}} className="btn" variant="danger" type="submit" className="mr-2" onClick={() => DELETETODU(todu.id)}>Delete</Button>
</div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                sise="sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit your Todo
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        
                        <Form.Control value={textmod} onChange={(e) => setTextmod(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Button className="btn" variant="success" type="submit"   onClick={modifytodu}>
                    Confirm
                    </Button>
            </Modal>
            
        </div>
    );
}

export default connect(null, { DELETETODU, EDITTODU })(ToduCard);
