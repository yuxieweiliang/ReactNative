import React, { Component } from 'react';
import { ScrollView, Dimensions, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';


const { width, height } = Dimensions.get('window');

export default {
  drawerWidth: width / 3 * 2, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    initialRouteName: 'Init', // 默认页面组件
    activeItemKey : 'Notifications',
    labelStyle : {//标签样式
      // color : 'red',
      height : 30,
    },
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
      marginVertical: 0,
    },
    //没有作用
    onItemPress : (route) => {
      console.log('-------->' + JSON.stringify(route))
    },
  },

  contentComponent: props => {
    console.log(this)
    console.log(props)
    return (
      <ScrollView>

        {/*    这里是人物头像   */}
        <View  style={{paddingVertical: 20, paddingHorizontal: 15}}>
          <Text>ser Name</Text>
        </View>

        {/*     这里是自定义导航      */}
        <SafeAreaView >
          {
            props.items.map((item, key) => {
              if(item.key !== 'Init') {
                return (
                  <TouchableHighlight key={key} onPress={() => {

                    props.navigation.navigate(item.key)
                  }}><Text>{item.routeName}</Text></TouchableHighlight>
                )
              }
            })
          }
        </SafeAreaView >
      </ScrollView>
    )
  },
}