import React, {Component} from 'react';
import {Icon, Button, Text, Footer, FooterTab} from 'native-base';
// react-navigation引入
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//主页面引入
import HomeScreen from './pages/HomeScreen/index';
import CircleScreen from './pages/CircleScreen/index';
import MineScreen from './pages/MineScreen/index';

//子页面引入
import SearchScreen from './pages/SearchScreen/index';
import DetailScreen from './pages/DetailScreen/index';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Detail: DetailScreen,
});

const CircleStack = createStackNavigator({
  Home: CircleScreen,
  //   Details: DetailsScreen,
});

const MineStack = createStackNavigator({
  Home: MineScreen,
  //   Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeBt: {screen: HomeStack},
      CircleBt: {screen: CircleStack},
      MineBt: {screen: MineStack},
    },
    {
      tabBarPosition: 'bottom',
      tabBarComponent: props => {
        return (
          <Footer>
            <FooterTab>
              <Button
                vertical
                onPress={() => props.navigation.navigate('HomeBt')}>
                <Icon name="bowtie" />
                <Text>首页</Text>
              </Button>
              <Button
                vertical
                onPress={() => props.navigation.navigate('CircleBt')}>
                <Icon name="briefcase" />
                <Text>社区</Text>
              </Button>
              <Button
                vertical
                onPress={() => props.navigation.navigate('MineBt')}>
                <Icon name="headset" />
                <Text>我的</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      },
    },
  ),
);
