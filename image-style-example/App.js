import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Content from './components/Content';
import BackgroundColor from './components/BackgroundColor';
import Border from './components/Border';
import Opacity from './components/Opacity';
// import Overflow from './components/Overflow';
import OverlayColor from './components/OverlayColor';
import ResizeMode from './components/ResizeMode';
import TintColor from './components/TintColor';

const styles = StyleSheet.create({
  headerView: {
    marginTop: 20,
  },
  contentsView: {
    flex: 1,
    marginTop: 10,
  },
  contentStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  bodyStyle: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'dotted',
    borderWidth: 2,
    padding: 20,
  }
});

const contents = [
  { title: 'BackgroundColor', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: BackgroundColor, bodyStyle: styles.bodyStyle },
  { title: 'Border', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: Border, bodyStyle: styles.bodyStyle },
  { title: 'Opacity', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: Opacity, bodyStyle: styles.bodyStyle },
  // { title: 'Overflow', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: Overflow, bodyStyle: styles.bodyStyle },
  { title: 'OverlayColor', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: OverlayColor, bodyStyle: styles.bodyStyle },
  { title: 'ResizeMode', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: ResizeMode, bodyStyle: styles.bodyStyle },
  { title: 'TintColor', titleStyle: styles.subTitle, viewStyle: styles.contentStyle, Component: TintColor, bodyStyle: styles.bodyStyle },
];

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.headerView}>
          <Text style={styles.mainTitle}>Image Style Props</Text>
        </View>
        <ScrollView style={styles.contentsView}>
          {
            contents.map(content => (
              <Content key={content.title} {...content} />
            ))
          }
        </ScrollView>
      </React.Fragment>
    );
  }
}
