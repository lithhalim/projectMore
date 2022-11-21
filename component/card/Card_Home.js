import React, { useContext } from 'react';
import { Text,View,Image,TouchableOpacity,} from 'react-native';
import { PageSelect_Context } from '../context-api/product-context';
import StyleCard from './style/CardStyle';


function Card_Home({ datause,navigation }) {
  const {image,name,id}=datause;
  const PageSelect_Context_Item=useContext(PageSelect_Context);


  const gotopage=(event)=>{
    PageSelect_Context_Item.setshowCreatItem(event)
    navigation.navigate('Page')
  }
  return (
    <View style={StyleCard.containerCard} >
      <View>
        <Image resizeMethod='auto'  style={StyleCard.imageStyle}    source={{ uri:image}}/>
      </View>
      <TouchableOpacity onPress={()=>{gotopage(id)}}>
        <Text style={StyleCard.nameSelect}>Name:{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card_Home
