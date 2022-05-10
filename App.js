import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { Picker } from "@react-native-community/picker";
import Slider from '@react-native-community/slider';
import SteveJobs from "./src/components/SteveJobs";
import Timer from "./src/components/Timer";
import Pessoa from "./src/components/Pessoa";

export default function App(){

    const [value, setValue] = useState(0);
    return ( 
      <View style={{flex:1, backgroundColor:'#f1f1f1' }}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onChange={values => setValue(values)}
            value={value}
          />
          <Text>{value}</Text>
      </View>
    );
  }

