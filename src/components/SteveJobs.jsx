import React, { useState} from "react";
import {Text, Image, View, Button, StyleSheet, TextInput } from "react-native";
export default function SteveJobs({Height, Width, HoriWidth}) {
  
  const [name, setName] = useState("Steve Jobs");

  const styles = StyleSheet.create({
    button_top:{
     marginTop: 30,
     flex:1,
     height: 250,
      width: HoriWidth,
    }  
 });

  return (
    <View style={styles.button_top}>
      <Text style={{textAlign: 'center'}}>{name}</Text>
      <Text >
        { name == "Steve Jobs" ?  
       ` Steve Jobs was an American business magnate, industrialist, and inventor. He is best known as the co-founder and chief executive officer (CEO) of Apple Inc. (now a subsidiary of Alphabet Inc.). Jobs was the first American company to be worth billions of dollars, and the largest company in the world, with revenues of more than $1 billion.` :
          `This is not Steve Jobs`
        }
      </Text>
      <Image
      
          source={{ uri : 'https://sujeitoprogramador.com/steve.png' }}
          style={{ width: Width, height: Height, marginBottom: 30}}
        />
      <Button
        onPress={() => setName( name == "Mateus"  ? "Steve Jobs" : "Mateus")}
        title="Troque o nome"
        color="#841584"
      />
      <TextInput
        style={{margin: 10, borderColor: 'gray', borderWidth: 1}}
        placeholder="Digite seu nome"
        onChangeText={ text => setName(text)}
      />
    </View>
   
  );
}

