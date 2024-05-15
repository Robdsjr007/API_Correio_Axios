import PropTypes from 'prop-types';

function Form({ setCEP, event }) {
    return (
        <>
            <form>
                <label htmlFor="CEP">Digite o CEP</label>
                    <input type="text" 
                    placeholder="Digite o seu CEP"
                    onChange={(e) => setCEP(e.target.value)}
                    />
                <button type="submit" onClick={event}>Enviar</button>
            </form>
        </>
    );
}

Form.propTypes = {
    setCEP: PropTypes.func,
    event: PropTypes.func
}

export default Form;