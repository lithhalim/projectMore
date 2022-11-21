import React, { useEffect, useState } from 'react';
import {Text,View,Image,FlatList} from 'react-native';
import Characters from '../GraphQl/Characters';
import {gql,useQuery } from '@apollo/client';


function SliderPage() {
    const {loading,data,error}=useQuery(Characters);
  

  
  
  return (
    <View style={{padding:20}}>
        {data?
            <FlatList 
            data={data.characters.results} 
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item)=>(item.image)}
            renderItem={(item)=> 
            <Image resizeMethod='auto'  style={{width:150,height:150,margin:2}}  source={{ uri:item.item.image}}/>    }/>
        :<></>}
    </View>
  )
}

export default SliderPage
