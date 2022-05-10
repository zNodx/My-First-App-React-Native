import {View, Text, Image} from 'react-native';

export default function Pessoa({data}){
  console.log(data);
    return(
      <View style={{flex:1, margin:10,  backgroundColor:'#fff2df', alignItems: 'center'}}>
        <Text> <strong>{data.name}</strong> </Text>
        <View style={{flex:1, margin:10,  alignItems: 'center'}}>
          <Image source={{uri:data.image}} style={{width:100, height:100}}/>
        </View>
      </View>
    )
}
