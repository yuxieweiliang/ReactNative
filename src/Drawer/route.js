import UserScreen from '../setting/user/index'
import SystemScreen from '../setting/system/index'
import StackScreem from '../page/index'
import LoginScreem from '../setting/login/index'
import RegisterScreem from '../setting/register/index'

export default {
  Init: {
    screen: StackScreem,
    contentOptions: {
      drawerLabel: '初始化',
      title: '初始化',
      headerTitle:'初始化',
    }
  },
  User: {
    screen: UserScreen,
    contentOptions: {
      title: '个人中心',
      headerTitle:'初始化',
    }
  },
  System: {
    screen: SystemScreen,
    contentOptions: {
      title: '系统设置',
      headerTitle:'初始化',
    }
  },
  Login: {
    screen: LoginScreem,
    contentOptions: {
      title: '登录',
      headerTitle:'初始化',
    }
  },
  Register: {
    screen: RegisterScreem,
    contentOptions: {
      title: '注册',
      headerTitle:'初始化',
    }
  }
}