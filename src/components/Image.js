import React from 'react'

export default class Image extends React.Component {

  render(){
    let {article:{images, post_url}} = this.props;
    return (
      <a href={post_url}>
        <figure>
          <img src={'http://media.biobiochile.cl/wp-content/uploads/' + images.medium} />
          <figcaption></figcaption>
        </figure>
      </a>
    );
  }
}
