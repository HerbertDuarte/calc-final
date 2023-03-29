import React, { useState } from "react";
import styles from "./Method1.module.css";

const Method1 = () => {
  const [media, setMedia] = useState();
  const calcular = (e) => {
    e.preventDefault();

    const myInput = document.getElementById("media");
    if (myInput.value.length == 0) {
      alert(
        "❌ ERRO : Por favor, preencha todos os campos com valores válidos!"
      );
    } else {
      if (myInput.value > 10) {
        alert(
          "❌ ERRO : Por favor, preencha todos os campos com valores válidos!"
        );
      } else if (media >= 7) {
        alert(
          "✔️ Parabéns! Você foi APROVADO e não precisará de provas finais."
        );
      } else if (media < 2.5) {
        alert(
          "😓 Infelizmente sua média não foi suficiente para fazer as provas finais!"
        );
      } else if (media < 7) {
        let resultado = 15 - media * 2;
        alert(
          `📜 Você precisará de ${resultado.toFixed(
            1
          )} pontos nas provas finais. Boa sorte!`
        );
      }
    }
  };

  return (
    <form onSubmit={calcular}>
      <label htmlFor="media">Digite sua média geral do semestre</label>
      <input
        type="number"
        // placeholder="Digite sua média geral do semestre"
        name="media"
        className={styles.media}
        id="media"
        value={media}
        onChange={(e) => setMedia(e.target.value)}
      />

      <input
        className={styles.btn}
        id="botao"
        type="submit"
        value="Calcular"
        onChange={calcular}
      />
    </form>
  );
};

export default Method1;
