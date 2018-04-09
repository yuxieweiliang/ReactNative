import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { navigation } from 'react-navigation';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  _onPressButton() {
    Alert.alert('Button has been pressed!');
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    console.log(navigation)
    return {
      title: params ? params.otherParam : 'login',
    }
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
    <ImageBackground style={{height,width}} source={require('../../assets/images/bg.jpg')} resizeMode='cover'>
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('../../icon.jpg')}
        />
        <Text style={styles.welcome}>
          注册 | 登陆
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid="transparent"
          placeholder="用户名"
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid="transparent"
          placeholder="密码"
          value={this.state.password}
        />
        <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
          <Text>按钮</Text>
        </TouchableHighlight>

        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
        <Button title="Learn More" style={styles.button} onPress={() => this.props.navigation.goBack()}
                color="#841584"/>
      </View>
    </ImageBackground>
    );
  }
}
