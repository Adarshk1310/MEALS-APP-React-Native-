import { Pressable, View ,Text,StyleSheet,Platform} from "react-native";



function CategoryGridTile({title,color,onPress}){

    

    return <View style={styles.gridItem} >
        <Pressable style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]} 
        android_ripple={{color:'lightgrey'}}
        onPress={onPress} >
            <View style={[styles.innerContainer,{backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
        </View>

}
 


const styles =StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        overflow: Platform.OS==='android'? 'hidden':'visible'
    },
    button:{
        flex:1,
    },
    buttonPressed:{
    opacity:0.5
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        
    }
})




export default CategoryGridTile;