/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {increment,decrement} from './actions/actions'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Modal,
  TextInput
} from 'react-native';
import { INCREMENT } from './actions/constants';
import {connect} from 'react-redux'


class App extends Component {
 
  constructor(props){
    super(props)
    
  

  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{flex:0.2,justifyContent:'center',alignContent: 'center'}}>
      <Text style={{alignSelf:'center'}}>DEMO APP</Text>
      </View>
      <View style={styles.container}>
      
      <Button 
      onPress={
        this.props.increment
      }
     
      testID="incrementButton"
      title = "Increment"
      accessibilityLabel="incrementButton"
     />
      


        <Text style={styles.welcome} testID="counterValueText" accessibilityLabel="counterValueText">
         {this.props.count.counter}
        </Text>
        <Button 
      onPress={
        this.props.decrement
      }
     
      testID="decrementButton"
      title = "Decrement"
      accessibilityLabel="decrementButton"
     />
  <Modal
  visible={true}
  transparent={true}
  onRequestClose={()=>console.log('onREquest close')}
  accessibilityLabel='modal'
  >
  <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)'}}>
  
      <TextInput accessibilityLabel='textInput' style={{height: 40,
       borderColor: 'white', borderWidth: 1,backgroundColor:'white',padding:10,justifyContent:'center',alignItems:'center'}}>
      
      </TextInput>
      <View style={{padding:20}}>
      
      </View>
      <Button title='Click Me' onPress={()=>console.log('clicked')} accessibilityLabel='button' style={{padding:20}}>
      
      </Button>
  </View>
  </Modal>
  
        
      </View>
      </View>
    );
  }
}

// const App = (props)=>{

//   //const{count} = props
//   console.log("props")
//   console.log(props)
//   constructor(props){
//       super(props)
//   }
  
//   return (
//           <View style={styles.container}>
//           <TouchableHighlight 
//           onPress={
//             props.increment
//           }
//          >
//           <Text>
//             Increment
//             </Text>
    
//             </TouchableHighlight>
//             <Text style={styles.welcome}>
//              {props.count.counter}
             
//             </Text>
//             <TouchableHighlight 
//             onPress={props.decrement}
//             >
//             <Text>
//               Decrement
//               </Text>
      
//               </TouchableHighlight>
//           </View>
//         )
// }

 const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapDispatchToProps")
  console.log(ownProps);
  return {
    increment :() => dispatch(increment()),
    decrement:() => dispatch(decrement())
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


const styles = StyleSheet.create({
  container: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
