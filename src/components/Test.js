import React from 'react'

export default class Test extends React.Component {

  render(){
    const {status,load, onClick, onRealtime, realtime} = this.props;
    return <div>
      <h1>Test</h1>
      <span>{status} {load}</span>
      <button onClick={() => onClick('rafaga')}>Apreta</button>
      <button onClick={onRealtime}>realtime</button>
      <div>{realtime}</div>
    </div>
  }
}
