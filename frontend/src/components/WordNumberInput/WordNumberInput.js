import React, { PureComponent, Fragment } from "react";
import classes from "./WordNumberInput.module.css";
import { Row, Col, message, Input, Button } from "antd";
import { connect } from "react-redux";
import { updateWordNumber } from "./store/actions/index";
import { getWords } from "../../containers/Frequency/store/actions/index";
class WordNumberInput extends PureComponent {
  updateNumberHandler = event => {
    const { value } = event.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      this.props.updateWordNumber(value);
    }
  };
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={8} offset={4}>
            <Input
              value={this.props.wordNumber.value}
              placeholder="Enter Word Number"
              onChange={event => this.updateNumberHandler(event)}
            />
          </Col>
          <Col span={8} offset={4}>
            <Button
              type="primary"
              loading={this.props.loading}
              onClick={() => this.props.getWords(this.props.wordNumber.value)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.frequency.loading,
    wordNumber: state.wordNumber.wordNumber
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getWords: value => dispatch(getWords(value)),
    updateWordNumber: value => dispatch(updateWordNumber(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WordNumberInput);
