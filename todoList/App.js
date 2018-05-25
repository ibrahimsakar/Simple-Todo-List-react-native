/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import MyButton from './button';

const items = [];

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    
    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDo: ''
  }

  addItem() {

    items.push(this.state.toDo)

    this.setState({ toDo: '' })
  }

  renderItem(item){
    return (
      <View key={ item } style={{ backgroundColor: 'gray', height: 100, margin: 8, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: 'white', fontSize: 24 }}>
         { item } 
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 21 : 0 }}>
        <View style={{ backgroundColor: 'yellow', height: 100, flexDirection: 'row', padding: 8}}>
          <View style={{ flex: 4, marginRight: 8 }}>
            <TextInput value={ this.state.toDo } onChangeText={ (value) => this.setState({ toDo: value }) } placeholder={'Write here what you want'} style={{ backgroundColor: '#f4f4f4', height: 80, borderRadius: 12, paddingLeft: 8 }} />
          </View>

          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <MyButton onPress={ this.addItem } text={'Add'} />
          </View>
        </View>

        <ScrollView>
          {
            items.map((item) => this.renderItem(item))
          }
        </ScrollView>

      </View>
    );
  }
}