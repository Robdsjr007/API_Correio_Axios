import PropTypes from 'prop-types';
import './List.module.css'
import '../Form/Form';

{/* idade, estado, logradouro */}

{/* https://viacep.com.br/ws/08472721/json/ */}

function List({ CEP }) {

    console.log(CEP)

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
                    <td>Indefinido</td>
                    <td>Indefinido</td>
                    <td>Indefinido</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

List.propTypes = {
    CEP: PropTypes.string
}

export default List;