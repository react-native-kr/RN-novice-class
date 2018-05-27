import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

// Orange Color code
const orangeRange = [
  { weight: '50', code: '#FFF3E0'},
  { weight: '100', code: '#FFE0B2'},
  { weight: '200', code: '#FFCC80'},
  { weight: '300', code: '#FFB74D'},
  { weight: '400', code: '#FFA726'},
  { weight: '500', code: '#FF9800'},
  { weight: '600', code: '#FB8C00'},
  { weight: '700', code: '#F57C00'},
  { weight: '800', code: '#EF6C00'},
  { weight: '900', code: '#E65100'},
  { weight: 'A100', code: '#FFD180'},
  { weight: 'A200', code: '#FFAB40'},
  { weight: 'A400', code: '#FF9100'},
  { weight: 'A700', code: '#FF6D00'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  primary: {
    flex: 3,
    backgroundColor: orangeRange[5].code, //  상위 weight값 500 인값을 넣어줬습니다.
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  textWrap: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const EX2 = () => (
  <View style={styles.container}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <View style={styles.primary}>
      <View style={{ flex: 2, alignItems: 'center', padding: 30 }}>
        <Text style={styles.textHeader}>Orange</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.textWrap}>{orangeRange[5].weight}</Text>
        </View>
        <View>
          <Text style={styles.textWrap}>{orangeRange[5].code}</Text>
        </View>
      </View>
    </View>
    {
      orangeRange.map(item => (
        <View
          key={item.weight}
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: item.code }}
        >
          <View>
            <Text style={styles.textWrap}>{item.weight}</Text>
          </View>
          <View>
            <Text style={styles.textWrap}>{item.code}</Text>
          </View>
        </View>
      ))
    }
  </View>
);

export default EX2;
