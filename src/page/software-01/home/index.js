import React, { Component } from 'react';
import { Text, TouchableHighlight, WebView, View, ScrollView, Button, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../../components/TabCardView'
import { connect } from 'react-redux'
import at from './action'


class HomePage extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '首页',
    }
  };

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(at.login())
  }
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
    const { tabCardData }= this.props
    const tabItemStyle= {backgroundColor: 'red', width, height: 200}

    return (

      <ScrollView style={styles.slide1}>

        <WebView
          automaticallyAdjustContentInsets={false}
          style={{width, height: 300, }}
          source={{uri: 'https://www.baidu.com/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
        <View style={{ flex: 1 }}>

          <TabCardView {...tabCardData}>
            <View style={tabItemStyle}><Text>one</Text></View>
            <View style={tabItemStyle}><Text>one</Text></View>
            <View style={tabItemStyle}><Text>one</Text></View>
            <View style={tabItemStyle}><Text>one</Text></View>
          </TabCardView>

        </View>
      </ScrollView>

    );
  }
}


const createState = function(state) {
  console.log(state)
  return ({...state.loginIn})
}

export default connect(createState)(HomePage)