import React from 'react'
import Article from './Article';
import LazyLoad from 'react-lazyload';

export default class ArticleList extends React.Component {

  render(){
    const {data} = this.props;
    return (
      <ul>
      {
        data.map(article => {
          return(
            <LazyLoad key={article.ID}  height={200}>
              <Article article={article}/>
            </LazyLoad>
          );
        })
      }
      </ul>
    )
  }
}
