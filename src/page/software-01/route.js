import Icon from 'react-native-vector-icons/dist/FontAwesome';

// 首页
import HomeScreen from './home/index';
// 咨询
import ConsultScreen from './consult/index';
// 推荐
import RecommendScreen from './recommend/index';
// 我的
import UserScreen from './user/index'


const config = {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}


export default {
  Home: {
    screen: HomeScreen,
    // 这里可以设置所有的
    navigationOptions: {
      ...config
    },
  },
  Consult: {
    screen: ConsultScreen,
    // 这里可以设置所有的
    navigationOptions: {
      ...config
    },
  },
  Recommend: {
    screen: RecommendScreen,
    navigationOptions: {
      ...config,
    }
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      ...config,
      header: null
    }
  },
}