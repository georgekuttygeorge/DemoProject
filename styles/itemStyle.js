import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    viewList:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:10,
        borderColor:'lightgrey'
    },
    viewLineText:{
        flexDirection:'row',
        alignItems:'center'
    },
    viewLine:{
        alignItems:'center',
        justifyContent:'center',
        height:25,
        width:2,
        backgroundColor:'orange'
    },
    viewItemName:{
        paddingLeft:10
    },
    textName:{
        fontSize:20
    },
    textDate:{
        fontSize:14,
        color:'grey'
    },
    touchableDelete:{
        paddingRight:10
    }
})