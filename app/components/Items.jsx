import React from 'react'
import Item from './Item'

export default class Items extends React.Component {
  render () {
    const {items, populateForm, onDelete, onCheck, ...props} = this.props

    return (
      <ul className='items'>{items.map((item) =>
        <Item
          className='item'
          key={item.id}
          id={item.id}
          sku={item.sku}
          text={item.text}
          price={item.price}
          checked={item.checked}
          onCheck={onCheck.bind(null, item.id)}
          populateForm={populateForm.bind(null, item)}
          onDelete={onDelete.bind(null, item.id)}>
        </Item>
      )}</ul>
    )
  }
}

const { string, bool, func, arrayOf, shape} = React.PropTypes

Items.propTypes = {
  items: arrayOf(shape({
    id: string.isRequired,
    sku: string.isRequired,
    text: string.isRequired,
    price: string.isRequired,
  }).isRequired).isRequired,
  populateForm: func.isRequired
}
