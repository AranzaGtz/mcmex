import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screens/HomeScreen';
import CarritoScreen from '../Screens/CarritoScreen';
import QuejasScreen from '../Screens/QuejasScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor:"#060606",//inactiveTintColor
                tabBarShowLabel:true,//showLabel
                tabBarLabelStyle:{ //labelStyle
                    fontSize:12
                },
                tabBarStyle:{//style
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Carrito"
                component={CarritoScreen}
                options={{
                    tabBarLabel:"Carrito",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Quejas"
                component={QuejasScreen}
                options={{
                    tabBarLabel:"Quejas",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}