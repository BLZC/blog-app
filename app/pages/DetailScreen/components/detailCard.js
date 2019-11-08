import React, {Component} from 'react';
import {Image} from 'react-native';
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
} from 'native-base';
export default class DetailCard extends Component {
  render() {
    return (
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail
                small
                source={{
                  uri:
                    'https://user-gold-cdn.xitu.io/2019/8/14/16c8e087eb9bcf40?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                }}
              />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    'https://user-gold-cdn.xitu.io/2019/11/5/16e390af169d6b49?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
                }}
                style={{height: 200, width: '100%', flex: 1}}
              />
              <Text>
                JSONP实现跨域请求的原理就是动态创建script标签，然后利用script的src
                不受同源策略约束来跨域获取数据。JSONP
                主要由回调函数和数据两部分组成。回调函数的名字一般是在请求中指定的。而数据就是传入回调函数中的
                JSON
                数据。我们一般可以在全局定义一个回调函数，然后在script标签里传入回调函数即可：
                window.handleData = function(data)
                {
                  // ...
                }
                let script = document.createElement("script"); script.src =
                "https://xxxx.com/v0/search?q=xuxi&callback=handleData";
                document.body.insertBefore(script, document.body.firstChild);
                复制代码这样我们就能在回调函数handleData中拿到服务器接口返回的数据了。
                虽然jsonp实现跨域方式很简单，但是只支持get请求，对传输的数据量有一定限制。cors跨域是目前我们用的比较多的本地调试方式，原理就是在服务端设置响应头header的Access-Control-Allow-Origin字段，这样浏览器检测到header中的Access-Control-Allow-Origin，这样就可以跨域了。
                至于我们设置了cors之后在network中出现了两次请求的问题，其实涉及到cors跨域的请求预检，分为简单请求和非简单请求两种，这块知识可以单独抽离出一篇文章，感兴趣的可以自己学习了解一下。
                作者：徐小夕_上海
                链接：https://juejin.im/post/5dc301a76fb9a04a7b29cdc3 来源：掘金
                著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
