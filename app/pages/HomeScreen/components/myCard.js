import React, {Component} from 'react';
import {Image} from 'react-native';
import store from '../../../store';
import {share} from '../../../store/action/index';
import {withNavigation} from 'react-navigation';

import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // actionSheet show
  Show = () => {
    store.dispatch(share());
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem style={styles.header}>
            <Left>
              <Thumbnail
                small
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
          <CardItem>
            <Text style={styles.title}>9个项目助你成为2019年前端大神</Text>
          </CardItem>
          <CardItem
            cardBody
            button
            onPress={() => {
              this.props.navigation.navigate('Detail');
            }}>
            <Grid>
              <Col style={styles.colL}>
                <Text style={styles.colLT}>
                  DNS年度热文,读完感觉不错,所以翻译出来供大家参考,个人水平有限,文中可能会有一些错误,可以在评论区指正...
                </Text>
              </Col>
              <Col style={styles.colR}>
                <Image
                  source={{
                    uri:
                      'https://user-gold-cdn.xitu.io/2019/11/5/16e390af169d6b49?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
                  }}
                  style={styles.img}
                />
              </Col>
            </Grid>
          </CardItem>
          <CardItem style={styles.bot}>
            <Left>
              <Button transparent iconLeft>
                <Icon active name="thumbs-up" />
                <Text>12</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent style={styles.btnC}>
                <Icon active name="chatbubbles" />
                <Text>4</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent onPress={this.Show}>
                <Icon active name="share" />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = {
  header: {
    paddingTop: 15,
    height: 45,
  },
  title: {
    fontWeight: '700',
  },
  img: {
    height: 100,
    width: 100,
    flex: 1,
  },
  colL: {
    height: 100,
    width: '70%',
  },
  colLT: {
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  colR: {
    height: 100,
    flex: 1,
    justifyContent: 'flex-end',
  },
  bot: {
    height: 40,
  },
  btnC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default withNavigation(MyCard);
