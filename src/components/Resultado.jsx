import "../css/global.css"
import "../css/resultado.css"
import TabelaImc from "./TabelaIMC"

//destruct - Desestruturação - acessa os dados de outro componente
function Resultado({resultado}){
    return (
        <div>
            <div className="tabela">
                <h2>
                    Seu IMC é de: <span class name="imcSpan">{resultado}</span>
                </h2>

            </div>

            <table className='tabela'>
                <thead className='tabelaHeader'>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tabelaBody">
                    <tr>{TabelaImc(resultado)}</tr>
                </tbody>

            </table>
        </div>
    )
}
export default Resultado