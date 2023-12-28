import Input from "./components/input/Input";
import Button from "./components/button/Button";

import { Container, Content, Row, Column } from "./style";

function App() {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label={"c"} />
          <Button label={"/"} />
          <Button label={"x"} />
          <Button label={"%"} />
        </Row>
        <Row>
          <Button label={"7"} />
          <Button label={"8"} />
          <Button label={"9"} />
          <Button label={"-"} />
        </Row>
        <Row>
          <Button label={"4"} />
          <Button label={"5"} />
          <Button label={"6"} />
          <Button label={"+"} />
        </Row>
        <Row>
          <Button label={"1"} />
          <Button label={"2"} />
          <Button label={"3"} />
          <Button label={"="} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
