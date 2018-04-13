'use strict';

// import * as types from '../constants/loginTypes'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
  tabCardData: {
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
  },
  status: '点击登录',

  isSuccess: false,

  user: null,

}

// 不同类别的事件使用switch对应处理过程

export default function loginIn(state=initialState, action) {

  switch (action.type) {

    case 'LOGIN_IN_DOING':

      return {

        ...state,

        status: '正在登陆',

        isSuccess: false,

        user: null,

      }

      break;

    case 'LOGIN_IN_DONE':

      return {

        ...state,

        status: '登陆成功',

        isSuccess: true,

        user: action.user,

      }

      break;

    case 'LOGIN_IN_ERROR':

      return {

        ...state,

        status: '登录出错',

        isSuccess: true,

        user: null,

      }

      break;

    default:

      return state;

  }

}
