import React, { Fragment } from 'react';
import { connect } from "dva";

function Recomment(props) {

  return (
    <Fragment>
      this is radio page
    </Fragment>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recomment);