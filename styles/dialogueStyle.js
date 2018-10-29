import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:5,
      backgroundColor: 'rgba(0, 0, 0, .5)',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    content: {
      padding: 35,
      borderRadius:5,
      backgroundColor: 'white',
      width:Dimensions.get('window').width-100,
      margin:20
    },
    viewTitle: {
      alignItems:'center'
    },
    textTitle:{
      fontSize:16,
      fontWeight:'bold'
    },
    viewButtons:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    touchableButtons:{
      height:35,
      width:70,
      backgroundColor:'green',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
    textButton:{
      padding:5,
      fontSize:14,
      color:'white',
      margin:6
    },
    viewWait:{
        justifyContent:'center',
        flexDirection:'row'
    }
})