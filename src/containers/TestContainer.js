import React from 'react'
import { connect } from 'react-redux'
import { search, realtime } from '../actions/index'
import Test from '../components/Test';

export default connect(
  (state, ownProps) => ({
    status: state.portada.status,
    data: state.portada.data,
    load: state.portada.load,
    realtime: state.realtime.message
  }),
  {
    onClick: search,
    onRealtime: realtime
  }
)(Test)
