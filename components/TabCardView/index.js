import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './style'

export default class TabCardView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  static defaultProps = {
    activeBgColor: '#cd2902',
    activeColor: '#4f62cd',
    tabChange(){/*  tab 改变时调用  */},
    containerStyle: {/*  盒子样式  */},
    headerStyle: {/*   头部样式  */},
    bodyStyle: {/*  主体样式  */},
    itemStyle: {/*  切换样式*/},
  }

  _tabClick(active, item) {
    this.setState({active})
    this.props.tabChange(active, item)
  }
  _createHeader() {
    let _this = this
    const { dataSource, itemStyle = {}, activeBgColor, activeColor } = this.props
    let defaultItem = { ...styles.items, ...itemStyle }
    if(dataSource) {
      return dataSource.map((item, key) => {
        let textColor = { color: this.state.active === key ? activeColor : '#000' }
        defaultItem.borderColor =  this.state.active === key ? activeBgColor : '#fafafa'

        return (
          <TouchableHighlight
            key={key}
            style={defaultItem}
            onPress={() => _this._tabClick(key, item)}>

            <Text style={textColor}>
              {item.title}
              </Text>

          </TouchableHighlight>
        )
      })
    } else {
      return ''
    }
  }
  _createBody() {
    const { children } = this.props
    if(typeof children === 'string') {
      return <Text>{children}</Text>
    }
    return this.props.children && this.props.children[this.state.active]
  }
  render() {
    const { containerStyle = {}, headerStyle = {}, bodyStyle = {} } = this.props

    return (
      <View style={{...styles.container, ...containerStyle}}>

        {/*   tab header -- start --  */}
        <View style={{...styles.header, ...headerStyle}}>
          {this._createHeader()}
        </View>
        {/*   tab header  -- end --  */}


        {/*   tab body -- start --  */}
        <View style={{...styles.body, ...bodyStyle}}>
          {this._createBody()}
        </View>
        {/*   tab body  -- end --  */}
      </View>
    )
  }
}

