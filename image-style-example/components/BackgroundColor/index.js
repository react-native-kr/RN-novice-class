import React from 'react';
import { View, Image } from 'react-native';
import sampleImage from '../../images/sample.gif';

const BackgroundColor = props => (
  <View style={props.bodyStyle}>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50 }}/>
    </View>
    <View style={{ flex: 1 }}>
      <Image source={sampleImage} style={{ width: 50, height: 50, backgroundColor: '#f50' }}/>
    </View>
  </View>
);

BackgroundColor.propTypes = {
  bodyStyle: View.propTypes.style,
};

BackgroundColor.defaultProps = {
  bodyStyle: {},
};

export default BackgroundColor;
