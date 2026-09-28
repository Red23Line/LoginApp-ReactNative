import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";


export default function PrimaryButton({
  onPress
}:any){

return(

<TouchableOpacity

style={styles.button}

onPress={onPress}

>

<Text style={styles.text}>
Sign In →
</Text>


</TouchableOpacity>

);

}



const styles=StyleSheet.create({

button:{

height:52,

backgroundColor:"#4F46E5",

borderRadius:12,

justifyContent:"center",

marginTop:10

},


text:{

color:"#FFFFFF",

fontSize:16,

fontWeight:"700",

textAlign:"center"

}

});