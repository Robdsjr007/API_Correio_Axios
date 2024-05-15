import PropTypes from 'prop-types';
import './List.module.css'



{/* idade, estado, logradouro */}

function List() {

    const cidade = 'São Paulo'
    const estado = 'SP'
    const logradouro = 'Rua Barrão barroso do amazonas'

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Logradouro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{logradouro}</td>
                    <td>{cidade}</td>
                    <td>{estado}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

List.propTypes = {
    logradouro: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string
}

export default List;