import {
    StyleSheet,
    TextInput,
    View
} from "react-native";

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry
}: any) {

  return (

    <View style={styles.container}>

      <TextInput

        style={styles.input}

        placeholder={placeholder}

        placeholderTextColor="#9CA3AF"

        value={value}

        onChangeText={onChangeText}

        secureTextEntry={secureTextEntry}

      />

    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    marginBottom:16
  },

  input:{

    height:52,

    borderWidth:1,

    borderColor:"#E5E7EB",

    borderRadius:12,

    paddingHorizontal:16,

    fontSize:15,

    backgroundColor:"#FFFFFF"

  }

});