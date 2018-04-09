import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    console.log(navigation)
    return {
      title: params ? params.otherParam : 'home',
    }
  };

  componentDidMount() {

  }

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (

      <Swiper style={styles.wrapper} pagingEnabled={false} showsHorizontalScrollIndicator={true} bounces={true}>
        <View style={styles.slide1}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Icon name="bars" size={30} color="#900" />
            <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
              Login with Facebook
            </Icon.Button>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Drawer', {
                itemId: 86,
                otherParam: 'anything you want here',
              })}
            />

          </View>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
          <TouchableHighlight
            style={styles.btn}
            onPress={() => this._onPressButton()}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.views}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>



    );
  }
}

