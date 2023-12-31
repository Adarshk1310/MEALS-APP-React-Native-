import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet,Image} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import CategorySceen from './Screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './Screens/FavouritesScreen';
import {Ionicons} from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (<Drawer.Navigator screenOptions={{
                
    headerStyle:{backgroundColor:'black'},
    headerTintColor:'white',
    sceneContainerStyle:{  backgroundColor:'transparent'},
    drawerContentStyle:{backgroundColor:'black'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'white'
}} >
    <Drawer.Screen name='Categories' component={CategorySceen} options={{
      title:"All Categories",
      drawerIcon:({color,size})=><Ionicons name='list' color={color} size={size}/>
    }}/>
    <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
      drawerIcon:({color,size})=><Ionicons name='star' color={color} size={size}/>

    }}/>

  </Drawer.Navigator>
  )
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};


export default function App() {
  return (<>
          <StatusBar style='light'/>
          <Provider store={store}>
                <ImageBackground   style={styles.backImage} source={{uri:'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2tncm91bmQlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D'}}>

          <NavigationContainer theme={navTheme} >
         
          <Stack.Navigator screenOptions={{
                
                headerStyle:{backgroundColor:'black'},
                headerTintColor:'white',
                contentStyle:{  backgroundColor:"tranparent"},
                
                
            }}>
          <Stack.Screen name='Drawer' 
                      component={DrawerNavigator} 
                      options={{
                        headerShown:false,
                        
                        }}
                        />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} options={{
           
          }} />
          <Stack.Screen name='MealDetail'
                       component={MealDetailScreen} 
                       options={{
                       title:'About the Meal'
                       }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
    </Provider>
    </>
    );
}





const styles =StyleSheet.create({
  backImage:{
      width:'100%',
      height:'100%',
      position:'absolute',
      top:0,
      left:0,
  },
  color:{
      backgroundColor:'rgba(255, 255, 255, 0.27)'
  }
})





