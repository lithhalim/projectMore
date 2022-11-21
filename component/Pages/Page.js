import React, { useContext, useEffect, useState } from 'react';
import { Text,View,Image} from 'react-native';
import { PageSelect_Context } from '../context-api/product-context';
import Loading_Data from '../Loading/Loading_Data';
import SliderPage from './SliderPage';
import PageStyle from './style/style';
import {gql,useQuery } from '@apollo/client';


function Page_Select() {
  const PageSelect_Context_Item=useContext(PageSelect_Context);
  const CharacterSpecific=gql`
  {
    character(id:"${PageSelect_Context_Item.showCreatItem}"){
      name,
      id,
      status,
      species,
      type,
      gender,
      origin{
        name
      }
      ,location{
        name
      },
      created,
      image
    }
  }
  `
const {loading,data,error}=useQuery(CharacterSpecific);

if(loading){return(<Loading_Data/>)}

  return (
    <View>
        <View style={{backgroundColor:"white"}}>
          <View>
            <Image resizeMethod='auto'  style={PageStyle.image}  source={{ uri:data?.character.image}}/>
          </View>
          <View style={{padding:20}}>
            <Text style={PageStyle.FirstText}>{data?.character.name}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",maxWidth:"100%",paddingTop:20,paddingBottom:20,flexWrap:"wrap"}}>
              <Text style={PageStyle.SecandText}><Text style={{fontSize:16,fontWeight:"bold"}}>status:</Text>{data?.character.status}</Text>
              <Text style={PageStyle.SecandText}><Text style={{fontSize:16,fontWeight:"bold"}}>species:</Text>{data?.character.species}  </Text>
              <Text style={PageStyle.SecandText}><Text style={{fontSize:16,fontWeight:"bold"}}>gender:</Text>{data?.character.gender} </Text>
              <Text style={PageStyle.SecandText}><Text style={{fontSize:16,fontWeight:"bold"}}>gender:</Text>{data?.character.gender} </Text>
              <Text style={PageStyle.SecandText}><Text style={{fontSize:16,fontWeight:"bold"}}>gender:</Text>{data?.character.gender} </Text>
            </View>
          </View>

          <SliderPage />
        </View>
    </View>

  )
}

export default Page_Select
