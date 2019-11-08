import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
} from 'native-base';

import MyMsg from './components/myMsg';
import MyList from './components/myList';
export default class MineScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header searchBar rounded hasTabs>
        <Left />
        <Body>
          <Title>我</Title>
        </Body>
        <Right />
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content>
          <MyMsg />
          <MyList />
        </Content>
      </Container>
    );
  }
}
