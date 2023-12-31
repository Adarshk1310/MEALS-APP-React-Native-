import { View, Text ,StyleSheet,Image} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../Data/dummy-data";
import { useSelector } from "react-redux";



function FavouritesScreen(){

    const favouriteMealsIds = useSelector((state)=>state.favouriteMeals.ids)
    const favouriteMeals =MEALS.filter((meal)=>favouriteMealsIds.includes(meal.id))
    if(favouriteMeals.length===0){
        return (<View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
                 </View>)
    }
    return<>
                <Image  blurRadius={40} style={styles.backImage} source={{uri:'https://plus.unsplash.com/premium_photo-1664640733996-0051b12f52f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
    
    <MealsList items={favouriteMeals}/>
    </> 
}

export default FavouritesScreen; 


const styles =StyleSheet.create({

    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    },
    backImage:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
    },
})