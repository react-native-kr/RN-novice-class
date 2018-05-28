import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Content = ({ viewStyle, titleStyle, title, Component, bodyStyle }) => (
  <View style={viewStyle}>
    <Text style={titleStyle}>
      &#183; {title}
    </Text>
    {
      <Component bodyStyle={bodyStyle} />
    }
  </View>
);

Content.propTypes = {
  viewStyle: View.propTypes.style,
  titleStyle: Text.propTypes.style,
  bodyStyle: View.propTypes.style,
  title: PropTypes.string,
  Component: PropTypes.func.isRequired,
};

Content.defaultProps = {
  viewStyle: {},
  titleStyle: {},
  bodyStyle: {},
  title: '',
};

export default Content;
