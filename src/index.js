import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//demo: original
ReactDOM.render(<App />, document.getElementById('root'));

//demo: bind this
// class ComponentA extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "componentA"
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         console.log(this)
//     }
//     render() {
//         return <div>
//             <button onClick={this.handleClick} > test </button>
//             <button onClick={this.handleClick} > test2 </button>
//         </div>
//     }
// }
// ReactDOM.render(<ComponentA />, document.getElementById('root'))

//demo: ref
//class ComponentRef extends Component {
//     constructor() {
//         super()
//     }
//     handleChange() {
//         console.log(this.Input.value)
//     }
//     handleClick() {
//         this.Input.focus()
//     }
//     render() {
//         return <div>
//             <input ref={ input => {this.Input = input} } onChange={this.handleChange.bind(this)} />
//             <button onClick={this.handleClick.bind(this) }>click</button>
//         </div>
//     }
// }
// ReactDOM.render(<ComponentRef />,document.getElementById('root'))
