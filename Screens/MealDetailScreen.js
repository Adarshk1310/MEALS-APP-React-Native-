import { Text,View,Image,StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../Data/dummy-data";
import MealDetails from "../components/mealdetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";


function MealDetailScreen({route,navigation}){
    const mealId =route.params.mealId;
    const favouriteMealsIds= useSelector((state)=>state.favouriteMeals.ids)
    const dispatch =useDispatch();
    const selectedMeal =MEALS.find((meal)=>meal.id===mealId);
    const mealIsFavourite = favouriteMealsIds.includes(mealId);


    function changeFavouriteStatusHandler(){
        if(mealIsFavourite){
           dispatch(removeFavourite({id:mealId}));
        }else{
            dispatch(addFavourite({id:mealId}));
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon={mealIsFavourite?"star":'star-outline'} color="white" onPress={changeFavouriteStatusHandler} />
            }
        })
    },[navigation,changeFavouriteStatusHandler])



    return <>
                <ScrollView style={styles.rootContainer}   showsVerticalScrollIndicator={false}>
                                                    
        <View>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} 
                    complexity={selectedMeal.complexity} 
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}/>

        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </View>
        </View>
    </View>
    </ScrollView></> 
}


export default MealDetailScreen;


const styles =StyleSheet.create({
    rootContainer:{
        marginTop:10,
        marginBottom:26,
        marginHorizontal:10
    },
    image:{
        width:'90%',
        margin:'5%',
        borderRadius:10,
        height:300
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        marginVertical:8,
        textAlign:'center',
        color:'black'

    },
    detailText:{
        color:'black',
        fontWeight:'bold',

    },
    listContainer:{
        width:'95%',

    },
    listOuterContainer:{
        alignItems:'center',
    },
 

})