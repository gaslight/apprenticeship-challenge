import React from 'react'

export default class Item extends React.Component {
  render() {
    const { id, isEditing, ...props } = this.props

    return (
      <li {...props}>{props.children}</li>
    )
  }
}
  ////////////////////////////////////////////////////////////////
  // working Items
  ////////////////////////////////////////////////////////////////
  //
  // constructor(props) {
    // super(props)

    // this.state = {
      // isEditing: false
    // }
  // }

  // render() {
    // if(this.state.isEditing) {
      // return this.renderEdit()
    // }

    // return this.renderItem()
  // }

  // // called in render()
  // renderEdit = () => {
    // return (
      // <div>
        // <input type="text"
          // ref={(event) => 
            // // selectionStart specifies the index of the first selected character
            // (event ? event.selectionStart = this.props.text.length : null)
          // }
          // autoFocus={true}
          // defaultValue={this.props.text}
          // onBlur={this.finishEdit}
          // onKeyPress={this.checkEnter} 
        // />
      // </div>
    // )
  // }

  // renderDelete = () => {
    // return <button onClick={this.props.onDelete}>deleteItem</button>
  // }

  // // called in render()
  // // normal state without editing
  // renderItem = () => {
    // const onDelete = this.props.onDelete

    // return (
      // <div onClick={this.edit}>
        // <span>{this.props.text}</span> {onDelete ? this.renderDelete() : null}
      // </div>
    // )
  // }

  // // called in renderItem div
  // // if div is clicked start editing
  // edit = () => {
    // this.setState({
      // isEditing: true
    // })
  // }

  // // called in input
  // // if enter is pressed finish editing
  // checkEnter = (e) => {
    // if(e.key === 'Enter') {
      // this.finishEdit(e)
    // }
  // }

  // // called in input
  // // leave editing state
  // finishEdit = (e) => {
    // const value = e.target.value
    // const id = this.props.id

    // if(this.props.onEdit) {
      // this.props.onEdit(id, value)

      // this.setState({
        // isEditing: false
      // })
    // }
  // }
// }
