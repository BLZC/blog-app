import React, {Component} from 'react';
import {Container, Tab, Tabs, TabHeading, Text} from 'native-base';
import TabGz from '../Tabs/tabOne';
import TabTj from '../Tabs/tabTwo';
import TabRb from '../Tabs/tabThree';
export default class MTabs extends Component {
  render() {
    return (
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text>关注</Text>
            </TabHeading>
          }>
          <TabGz />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>推荐</Text>
            </TabHeading>
          }>
          <TabTj />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>热榜</Text>
            </TabHeading>
          }>
          <TabRb />
        </Tab>
      </Tabs>
    );
  }
}
