import Api from '../lib/api'
import Endpoint from '../lib/endpoints'
import {store} from '../App'

export const loadItems=(params)=> {
    return function(dispatch) {
        dispatch({type:'isLoadingItems'})
        Api('get',Endpoint.getItems)
        .then( (response)=> {
            if(response.Items!=null) {
            dispatch({items:response.Items,type:'updateItems'})
            }       
        })
    }
}

export const addItem=()=> {
    let newItem=store.getState().feed.item.name;
    return function(dispatch) {
        Api('post',Endpoint.addItem,{"name":newItem})
        .then( (response)=> {
            dispatch({type:'addItem',item:response})
        })
    }
}
 
export const deleteItem=()=> {
    return function(dispatch) {
        let deleteItem=store.getState().feed.deleteItem;
        Api('delete',Endpoint.deleteItem+"/"+deleteItem.foodId)
        .then( (response)=> {
            let items=store.getState().feed.items
            var newItems = items.filter(function(el) { return el.foodId != deleteItem.foodId;}); 
            dispatch({type:'updateItems',items:newItems}) 
        })
    }
}

export const showAlert=(params)=> {
    return {type:'showAlert',alertType:params.alertType}
}

export const dismissAlert=(params)=> {
    return {type:'dismissAlert'}
}

export const addNewItem=(params)=> {
    return {type:'addNewItem',item:params}
}

export const updateDeleteItem=(params)=> {
    return {type:'addDeleteItem',item:params}
}