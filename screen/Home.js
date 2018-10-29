import React,{ Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import { Container, Header, Title, Content, Body, Button, Icon ,Input, Item } from 'native-base'
import { connect } from 'react-redux'
import  * as itemActions from '../actions/item'
import ListItem from './../components/ListItem'
import AlertDialogue from './../components/alertBox'
import styleContainer from './../styles/index'
import * as helper from './../lib/helper'

export  class App extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            inputText:null,
            inputTextError:false
        }
        this._itemAdd=this._itemAdd.bind(this)
    }
    
    _itemAdd() {
        if(this.state.inputText && helper.isString(this.state.inputText)){
           this.setState({inputTextError:false})
           let item={name:this.state.inputText}
           this.props.dispatch(itemActions.addNewItem(item))
           this.props.dispatch(itemActions.showAlert({alertType:'add'}))
           this.setState({inputText:null})
           Keyboard.dismiss()
        }
        else
           this.setState({inputTextError:true})
    }

    componentDidMount() {
        this.props.dispatch(itemActions.loadItems())
    }

    render() {
      return (
            <Container style={styleContainer.container}>
            {this.props.isShowAlert &&<AlertDialogue action={this.props.alertType}/>}
              <View style={styleContainer.viewHeaderContent}>
                <View style={styleContainer.viewHeader}>
                  <Text style={styleContainer.textHeader}>Food List</Text>
                  <Text style={styleContainer.textDateToday}>{helper.getCurrentTime()}</Text>
                </View>
                <View style={styleContainer.viewInputButton}>
                    <Input style={[styleContainer.textInput,{borderColor:this.state.inputTextError?'red':'lightgrey'}]}
                    onChangeText={(text)=>this.setState({inputText:text})}
                    placeholder=" Add new Item"
                    placeholderTextColor="lightgrey"
                    selectionColor='transparent'
                    maxLength={30}
                    value={this.state.inputText}
                    underlineColorAndroid='transparent'/>
                    <TouchableOpacity onPress={this._itemAdd}
                    style={styleContainer.viewButton}>
                        <Text style={styleContainer.textAdd}>Add</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styleContainer.viewContent}>
              {this.props.isLoadingItem && <ActivityIndicator size="large"/>}
              {!this.props.isLoadingItem && this.props.items.length==0 && 
              <Text style={styleContainer.textEmpty}>No Items Added !!</Text>}
                <FlatList
                data={this.props.items}
                renderItem={({item}) =><ListItem name={item.name} date={item.dateCreated} id={item.foodId}/>}
                keyExtractor={(item) => item.foodId.toString()} />
              </View>
          </Container>
      );
    }
}
  
 function mapStatetoProps(state) {
    return {
        items:state.feed.items,
        isShowAlert:state.feed.isShowAlert,
        alertType:state.feed.alertType,
        isLoadingItem:state.feed.isLoadingItems
    }
}
export default connect(mapStatetoProps)(App)