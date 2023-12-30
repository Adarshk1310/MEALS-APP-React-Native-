import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CategorySceen from './Screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './Screens/FavouritesScreen';
import {Ionicons} from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (<Drawer.Navigator screenOptions={{
                
    headerStyle:{backgroundColor:'black'},
    headerTintColor:'white',
    sceneContainerStyle:{  backgroundColor:"white"},
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

export default function App() {
  return (<>
          <StatusBar style='light'/>
          <Provider store={store}>
          <NavigationContainer>
          <Stack.Navigator screenOptions={{
                
                headerStyle:{backgroundColor:'black'},
                headerTintColor:'white',
                contentStyle:{  backgroundColor:"white"}
            }}>
          <Stack.Screen name='Drawer' 
                      component={DrawerNavigator} 
                      options={{
                        headerShown:false
                        }}
                        />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail'
                       component={MealDetailScreen} 
                       options={{
                       title:'About the Meal'
                       }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
    );
}

const styles = StyleSheet.create({
 
});
