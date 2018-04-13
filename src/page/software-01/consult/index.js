import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Button, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TabCardView from '../../../../components/TabCardView'
const { width, height } = Dimensions.get('window');


const tabCardData = {
  headerStyle: {
    height: 40,
    backgroundColor: '#fafafa',
  },
  containerStyle: {
    height: 400
  },
  dataSource: [
    {
      active: true,
      title: 'tab one',
      context: {
        text: 'fdsafdasfdsafdsafdsafdsafdsa'
      }
    },{
      title: 'tab two',
      context: {
        text: 'ddddddddddddddddddd'
      }
    },{
      title: 'tab three',
      context: {
        text: 'aaaaaaaaaaaaaaaaaaa'
      }
    },{
      title: 'tab four',
      context: {
        text: 'ffffffffffffffffffffffff'
      }
    },
  ],
  tabChange(index, item) {
    console.log(index, item)
  }
}


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '咨询',
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
    const tabItemStyle= {backgroundColor: 'red', width, height: 200}
    return (
      <View style={styles.slide1}>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 40, flexDirection: 'row'}}>
            <Text>医院：</Text>
            <Text>西京医院</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 40, flexDirection: 'row'}}>
            <Text>医院：</Text>
            <Text>西京医院</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 40, flexDirection: 'row'}}>
            <Text>医院：</Text>
            <Text>西京医院</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>这里是咨询页面</Text>
        </TouchableNativeFeedback>

        <TabCardView {...tabCardData}>
          <View style={tabItemStyle}><Text>one</Text></View>
          <View style={tabItemStyle}><Text>one</Text></View>
          <View style={tabItemStyle}><Text>one</Text></View>
          <View style={tabItemStyle}><Text>one</Text></View>
        </TabCardView>
      </View>
    );
  }
}

