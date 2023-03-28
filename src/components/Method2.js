import React, { useEffect, useState } from "react";

const Method2 = () => {
  const [unidades, setUnidades] = useState(1);
  const [array, setArray] = useState([]);
  const [value1, setValue1] = useState(false)
  const [value2, setValue2] = useState(false)
  const [value3, setValue3] = useState(false)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(0)
  const [media, setMedia] = useState([])
  const [result, setResult] = useState(0)
  let [score, setScore] = useState(0)
  
  
  useEffect(() => {
    let result = [1];
    for (let index = 2; index <= unidades; index++) {
      result = [...result, index];
    }
    
    setArray(result);
    
  }, [unidades]);
  
  const handleSubmit = async (e) => {
    
    e.preventDefault(); 

    useEffect(()=>{
      setMedia([value1, value2, value3, value4, value5])
    },[value1, value2, value3, value4, value5])

    function calculateMedia(values) {
      const numericValues = values.map(value => Number(value));
      const sum = numericValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const media = sum / unidades;
      console.log(media);
      setResult(media);
    }

    calculateMedia(media)

    if (result != 0 ){

      setScore(result/unidades)

      if (score = 0){
  
        if (score > 10) {
          alert("ERRO (Média inválida).");
        } else if (score >= 7) {
          alert("Parabéns! Você foi APROVADO e não precisará de provas finais.");
        } else if (score < 2.5) {
          alert(
            "Infelizmente sua média não foi suficiente para ir para as proas finais! :( "
          );
        } else if (score < 7) {
          let resultado = 15 - score * 2;
          alert(
            `Você precisará de ${resultado.toFixed(1)} pontos na prova final.`
          );
        }
      }
    }
    
    
    }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="seletor">Selecione a quantidade de unidades</label>
      <select
        name="seletor"
        id="seletor"
        onChange={(e) => setUnidades(e.target.value)}
        value={unidades}
      >
        <option value={1} disabled>
          Selecione o número de unidades
        </option>
        <option value={2}>2 unidades</option>
        <option value={3}>3 unidades</option>
        <option value={4}>4 unidades</option>
        <option value={5}>5 unidades</option>
      </select>

      {array.length > 1 &&
        array.map((e) => {
  
        return (
          <div key={"div" + e}>
            <label key={"label" + e} htmlFor={"media" + e}>
              Digite sua nota da {e}° unidade
            </label>
            <input
              key={"input" + e}
              type="number"
              name={"media" + e}
              className="media"
              id={"media" + e}
              onChange={(element)=>{
                e == 1 && setValue1(element.target.value)
                e == 2 && setValue2(element.target.value)
                e == 3 && setValue3(element.target.value)
                e == 4 && setValue4(element.target.value)
                e == 5 && setValue5(element.target.value)
              }}
            />
          </div>
        )})}
      <input
        className="botao"
        type="submit"
        value="Calcular"
      ></input>
    </form>
    </>
  );
};

export default Method2;
