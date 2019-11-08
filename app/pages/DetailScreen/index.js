import React from 'react';
import {
  Container,
  Content,
  Header,
  Icon,
  Body,
  Title,
  Item,
  Input,
  Left,
  Button,
  Right,
} from 'native-base';
import {withNavigation} from 'react-navigation';
import DetailCard from './components/detailCard';
class SearchScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-back"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title>小皮</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="heart" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content>
          <DetailCard />
        </Content>
      </Container>
    );
  }
}

export default withNavigation(SearchScreen);
