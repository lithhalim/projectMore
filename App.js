// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './component/HomePage/HomePage';
import Page_Select from './component/Pages/Page';
import { PageSelect_Provider } from './component/context-api/product-context';


import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';




// Create a client
const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});





function App() {
  return (
    <ApolloProvider client={client}>
        <PageSelect_Provider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Page" component={Page_Select} />
              </Stack.Navigator>
            </NavigationContainer>
        </PageSelect_Provider>
    </ApolloProvider>
  );
}

export default App;
