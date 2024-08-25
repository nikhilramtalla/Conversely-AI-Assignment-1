import React, {Component} from 'react'
import './index.css'

class Matrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matrix: Array(9).fill(null),
      clickOrder: [],
    }
  }

  handleClick = index => {
    const {matrix, clickOrder} = this.state

    if (matrix[index] === null) {
      const newMatrix = [...matrix]
      newMatrix[index] = 'green'
      this.setState({
        matrix: newMatrix,
        clickOrder: [...clickOrder, index],
      })
    }
  }

  handleFinalClick = () => {
    const {matrix, clickOrder} = this.state
    const newMatrix = [...matrix]
    clickOrder.forEach((idx, i) => {
      setTimeout(() => {
        newMatrix[idx] = 'orange'
        this.setState({matrix: [...newMatrix]})
      }, i * 1000)
    })
  }

  render() {
    const {matrix, clickOrder} = this.state

    return (
      <div className="matrix-container">
        {matrix.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              if (index === clickOrder[8]) {
                this.handleFinalClick()
              } else {
                this.handleClick(index)
              }
            }}
            className="matrix-box"
            style={{backgroundColor: color ? color : '#ddd'}}
          >
            {index + 1}
          </div>
        ))}
      </div>
    )
  }
}

export default Matrix
