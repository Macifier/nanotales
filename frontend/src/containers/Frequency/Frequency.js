import React, { PureComponent, Fragment } from "react";
import classes from "./Frequency.module.css";
import { Row, Col } from "antd";
import WordNumberInput from "../../components/WordNumberInput/WordNumberInput";
import WordTable from "../../components/FrequentWordTable/FrequentWordTable";
class Frequency extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <WordNumberInput />
        </Row>
        <Row>
          <WordTable />
        </Row>
      </Fragment>
    );
  }
}
export default Frequency;
