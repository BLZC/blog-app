import React from 'react';
import {Text, View} from 'react-native';
import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet';
import store from '../store/index';
const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>,
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    store.subscribe(() => {
      this.setState({show: store.getState()});
    });
    if (this.state.show) {
      this.ActionSheet.show();
    }
    return (
      <View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={
            <Text style={{color: '#000', fontSize: 18}}>
              Which one do you like?
            </Text>
          }
          options={options}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={index => {}}
        />
      </View>
    );
  }
}
