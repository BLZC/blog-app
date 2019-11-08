import React, {Component} from 'react';
import {Col, Grid} from 'react-native-easy-grid';
import {Text, Thumbnail, Icon} from 'native-base';

const styles = {
  Col: {
    height: 10,
    backgroundColor: '#eee',
  },
  Title: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  Text1: {
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
  },
  Text2: {
    height: 40,
    lineHeight: 40,
    textAlign: 'right',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#999',
  },
  Img: {
    width: 18,
    height: 18,
  },
  TitleL: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleR: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};
export default class Interval extends Component {
  render() {
    return (
      <>
        <Grid>
          <Col style={styles.Col} />
        </Grid>
        <Grid style={styles.Title}>
          <Col style={styles.TitleL}>
            <Thumbnail
              square
              style={styles.Img}
              source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/hot.png'}}
            />
            <Text style={styles.Text1}>热门文章</Text>
          </Col>
          <Col style={styles.TitleR}>
            <Thumbnail
              square
              style={styles.Img}
              source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/shezhi.png'}}
            />
            <Text style={styles.Text2}>定制热门</Text>
          </Col>
        </Grid>
      </>
    );
  }
}
