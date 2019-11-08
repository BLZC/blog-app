import React from 'react';
import {Container, Content, Header, Icon, Item, Input} from 'native-base';

import MySwiper from './components/mySwiper';
import Category from './components/Category';
import Interval from '../../components/Interval';
import MyCard from './components/myCard';

export default class CircleScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header searchBar rounded hasTabs>
        <Item>
          <Icon name="search" />
          <Input placeholder="请输入搜索内容" />
          <Icon name="people" />
        </Item>
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content>
          <MySwiper />
          <Category />
          <Interval />
          <MyCard />
        </Content>
      </Container>
    );
  }
}
