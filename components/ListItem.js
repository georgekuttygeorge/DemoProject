import React, { Component } from 'react';
import { NativeModules, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import * as itemActions from '../actions/item'
import { itemStyle } from './../styles/index'
import * as helper from './../lib/helper'

export class List extends React.PureComponent {

    constructor(props) {
          super(props)
          this._deleteItem=this._deleteItem.bind(this)
    }

    _deleteItem() {
          let item ={foodId:this.props.id,name:this.props.name,dateCreated:this.props.date}
          this.props.dispatch(itemActions.updateDeleteItem(item))
          this.props.dispatch(itemActions.showAlert({alertType:'remove'}))
    }

    render() {
        return (
          <View style={itemStyle.viewList}>
            <View style={itemStyle.viewLineText}>
              <View style={itemStyle.viewLine}/>
                <View style={itemStyle.viewItemName}>
                <Text style={itemStyle.textName}>{this.props.name}</Text>
                <Text style={itemStyle.textDate}>{helper.formatDate(this.props.date)}</Text>
              </View>
            </View>
            <TouchableOpacity style={itemStyle.touchableDelete} onPress={this._deleteItem}>
              <Icon name='md-close-circle'/>
            </TouchableOpacity>
          </View>
        );
    }
}
 
export default connect()(List)