import {StyleSheet} from 'react-native';

const StyleCard=StyleSheet.create({
    containerCard:{
    width:"90%",height:300,flex:1,borderWidth:1,borderColor:"white",marginBottom:30,borderRadius:30,marginLeft:"auto",marginRight:"auto",overflow:"hidden",
    shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 7,
        },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

    }
    ,imageStyle:{width:"100%",height:250}

    ,nameSelect:{textAlign:"center",padding:10,fontWeight:"bold",fontSize:18,color:"black",backgroundColor:"silver"}
})

export default StyleCard