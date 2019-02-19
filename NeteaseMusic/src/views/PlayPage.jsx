import React from 'react';
import styles from "./PlayPage.scss";
import { connect } from "dva";

function PlayPage(props) {

  return (
    <div className="container">
      <div className={styles.play_page}>
        this is play page
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);