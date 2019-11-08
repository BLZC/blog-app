import React from 'react';
import {Container, Content, Header, Icon, Item, Input, Text} from 'native-base';
import {withNavigation} from 'react-navigation';
import MTabs from './components/myTabs';
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header searchBar rounded hasTabs>
        <Item>
          <Icon name="search" />
          <Text
            style={{width: '80%'}}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            去搜索
          </Text>
        </Item>
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content>
          <MTabs />
        </Content>
      </Container>
    );
  }
}

export default withNavigation(HomeScreen);
