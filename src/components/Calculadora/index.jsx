import {useState} from "react";

import styles from './Calculadora.module.css'; 

const Calculadora = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState("");


const calculoImc = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (!alturaNum || !pesoNum || alturaNum <= 0 || pesoNum <= 0) {
        setResultado("Erro! Insira valores válidos para altura e peso.");
        return;
    }


    const imc = pesoNum / (alturaNum * alturaNum );

    let classificacao = "";

    if (imc < 18.5 ) classificacao = "PESO BAIXO";
    else if (imc >18.5 && imc <24.9) classificacao = "NORMAL";
    else if(imc >25 && imc < 29.9) classificacao= "SOBREPESO";
    else if (imc>30 && imc<34.99) classificacao = "OBESIDADE GRAU I";
    else if (imc>35 && imc<39.99) classificacao = "OBESIDADE GRAU II";
    else if (imc > 40) classificacao = "OBESIDADE GRAU III"

    setResultado(`Seu IMC é ${imc.toFixed(2)}. Sua classificação: ${classificacao}.`);
};

return (
    <div>
        <h1> Calculadora IMC</h1>
        <form
            onSubmit = {(e) =>{
                e.preventDefault();
                calculoImc();
            }}
        >
            <label className={styles.label} htmlFor="altura">Altura (m):</label>
            <input type="number" placeholder="Digite a sua altura em metros (Ex.:1.75)" value={altura} onChange={(e) => setAltura(e.target.value)} step="0.01" />
            <label className={styles.label} htmlFor="peso">Peso (kg):</label>
            <input type="number" placeholder="Digite o seu peso em kg (Ex.:70.1)" value={peso} onChange={(e) => setPeso(e.target.value)} step="0.1" />
            <button type="submit">Calcular IMC</button>
        </form>
        {resultado && <p>{resultado}</p>}
    </div>
);
};

export default Calculadora;
