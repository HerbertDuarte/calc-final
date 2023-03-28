import React, { useState } from "react";

const Method1 = () => {

  const [media, setMedia]= useState()
  const calcular = (e) => {

    e.preventDefault()

    if (media == 0) {
      alert("ERRO (Digite um valor válido para a média).");
    } else {

      if (media > 10) {
        alert("ERRO (Média inválida).");
      } else if (media >= 7) {
        alert("Parabéns! Você foi APROVADO e não precisará de provas finais.");
      } else if (media < 2.5) {
        alert(
          "Infelizmente sua média não foi suficiente para ir para as proas finais! :( "
        );
      } else if (media < 7) {
        let resultado = 15 - media * 2;
        alert(
          `Você precisará de ${resultado.toFixed(1)} pontos na prova final.`
        );
      }
    }
  };

  return (
    <form onSubmit={calcular}>

        <label htmlFor="media">Digite sua média geral do semestre</label>
        <input type="number" name="media" className="media" id="media" 
        value={media}
        onChange={(e) => setMedia(e.target.value)}/>
      
        <input
          className="botao"
          id="botao"
          type="submit"
          value="Calcular"
          onChange={calcular}
        />
    </form>
  );
};

export default Method1;
