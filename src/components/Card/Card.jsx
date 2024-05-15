import { useState } from "react";
import Form from "./Form/Form";

function Card() {
    const [CEP, setCEP] = useState()

    const enviarCEP = (e) => {
        e.preventDefault();
        console.log(CEP)
    }

    return (
        <div className="Card">
            <Form setCEP={setCEP} event={enviarCEP}/>            
        </div>
    );
}

export default Card;