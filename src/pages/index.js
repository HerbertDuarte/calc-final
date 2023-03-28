import FormMedias from "@/components/FormMedias";
import Method1 from "@/components/Method1";
import Method2 from "@/components/Method2";
import { useState } from "react";

export default function Home() {
  const [method, setMethod] = useState(0);

  return (
    <>
      <h1>
        Média para as provas finais
        <br />
        IFBA
      </h1>

      <FormMedias 
      method={method} 
      setMethod={setMethod}/>

      {method == 1 && (
        <Method1/>
      )}

      {method == 2 && (
        <Method2/>
      )}
    </>
  );
}
