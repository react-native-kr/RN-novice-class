import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.png';

const TintColor = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, tintColor: '#E57373' }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, tintColor: '#F06292' }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, tintColor: '#FFF176' }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, tintColor: '#A1887F' }}/>
    </View>
  </View>
);

TintColor.propTypes = {
  bodyStyle: View.propTypes.style,
};

TintColor.defaultProps = {
  bodyStyle: {},
};

export default TintColor;
