import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
export default class MyList extends Component {
  render() {
    return (
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#FF9501'}}>
              <Icon active name="airplane" />
            </Button>
          </Left>
          <Body>
            <Text>消息中心</Text>
          </Body>
          <Right>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>我赞过的</Text>
          </Body>
          <Right>
            <Text />
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>收藏集</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    );
  }
}
