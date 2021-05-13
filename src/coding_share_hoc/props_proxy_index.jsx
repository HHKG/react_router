import React from 'react';
class Mouse extends React.Component {
  render() {
    const { x, y } = this.props.mouse
    return (
      <p>The current mouse position is ({x}, {y})</p>
    )
  }
}

class Cat extends React.Component {
  render() {
    const { x, y } = this.props.mouse
    return (
      <img src="https://img.alicdn.com/imgextra/i3/O1CN01Xw7wXy1bfq78fMLqh_!!6000000003493-2-tps-200-200.png" style={{ position: 'absolute', left: x, top: y }} alt="" />
    )
  }
}


const MouseHoc = (MouseComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.handleMouseMove = this.handleMouseMove.bind(this)
      this.state = { x: 0, y: 0 }
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <MouseComponent mouse={this.state} />
        </div>
      )
    }
  }
}
// 通过对被包裹的组件操作props,实现高阶
const EnhanceMouse = MouseHoc(Mouse)
const EnhanceCat = MouseHoc(Cat)
