import { View, Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView } from "react-native";
import React from "react";
import TextField from "./TextField";
import styles from "./styles";
import logo from './assets/logo.png';
import CustomeBtn from "./CustomeBtn";
import SecondaryBtn from "./SecondaryBtn";
import { useState } from "react";

import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {auth} from './firebase'

export default function ForgotPassword({navigation}) {
  const [email, setEmail]= useState('');
  const send=(()=>{
    sendPasswordResetEmail(auth, email).then(()=>{
        alert('email was sent with reset link')
        console.log('email was sent')
    }).catch((invalid)=>{
        console.log(invalid)
        alert(invalid)
    })
})


  /////
    const {height, width} = useWindowDimensions();
    function login(){
      navigation.navigate('login')
    }

   
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{width: width, alignItems: 'center'}}>
        <View style={[styles.imgContainer,{marginTop: height* 0.1, marginBottom: height* 0.05}]}>
                    <Image source={logo} resizeMode='cover' style={{width: '37.5%', height: height*0.2,}} />
                </View>
        
                <TextField setValue={setEmail} icon='md-mail' returnKeyType='next' name='email' placeholder='Email' style={styles.texts} />
            <Text> We will send you a Password  reset  link to your email</Text>
            <View style={{marginTop: '15%'}} />
            <CustomeBtn name='Send' onPress={send} />
            <View style={{marginTop: '6%'}} />
            <SecondaryBtn name='Back to Login' onPress={login} />
            
         

        </KeyboardAvoidingView>                                             
    </SafeAreaView>
  );
}
