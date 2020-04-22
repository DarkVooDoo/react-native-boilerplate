import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text

} from 'react-native';

import {Provider} from 'react-redux'
import {store} from './redux/store'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

import SongCard from './components/Index/SongCard'
import About from './components/About/About'
import { widthPorcentage } from './module/converSizes';
import IndexCard from './components/Index/IndexCard';


const Index = ({navigation})=>{
  return(
        <SafeAreaView style={styles.container}>
          <IndexCard />
          <Text>Hello World</Text>
          <Button title='About Page' onPress={()=>navigation.navigate('About')} />
        </SafeAreaView>
  )
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {message: 'Hello Worl', inputValue: ''}
  }


  render() {
    return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Index" component={Index}/>
              <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: widthPorcentage(100)
  }
});

export default App
