import React, { useState } from 'react';
import { Text,View,Pressable } from 'react-native';
import styles from '../Counter/styles';

function Counter(){
    const [counter ,setCounter]=useState(0);
    const Increment =()=>{
        setCounter(val =>val + 1);
    };
    const Decrement =()=>{
        setCounter(val =>val - 1);
    }
    return(
       <View style={styles.container}>
           <Pressable style={styles.button}  onPress={Increment}>
               <Text style={styles.signText}>{"+"}</Text>
           </Pressable>
           <Text style={styles.counter}>{counter}</Text>
           <Pressable style={styles.button} onPress={Decrement}>
               <Text style={styles.signText}>{"-"}</Text>
           </Pressable>
       </View>
    );
}
export {Counter};