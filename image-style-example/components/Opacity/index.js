import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const Opacity = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, opacity: 1 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, opacity: 0.8 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, opacity: 0.6 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, opacity: 0.4 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, opacity: 0.2 }}/>
    </View>
  </View>
);

Opacity.propTypes = {
  bodyStyle: View.propTypes.style,
};

Opacity.defaultProps = {
  bodyStyle: {},
};

export default Opacity;
