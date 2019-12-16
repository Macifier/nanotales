import React from "react";
import classes from "./FrequentWordTable.module.css";
import { Table } from "antd";
import { connect } from "react-redux";
const columns = [
  {
    title: 'Word',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>
  },
  {
    title: 'Count',
    dataIndex: 'total',
    key: 'total',
    render: text => <span>{text}</span>
  }
];
const frequentWordTable = (props) => {
  return <Table columns={columns} dataSource={props.words} />
}
const mapStateToProps = (state) => {
  return {
   words : state.frequency.words
  }  
}

export default connect( mapStateToProps , null  )(frequentWordTable);