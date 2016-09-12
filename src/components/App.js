import React from 'react'
import TestContainer from '../containers/TestContainer';
import ArticleListContainer from '../containers/ArticleListContainer';

export default class App extends React.Component {

  render(){
    return (
      <div>
        <TestContainer />
        <ArticleListContainer />
      </div>
    );
  }
}
