import styles from './FormMedias.module.css'

const FormMedias = ({method, setMethod}) => {
  
  return (
    <form>
      <label className={styles.label} htmlFor="seletor">Método:</label>
      <select
        defaultValue={method}
        className={styles.seletor}
        name="seletor"
        id="seletor"
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value={0} disabled>Selecione o método</option>
        <option value={1}>Media geral</option>
        <option value={2}>Media por unidade</option>
      </select>
    </form>
  );
};

export default FormMedias;
