import React, {Component} from 'react';
import MyCard from '../components/myCard';
import MySheet from '../../../components/actionSheet';

export default class TabOne extends Component {
  render() {
    return (
      <>
        <MyCard
          onpress={() => {
            console.log(123);
          }}
        />
        <MySheet />
      </>
    );
  }
}
