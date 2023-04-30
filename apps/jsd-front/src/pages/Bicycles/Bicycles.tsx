import { useState } from "react";
import Content from "../../components/Content";
import FormSelect from "../../components/FormSelect/FormSelect";
import Navbar from "../../components/Navbar/Navbar";
import CreateForm from "./CreateForm";
import ShowForm from "./ShowForm";

const Bicycles = () => {
  const [formId, setFormId] = useState(1); 
  const onClick = (id: number) => {
    setFormId(id);
  }
  
  return (
    <>
      <Navbar />
      <Content>
        <FormSelect selectedId={formId} onClick={onClick} />
        {formId === 1 ? <CreateForm />: <></>}
        {formId === 2 ? <ShowForm />: <></>}
      </Content>
    </>
  );
};

export default Bicycles;
