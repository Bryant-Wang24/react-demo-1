import React from 'react'


class App extends React.Component {
  constructor(props) {
    super()
    this.state = { x: 1, y: 2 }
  }
  onClick = () => {
    this.setState({
      x: this.state.x + 1,
    })
    this.setState({
      x: this.state.x + 1,
    })
  }
  // onClick = () => {
  //   this.setState({
  //     x: this.state.x + 1,
  //   }, () => {
  //     this.setState({
  //       x: this.state.x + 1,
  //     })
  //   })
  // }
  onClick2 = () => {
    this.setState((state) => ({ x: state.x + 2 }))
    this.setState((state) => ({ x: state.x + 2 }))
  }
  render() {
    return (
      <div className="App">
        App<button onClick={this.onClick}>+1</button>
        <B name={this.state.x} />
      </div>
    )
  }
}

class B extends React.Component {
  componentWillReceiveProps(nextProps, nextContent) {
    console.log('props变化了');
  }
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}


export default App;
