import { useState, useEffect } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado";
import './css/estilo.css'
import './css/global.css'


function App() {

  // HOOK- useState - Manipula o estado da variável
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState();
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // ESTADO CORRIGIDO: A string "neutro" precisa de aspas
  const [classificacao, setClassificacao] = useState("neutro");

  // useEffect para aplicar a classe de cor no <body> do HTML
  useEffect(() => {
    // Remove qualquer classe de cor existente
    document.body.classList.remove('neutro', 'normal', 'abaixo', 'acima', 'obesidade');
    // Adiciona a nova classe de cor baseada no estado 'classificacao'
    document.body.classList.add(classificacao);
  }, [classificacao]); // Roda sempre que o estado 'classificacao' mudar


  //CRIANDO A FUNÇÃO CALCULAR IMC
  const calcularImc = (e) => {
    e.preventDefault(); //evita o recarregamento da página
    if (altura > 0 && peso > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); //arredonda para 2 casas decimais
      setMostrarResultado(true);

      // A LÓGICA DE CLASSIFICAÇÃO DEVE FICAR AQUI DENTRO!
      if (imc < 18.5) {
        setClassificacao('abaixo');
      } else if (imc >= 18.5 && imc <= 24.9) {
        setClassificacao('normal');
      } else if (imc >= 25 && imc <= 29.9) {
        setClassificacao('acima');
      } else {
        setClassificacao('obesidade');
      }

    } else {
      alert("Por favor digite valores válidos");
      setMostrarResultado(false);

      // Reseta a classificação para neutro em caso de erro
      setClassificacao('neutro');
    }
  }


  return (
    // Remova a classe dinâmica daqui.
    <div className="container">
      <div className="box">
        <Header />
        <form>
          <div>
            <label htmlFor="altura"><span>(exemplo:1.80)</span></label>
            <input
              type="number"
              id="altura"
              placeholder="Digite sua altura"
              value={altura}
              onChange={(e) => setAltura(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="peso"><span>(exemplo:80)</span></label>
            <input
              type="number"
              id="peso"
              placeholder="Digite seu peso"
              value={peso}
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
          </div>
          <button onClick={calcularImc}>Calcular</button>
        </form>
      </div>
      {mostrarResultado && (
        <Resultado resultado={resultado} />
      )}

      <footer>
        <p>&copy; 2025 - todos os direitos reservados</p>
      </footer>
    </div>
  )
}


export default App;
