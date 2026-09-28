import { useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import InputField from "../components/InputField";

import PrimaryButton from "../components/PrimaryButton";


export default function Index(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");


  const handleLogin = ()=>{

    if(username === "" || password === ""){

      setMessage("Username dan password wajib diisi");

    }else{

      setMessage(
        "Login berhasil\nSelamat datang " + username
      );

    }

  };


  return(

    <LinearGradient

      colors={[
        "#EEF2FF",
        "#7C3AED"
      ]}

      style={styles.container}

    >


      <View style={styles.card}>


        <Image

          source={require("C:\\Users\\seanl\\LoginApp\\assets\\expo.icon\\Assets\\images\\logo.png")}

          style={styles.logo}

        />


        <Text style={styles.title}>
          Welcome Back
        </Text>


        <Text style={styles.subtitle}>
          Sign in to continue
        </Text>



        <InputField

          placeholder="Username"

          value={username}

          onChangeText={setUsername}

        />



        <InputField

          placeholder="Password"

          value={password}

          onChangeText={setPassword}

          secureTextEntry={true}

        />



        <PrimaryButton

          onPress={handleLogin}

        />



        <Text style={styles.message}>
          {message}
        </Text>



      </View>


    </LinearGradient>


  );

}



const styles = StyleSheet.create({


  container:{

    flex:1,

    justifyContent:"center",

    alignItems:"center",

    padding:20

  },


  card:{

    width:340,

    backgroundColor:"#FFFFFF",

    borderRadius:24,

    padding:20,

    elevation:5

  },


  logo:{

    width:70,

    height:70,

    alignSelf:"center",

    marginBottom:15

  },


  title:{

    fontSize:28,

    fontWeight:"700",

    textAlign:"center",

    color:"#111827"

  },


  subtitle:{

    fontSize:14,

    color:"#6B7280",

    textAlign:"center",

    marginBottom:30

  },


  message:{

    marginTop:20,

    textAlign:"center",

    fontWeight:"bold"

  }


});