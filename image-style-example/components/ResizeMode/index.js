import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const ResizeMode = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
    </View>
  </View>
);

ResizeMode.propTypes = {
  bodyStyle: View.propTypes.style,
};

ResizeMode.defaultProps = {
  bodyStyle: {},
};

export default ResizeMode;
