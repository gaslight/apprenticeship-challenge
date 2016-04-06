import AltContainer from 'alt-container';
import React from 'react';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

import Prices from './Prices.jsx';
import PriceActions from '../actions/PriceActions';
import PriceStore from '../stores/PriceStore';

import LaneActions from '../actions/LaneActions';

import Editable from './Editable.jsx';



export default class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;

    return (
      <div {...props}>
        <div className="lane-header" onClick={this.activateLaneEdit}>
         <div className="lane-add-item">
            <button onClick={this.addItem}>Item</button>
          </div>


          <Editable className="lane-name" editing={lane.editing}
            value={lane.name} onEdit={this.editName} />
          <div className="lane-delete">
            <button onClick={this.deleteLane}>x</button>
          </div>
        </div>
          <div className="lane-add-item">
            <button onClick={this.addPrice}>Price</button>
          </div>
        <AltContainer
          stores={[ItemStore]}
          inject={{

            items: () => ItemStore.getItemsByIds(lane.items)

          }}
        >
          <Items
          onValueClick={this.activateItemEdit}
          onEdit={this.editItem}
          onDelete={this.deleteItem} />
        </AltContainer>
      </div>
    );
  }

  editItem(id, name, price) {
    // Don't modify if trying set an empty value
    if(!name.trim()) {
      ItemActions.update({id, editing: false});
      return;
    }

    ItemActions.update({id, name, price, editing: false});
  };

  addItem = (e) => {
    e.stopPropagation();

    const laneId = this.props.lane.id;
    const item = ItemActions.create({name: 'New Item'});

    LaneActions.attachToLane({
      itemId: item.id,
      laneId
    });
  };

  deleteItem = (itemId, e) => {
    e.stopPropagation();

    const laneId = this.props.lane.id;

    LaneActions.detachFromLane({laneId, itemId});
    ItemActions.delete(itemId);
  };

 editName = (name) => {
    const laneId = this.props.lane.id;
     if(!name.trim()) {
      LaneActions.update({id: laneId, editing: false});

      return;
      }
    LaneActions.update({id: laneId, name, editing: false});
  };


 deleteLane = () => {
    const laneId = this.props.lane.id;

    LaneActions.delete(laneId);
  };
  activateLaneEdit = () => {
    const laneId = this.props.lane.id;

    LaneActions.update({id: laneId, editing: true});
  };

  activateItemEdit(id) {
    ItemActions.update({id, editing: true});
  };



  editPrice(id, amount) {
    // Don't modify if trying set an empty value
    if(!amount.trim()) {
      return;
    }

    PriceActions.update({id, amount});
  }

  addPrice = (e) => {
    const laneId = this.props.lane.id;
    const price = PriceActions.create({amount: '$0.00'});

    LaneActions.attachToLane({
      priceId: price.id,
      laneId
    });
  };

  deletePrice = (priceId, e) => {
    e.stopPropagation();

    const laneId = this.props.lane.id;

    LaneActions.detachFromLane({laneId, priceId});
    PriceActions.delete(priceId);
  }

}