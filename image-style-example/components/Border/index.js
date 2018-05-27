import React from 'react';
import { View, Text, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const Border = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50 }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#FFCC80' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#FFCC80', borderRadius: 20 }} />
    </View>
  </View>
);

Border.propTypes = {
  bodyStyle: View.propTypes.style,
};

Border.defaultProps = {
  bodyStyle: {},
};

export default Border;
