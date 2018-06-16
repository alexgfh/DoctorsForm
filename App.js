import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FormList from './FormList';

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',padding:5, backgroundColor:'blue' }}>
        <TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Vesa Harila</Text>
        </TouchableOpacity>
<TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Maija Lintilä</Text>
        </TouchableOpacity>
<TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Annikki Hirvi</Text>
        </TouchableOpacity>
<TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Kalevi Vaara</Text>
        </TouchableOpacity>
<TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Tyyne Hongisto</Text>
        </TouchableOpacity>
<TouchableOpacity
	style={styles.nameButton}
        onPress={()=>this.props.navigation.navigate('patient')}>
	<Text style={{color:'white', textAlign:'center'}}>Leena Kononen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nameButton: {marginRight:40,
	paddingRight:20,
	paddingLeft:20,
	marginLeft:40,
	marginTop:10,
	marginBottom:10,
	paddingTop:20,
	paddingBottom:20,
	borderRadius:25, 
	backgroundColor: 'purple'},
});

export default createStackNavigator(
  {
    screen: HomeScreen,
    patient: FormList
  },
  {
    initialRouteName: 'screen',
headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  }
);
