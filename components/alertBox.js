import React,{ Component } from 'react'
import { View,Text,ActivityIndicator,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import  * as itemActions from '../actions/item'
import { alertDialogueStyle } from './../styles/index'

class Alert extends Component {
  
    constructor(props) {
        super(props)
        this.state={stage:1}
        this._changeStage=this._changeStage.bind(this)
        this._getTitle=this._getTitle.bind(this)
        this._dismissAlert=this._dismissAlert.bind(this)
    }
  
    _changeStage(stage) {
        this.setState({stage:stage})
        if(this.props.action=='add')
        this.props.dispatch(itemActions.addItem())
        else
        this.props.dispatch(itemActions.deleteItem())
    }
  
    _getTitle() {
  	    switch(this.props.action) {
  	    	case "add":
  	    	 return "Do you  want to add Item ?"
  	    	 break;
  	    	case "remove":
  	    	 return "Do  you  want to delete Item ?"
               break;
        }
    }
  
    _dismissAlert() {
        this.props.dispatch(itemActions.dismissAlert())
    }
    
    _addItem() {
        this.props.dispatch(itemActions.addItem())
    }
    
    _deleteItem() {
        this.props.dispatch(itemActions.deleteItem())
    }

    render() {
        return(
            <View style={alertDialogueStyle.container}>
              <View style={alertDialogueStyle.content}>
              {this.state.stage==1? 
                <View style={alertDialogueStyle.viewTitle}>
                  <Text style={alertDialogueStyle.textTitle}>{this._getTitle()}</Text>
                  <View style={alertDialogueStyle.viewButtons}>
		    	    <TouchableOpacity style={alertDialogueStyle.touchableButtons} onPress={()=>this._changeStage(2)}>
	                  <Text style={alertDialogueStyle.textButton}>Okay</Text>
	                </TouchableOpacity> 
	                <TouchableOpacity style={alertDialogueStyle.touchableButtons} onPress={this._dismissAlert}>
	                  <Text style={alertDialogueStyle.textButton}>Cancel</Text>
	                </TouchableOpacity>
                  </View>           
                </View>:
                <View style={alertDialogueStyle.viewWait}>
                  <Text style={alertDialogueStyle.textTitle}>Please Wait...  </Text>
                  <ActivityIndicator size="large"/>
                </View> 
              } 
              </View>
            </View>
        );
    }
}

export default connect()(Alert)