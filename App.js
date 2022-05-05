import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import SteveJobs from "./components/SteveJobs";

export default function App(){
    return (
      <View style={{flex:1, backgroundColor:'#f2f2d1'}}>
        <Text>Hello World</Text>
        <Text>My First App!</Text>
        <Text style={{color: 'red'}}> Sujeito Programador!</Text>
        <SteveJobs Width={'auto'} Height={200}  />
      </View>
    );
  }
