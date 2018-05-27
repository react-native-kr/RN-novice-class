import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const OverlayColor = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, resizeMode: 'contain', }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, backgroundColor: '#E57373', resizeMode: 'contain', overlayColor: '#E57373' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, backgroundColor: '#FFF176', resizeMode: 'contain', overlayColor: '#FFF176' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, backgroundColor: '#A1887F', resizeMode: 'contain', overlayColor: '#A1887F' }} />
    </View>
  </View>
);

OverlayColor.propTypes = {
  bodyStyle: View.propTypes.style,
};

OverlayColor.defaultProps = {
  bodyStyle: {},
};

export default OverlayColor;
