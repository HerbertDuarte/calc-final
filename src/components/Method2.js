import React, { useEffect, useState } from "react";
import styles from "./Method2.module.css";

const Method2 = () => {
  const [unidades, setUnidades] = useState(0);
  const [array, setArray] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues([])
    const result = Array.from({ length: unidades }, (_, i) => i + 1);
    setArray(result);
  }, [unidades]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myInputs = [...document.getElementsByClassName(styles.media)]
    
    const verify = myInputs.find( (element)=> element.value.length == 0 || element.value > 10)
    // console.log(verify)

    const numericValues = Object.values(values).map(value => Number(value));
    const sum = numericValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const newMedia = (sum / unidades).toFixed(1);
    // console.log(sum)
    // console.log(unidades)
    // console.log(newMedia)
    if (isNaN(newMedia) ||verify !== undefined) {
      alert('❌ ERRO : Por favor, preencha todos os campos com valores válidos!');
      return;
    }

    if (newMedia >= 7) {
      alert("✔️ Parabéns! Você foi APROVADO e não precisará de provas finais.");
    }
    else if (newMedia < 2.5) {
      alert(
        "😓 Infelizmente sua média não foi suficiente para fazer as provas finais!"
      );
    } else {
      const mediaFinal = (15 - newMedia * 2) .toFixed(1);
      alert(`📜 Você precisará de ${mediaFinal} pontos nas provas finais. Boa sorte!`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="seletor">Selecione a quantidade de unidades</label>
        <select
          className={styles.select}
          name="seletor"
          id="seletor"
          onChange={(e) => setUnidades(Number(e.target.value))}
          value={unidades}
        >
          <option value={0} disabled>
            Selecione o número de unidades
          </option>
          <option value={2}>2 unidades</option>
          <option value={3}>3 unidades</option>
          <option value={4}>4 unidades</option>
          <option value={5}>5 unidades</option>
        </select>

        {array.length > 0 &&
          array.map((e) => {
            const key = `unidade-${e}`;
            return (
              <div style={{width:'100%'}} key={key}>
                <label className={styles.label} htmlFor={`media${e}`}>
                  Digite sua nota da {e}° unidade
                </label>
                <input
                  type="number"
                  name={`media${e}`}
                  className={styles.media}
                  id={`media${e}`}
                  value={values[key] || ""}
                  onChange={(element) =>
                    setValues({ ...values, [key]: element.target.value })
                  }
                />
              </div>
            );
          })}
        <input className={styles.btn} type="submit" value="Calcular"></input>
      </form>
    </>
  );
};

export default Method2;
