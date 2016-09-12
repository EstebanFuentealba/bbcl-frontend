import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions/index'
import ArticleList from '../components/ArticleList';

export default connect(
  (state, ownProps) => ({
    status: state.portada.status,
    data: state.portada.data,
    load: state.portada.load
  }),
  {
    onClick: search
  }
)(ArticleList)
