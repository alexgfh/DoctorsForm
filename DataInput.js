import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { CheckBox } from "react-native-elements";

export default class DataInput extends React.Component {
	state = {checked:false};
  render() {
    return (
      <View style={[{flexDirection: "row",padding:2, alignItems:'flex-start', borderRadius:30, margin:10},
	this.state.checked?{backgroundColor:'green'}:{backgroundColor:'purple'}]}>

	<CheckBox
              containerStyle={{
                width: 50,
                backgroundColor: "transparent",
                borderWidth: 0
              }}
              checked={this.state.checked}
              checkedColor="black"
              onPress={() => {
                this.setState({ checked: !this.state.checked });
              }}
	/>
        <Text style={{color:'white',borderWidth:0,padding:8}}>{this.props.name}</Text>
      </View>
    );
  }
}


