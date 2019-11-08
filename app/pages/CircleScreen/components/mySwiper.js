import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={0}>
          <Image
            style={styles.child}
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/blog-img1.jpg'}}
          />
          <Image
            style={styles.child}
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/blog-img2.jpg'}}
          />
          <Image
            style={styles.child}
            source={{uri: 'http://pzpxyio9x.bkt.clouddn.com/blog-img3.jpg'}}
          />
        </SwiperFlatList>
      </View>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    flex: 1,
    height: 180,
    width,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
});
