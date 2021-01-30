import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {  createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Importando nossas páginas
import Home from './src/page/Home';
import Sobre from './src/page/Sobre';
import Perfil from './src/page/Perfil';

//Criando nosso stack navigation
const Stack = createStackNavigator()

//Criando nosso tab navigation
const Tab = createBottomTabNavigator()

//Criando nossa navegação da Tab
function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil">
        <Stack.Screen name="Perfil" component={Perfil}/>
        {/* Estilizando o menu superior
        e Usar a Tab Navigator*/}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: "Bem-vindo",
            headerStyle:{
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            headerLeft: null
          }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
