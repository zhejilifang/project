import React from 'react';
import styles from "./PlayPage.scss";
import { connect } from "dva";

function SearchPage(props) {

  return (
    <div className="container">
      this is play page
    </div>
  )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);