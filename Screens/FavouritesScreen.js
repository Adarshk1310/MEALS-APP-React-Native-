import { View, Text ,StyleSheet} from "react-native";
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
    return <MealsList items={favouriteMeals}/>
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
    }
})