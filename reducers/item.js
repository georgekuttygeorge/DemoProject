let initialStage={
    items:[],
    isLoadingItems:true,
    isShowAlert:false,
    alertType:null,
    newItem:null,
    deleteItem:null
}
const item=(state=initialStage,actions)=> {
    switch (actions.type) {
      case 'itemsLoading':
      return {...state,isLoadingItems:true}
      break;
      case 'updateItems':
      return {...state,items:actions.items,isLoadingItems:false,isShowAlert:false}
      break;
      case 'addItem':
      return {...state,items:[actions.item,...state.items],isShowAlert:false}
      break;
      case 'removeItem':
      return {...state,items:[...state.items,actions.item]}
      break;
      case 'showAlert':
      return {...state,isShowAlert:true,alertType:actions.alertType}
      break;
      case 'dismissAlert':
      return {...state,isShowAlert:false,alertType:null}
      break;
      case 'addNewItem':
      return {...state,item:actions.item}
      break;
      case 'addDeleteItem':
      return {...state,deleteItem:actions.item}
      break;
      default: 
      return state;
    }
}

export default item;