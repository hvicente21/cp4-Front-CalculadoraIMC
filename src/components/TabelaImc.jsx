
const TabelaImc=(resultado)=>{
    if(resultado<18){
        return (
            <>
            <td>Abaixo do peso</td>
            <td>Abaixo do 18</td>
            </>
        );
    }else if (resultado >18 && resultado <25){
        return(
            <>
            <td>Peso Normal</td>
            <td>18 - 24.9</td>
            </>
        );
    }else if(resultado>24 && resultado<30){
        return(
            <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        );
    }else if (resultado > 29 && resultado <35){
        return(
            <>
            <td>Obesidade Grau-1</td>
            <td>30 - 34.9</td>
            </>
        );
    }else{
        return(
            <>
            <td>Obesidade Mórbida</td>
            <td>Maior ou a 40</td>
            </>
        );
    }
}

export default TabelaImc