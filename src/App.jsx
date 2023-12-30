import Input from "./components/input/Input";
import Button from "./components/button/Button";

import { Container, Content, Row } from "./style";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("");

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${num}${prev === "" ? "" : prev}`);
  };

  // Seting the clear
  const handleOnClear = () => {
    setCurrentNumber("");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"c"} onClick={handleOnClear} />
          <Button label={"/"} />
          <Button label={"x"} />
          <Button label={"%"} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"-"} onClick={() => handleAddNumber("")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={() => handleAddNumber("")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"="} onClick={() => handleAddNumber("=")} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
