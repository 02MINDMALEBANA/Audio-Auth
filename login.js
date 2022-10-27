import { View, TouchableOpacity ,Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import TextField from "./TextField";
import styles from "./styles";
import logo from './assets/logo.png';
import CustomeBtn from "./CustomeBtn";
import SecondaryBtn from "./SecondaryBtn";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}) {
    const {height, width} = useWindowDimensions();
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [isLoading,setIsLoading] = useState(false);
    
   async function login(){
      
      if(email&&password){
        setIsLoading(true);
        try{
          await signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigation.navigate('welcome');
            setIsLoading(false);
          })
        }catch(e){
          alert(e.message);
          setIsLoading(false);
        }
        
      }else{
        alert('complete the form');
      }
    }
    function forgot(){
      navigation.navigate('forgotPassword')
    }

    function signup(){
      navigation.navigate('signup')
    }
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{width: width, alignItems: 'center', flex: 1}}>
        <View style={[styles.imgContainer,{marginTop: height* 0.1, marginBottom: height* 0.05}]}>
                    <Image source={logo} resizeMode='cover' style={{width: '37.5%', height: height*0.2,}} />
                </View>
            <TextField setValue={setEmail} icon='md-mail' returnKeyType='next' name='email' placeholder='Email' style={styles.texts} />
            <TextField setValue={setPassword} icon='md-lock-closed' returnKeyType='done' name='password' placeholder='Password' />
            <View style={{marginTop: '15%'}} />
   
            <CustomeBtn name='Sign in' onPress={login} />
            {isLoading&&<ActivityIndicator size="large" color="#090979" />}
            <View style={{marginTop: '6%'}} />
         
            <SecondaryBtn name='Forgot Password? Click here' onPress={forgot}/>
            <SecondaryBtn name='Dont have an account? Sign-Up here' onPress={signup} />

        </KeyboardAvoidingView>                                             
    </SafeAreaView>
  );
}
