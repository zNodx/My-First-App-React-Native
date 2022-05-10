import React, { Component } from "react";
import { View, Text, Image, ScrollView} from "react-native";
import SteveJobs from "./src/components/SteveJobs";
import Timer from "./src/components/Timer";

export default function App(){
    return (
      <View style={{flex:1, backgroundColor:'#f2f2d1'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SteveJobs Width={'auto'} Height={250}  />
          <SteveJobs Width={'auto'} Height={250}  />
          <SteveJobs Width={'auto'} Height={250}  />
          <SteveJobs Width={'auto'} Height={250}  />
          {/* <Timer/> */}
          </ScrollView>
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <SteveJobs HoriWidth={400} Width={100} Height={200}  />
          <SteveJobs HoriWidth={400} Width={100} Height={200}  />
          <SteveJobs HoriWidth={400} Width={100} Height={200}  />
          <SteveJobs HoriWidth={400} Width={100} Height={200}  />
          </ScrollView>
      </View>
    );
  }
