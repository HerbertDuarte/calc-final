import React, { useEffect, useState } from "react";

const Method2 = () => {
  const [unidades, setUnidades] = useState(1);
  const [array, setArray] = useState([]);
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(0)
  const [media, setMedia] = useState([value1, value2, value3, value4, value5])

  useEffect(() => {
    let result = [1];
    for (let index = 2; index <= unidades; index++) {
      result = [...result, index];
    }

    setArray(result);

  }, [unidades]);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log(media)
  };

  return (
    <>
    <form>
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
      </form>
      <form>
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
            />
          </div>
        )})}
      <input
        className="botao"
        type="submit"
        value="Calcular"
        onSubmit={handleSubmit}
      ></input>
    </form>
    </>
  );
};

export default Method2;
