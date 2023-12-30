import { View,Text, Pressable,Image,StyleSheet,Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./mealdetails";


function MealItem({id,title,imageUrl,duration,complexity,affordability}){

    const navigation =useNavigation();
    
    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId:id
        });
    }

    return <View style={styles.mealItem}>
        <Pressable  style={({pressed})=>pressed?styles.buttonPressed:null} 
                    android_ripple={{color:'lightgrey'}}
                    onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
            <View>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </View>
        </Pressable>
    </View>
}

export default MealItem;


const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS==='android'? 'hidden':'visible',
        backgroundColor:'white',
        elevation:4
    },
    buttonPressed:{
        opacity:0.8
    },
    image:{
        width:'100%',
        height:200
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
   
})