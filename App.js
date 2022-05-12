import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList, Switch } from "react-native";
import { Picker } from "@react-native-community/picker";
import Slider from '@react-native-community/slider';
import SteveJobs from "./src/components/SteveJobs";
import Timer from "./src/components/Timer";
import Pessoa from "./src/components/Pessoa";

export default function App(){

    const [valor, setValor] = useState(false);
    console.log(valor);
    return ( 
      <View style={{flex:1, backgroundColor:'#f1f1f1' }}>
        <Switch
          value={valor}
          onValueChange={(value) => setValor(value)}
        />
        <Text>{valor ? "ATIVO" : "Inativo"}</Text>
      </View>
    );
  }

