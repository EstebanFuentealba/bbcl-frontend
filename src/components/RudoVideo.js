import React from 'react'

export default class RudoVideo extends React.Component {

  render(){
    let {article:{video_rudo_destacado}} = this.props;
    return (
      <div>
        <iframe src={video_rudo_destacado}
          frameborder={0}
          allowfullscreen></iframe>
      </div>
    );
  }
}
