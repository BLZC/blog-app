import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
export default class MyMsg extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://user-gold-cdn.xitu.io/2019/8/14/16c8e087eb9bcf40?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
              }}
            />
            <Body>
              <Text>小皮</Text>
              <Text note>2019/1/2</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
