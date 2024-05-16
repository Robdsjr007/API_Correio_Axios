import Form from "./Form/Form";
import PropTypes from "prop-types";

function Card({ setCEP, event }) {

    return (
        <div className="Card">
            <Form setCEP={setCEP} event={event}/>            
        </div>
    );
}

Card.propTypes = {
    setCEP: PropTypes.func,
    event: PropTypes.func
}

export default Card;