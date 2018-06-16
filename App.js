import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import DataInput from './DataInput';

export default class App extends React.Component {

  render() {
    return (
	<View style={{flex:1}}>
	<View style={{justifyContent:'flex-start',alignItems:'center', backgroundColor:'blue',marginTop:20}}>
<Image style={{margin:15,width: 99, height: 120}}
	source={require('./images/checklist.png')}/>
</View>
      <View style={styles.container}>

	
        <DataInput
	name="Heart Beat"/>
        <DataInput
	name="Systolic and Diastolic Pressures"/>
	<DataInput
	name="Weight"/>
        <TouchableOpacity
	style={{marginRight:40,
	paddingRight:20,
	paddingLeft:20,
	marginLeft:40,
	marginTop:10,
	marginBottom:10,
	paddingTop:20,
	paddingBottom:20,
	borderRadius:25, 
	backgroundColor: 'purple'}}
        onPress={()=>0}>
	<Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
});
