import React, {Component} from 'react';
import {Text, Thumbnail} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

const styles = {
  Col: {
    height: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default class Category extends Component {
  render() {
    return (
      <Grid>
        <Col style={styles.Col}>
          <Thumbnail
            square
            small
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/wz32.png'}}
          />
          <Text>文章榜</Text>
        </Col>
        <Col style={styles.Col}>
          <Thumbnail
            small
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/zzb.png'}}
          />
          <Text>作者榜</Text>
        </Col>
        <Col style={styles.Col}>
          <Thumbnail
            square
            small
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/kyk.png'}}
          />
          <Text>看一看</Text>
        </Col>
        <Col style={styles.Col}>
          <Thumbnail
            square
            small
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/gc.png'}}
          />
          <Text>话题广场</Text>
        </Col>
        <Col style={styles.Col}>
          <Thumbnail
            square
            small
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/hd.png'}}
          />
          <Text>活动</Text>
        </Col>
      </Grid>
    );
  }
}
