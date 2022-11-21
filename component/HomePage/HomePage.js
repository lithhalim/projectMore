import React, { useEffect, useState } from 'react';
import {View,TextInput,ScrollView} from 'react-native';
import Card_Home from '../card/Card_Home';
import HomePageStyle from './style/style';
import Loading_Data from '../Loading/Loading_Data';

import {gql,useQuery } from '@apollo/client';
import Characters from '../GraphQl/Characters';

function HomePage({ navigation }) {
  const [InputSange,setInputChange]=useState("");
  const {loading,data,error}=useQuery(Characters);

  if(loading){return(<Loading_Data/>)}

  return (
    <View style={{backgroundColor:"white"}}>
          <View style={HomePageStyle.search}>
            <TextInput  onChangeText={(event)=>{setInputChange(event.toLowerCase())}}  placeholder='Seach Specific Item'/> 
          </View>
          <ScrollView>
            {
              data?data.characters.results.filter((data)=>(data.name.toLowerCase().startsWith(InputSange))).map((data,i)=>(
                <Card_Home datause={data} navigation={navigation} key={i}/>
              )):<></>
            }
          </ScrollView>
    </View>
  )
}

export default HomePage
