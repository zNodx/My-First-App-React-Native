import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { Picker } from "@react-native-community/picker";
import SteveJobs from "./src/components/SteveJobs";
import Timer from "./src/components/Timer";
import Pessoa from "./src/components/Pessoa";

export default function App(){
  const [pizzas, setPizzas] = useState([
    { id: 1, name: "Pizza de Calabresa", price: "R$ 22,00" },
    { id: 2, name: "Pizza de Mussarela", price: "R$ 24,00" },
    { id: 3, name: "Pizza de Presunto", price: "R$ 25,00" },
    { id: 4, name: "Pizza de Portuguesa", price: "R$ 26,00" },
    { id: 5, name: "Pizza de Quatro Queijos", price: "R$ 27,00" },
    { id: 6, name: "Frango com Catupiry", price: "R$ 28,00" },
  ])
  const [pizza, setPizza] = useState(1);

    return (
      <View style={{flex:1, backgroundColor:'#f1f1f1' }}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#000', marginTop:15, textAlign: "center"}}>
          Menu Pizza
        </Text>
        <Picker
          selectedValue={pizza}
          onValueChange={(itemValue) => setPizza(itemValue)}
        >
          {pizzas.map((pizza) => (
            <Picker.Item
              key={pizza.id}
              label={pizza.name}
              value={pizza.id}
            />
          ))}
        </Picker>
        <Text style={{fontSize:18, color:'#3ce', marginTop:15, textAlign: "center"}}>
          Você escolheu: {pizzas[pizza - 1].name}
        </Text>
        <Text style={{fontSize:18, fontWeight: 'bold', color:'#3ce', marginTop:15, textAlign: "center"}}>
          R$: {pizzas[pizza - 1].price}
        </Text>
      </View>
    );
  }

