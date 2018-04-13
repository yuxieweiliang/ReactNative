import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';


const { width, height } = Dimensions.get('window');

export default {
  drawerWidth: width / 3 * 2, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    initialRouteName: 'Login', // 默认页面组件
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
      // console.log('-------->' + JSON.stringify(route))
    },
  },
  contentComponent: props => {
    const router = {
      Init: '初始化',
      User: '个人中心',
      System: '系统设置',
    }


    return (
      <View>

        {/*    这里是人物头像   */}
        <View  style={{
          paddingVertical: 40,
          paddingHorizontal: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TouchableHighlight onPress={() => props.navigation.navigate('System')}>
            <View style={{height: 100, width: 60,
              alignItems: 'center',
              justifyContent: 'center',}}>
              <Image style={{height: 60, width: 60, borderRadius: 60}} source={require('../../assets/images/a1.jpg')}/>
              <Text style={{height: 40, lineHeight: 40}}>用户名</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView style={{height: '74%'}}>
          {/*     这里是自定义导航      */}
          <SafeAreaView >
            {
              props.items.map((item, key) => {
                if(['Init', 'Login', 'Register'].indexOf(item.key) > -1) return;

                return (
                  <TouchableHighlight
                    key={key}
                    style={{
                      height: 40,
                      width: '100%',
                      borderBottomWidth: 2,
                      borderBottomColor: '#fafafa',
                      paddingLeft: 20
                    }}
                    onPress={() => props.navigation.navigate(item.key)}>
                    <Text
                      style={{
                        height: 40,
                        lineHeight: 40,
                      }}>
                      {router[item.routeName]}
                    </Text>
                  </TouchableHighlight>
                )
              })
            }
          </SafeAreaView >
        </ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight
            style={{
              height: 40,
              width: 70,
              paddingLeft: 20
            }}
            onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                height: 40,
                lineHeight: 40,
              }}>
              登陆
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              height: 40,
              width: 70,
              paddingRight: 20,
              // alignItems: 'flex-end'
            }}
            onPress={() => console.log('exit')}>
            <Text
              style={{
                height: 40,
                lineHeight: 40,
              }}>
              退出
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },
}