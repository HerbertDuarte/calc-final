const FormMedias = ({method, setMethod}) => {
  
  return (
    <form className="selecao">
      <label htmlFor="seletor">Selecione o método</label>
      <select
        defaultValue={method}
        className="seletor"
        name="seletor"
        id="seletor"
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value={0} disabled></option>
        <option value={1}>Media geral</option>
        <option value={2}>Media por unidade</option>
      </select>
    </form>
  );
};

export default FormMedias;
