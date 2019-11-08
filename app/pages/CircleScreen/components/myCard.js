import React, {Component} from 'react';
import {Col, Grid} from 'react-native-easy-grid';
import {Text, Thumbnail, Card, CardItem} from 'native-base';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';

class MyCard extends Component {
  render() {
    return (
      <Card>
        <CardItem
          cardBody
          button
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}>
          <Grid style={styles.Card}>
            <Col style={styles.TitleL}>
              <Text style={styles.TextT}>
                10个常问的JS面试题,可能是最全的面试题,不要错过
              </Text>
              <Text style={styles.TextB}>191人赞 · 小皮 · 1天前</Text>
            </Col>
            <Col style={styles.TitleR}>
              <Thumbnail
                square
                style={styles.Img}
                source={{
                  uri:
                    'https://user-gold-cdn.xitu.io/2019/11/5/16e390af169d6b49?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
                }}
              />
            </Col>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  Card: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  TextT: {
    height: 55,
    marginTop: 15,
    lineHeight: 20,
  },
  TextB: {
    height: 15,
    lineHeight: 15,
    fontSize: 12,
    color: '#999',
  },
  Img: {
    width: 70,
    height: 70,
  },
  TitleL: {
    paddingLeft: 10,
    width: '75%',
  },
  TitleR: {
    width: '25%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
};
export default withNavigation(MyCard);
