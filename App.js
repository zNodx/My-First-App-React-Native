import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import SteveJobs from "./src/components/SteveJobs";
import Timer from "./src/components/Timer";
import Pessoa from "./src/components/Pessoa";

export default function App(){

  const [data, setData] = useState([
    { id: 1, name: "Steve Jobs", image: "https://sujeitoprogramador.com/steve.png", description: "O Steve Jobs é um empresário americano e fundador da Apple Inc. que foi o primeiro empresário americano a ser patenteado." },
    { id: 2, name: "Tim Cook", image: "https://t2.tudocdn.net/348107?w=1920", description: "O Tim Cook é um empresário americano e fundador da Apple Inc. que foi o primeiro empresário americano a ser patenteado." },
    { id: 3, name: "Mark Zuckerberg", image: "https://www.infomoney.com.br/wp-content/uploads/2019/06/mark-zuckerberg-bloomberg-1.jpg?fit=900%2C600&quality=50&strip=all", description: "O Mark Zuckerberg é um empresário americano e fundador da Facebook, uma empresa de análise de marketing e de pesquisa de dados." },
    { id: 4, name: "Larry Page", image: "https://www.infomoney.com.br/wp-content/uploads/2020/04/GettyImages-144948917-1.jpg?fit=1280%2C875&quality=50&strip=all", description: "O Larry Page é um empresário americano e fundador da Google, uma empresa de pesquisa e desenvolvimento de software." },
  ])

    return (
      <View style={{flex:1, backgroundColor:'#f2f2d1' }}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    );
  }

