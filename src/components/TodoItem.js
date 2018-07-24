import React  from 'react'

// class TodoItem extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const items = this.props.tasks
//     items.map((item) => {

//     })
//     return (
//       <li>{}</li>
//     )
//   }
// }
const TodoItem = (props) => {
  return(
    <li>{props.title}</li>
  )
}


export default TodoItem
