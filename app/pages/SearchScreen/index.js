import React from 'react';
import {
  Container,
  Content,
  Header,
  Icon,
  Item,
  Input,
  Left,
  Button,
  Right,
} from 'native-base';
import {withNavigation} from 'react-navigation';
// import MTabs from './components/myTabs';
class SearchScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header searchBar rounded hasTabs>
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Item>
          <Input placeholder="请输入搜索内容" />
        </Item>
        <Right />
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

export default withNavigation(SearchScreen);
