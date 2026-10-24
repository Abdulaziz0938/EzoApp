import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Svg, { Path, Circle, Rect, G } from 'react-native-svg';

export default function IconOptionsTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>اختر الأيقونات المفضلة</Text>

      {/* قسم اللحظات */}
      <Text style={styles.sectionTitle}>أيقونة "اللحظات":</Text>
      <View style={styles.row}>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><Circle cx="12" cy="13" r="4"/>
          </Svg>
          <Text style={styles.label}>1. كاميرا مخطط</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
            <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </Svg>
          <Text style={styles.label}>2. فيديو (Play)</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><Circle cx="8.5" cy="8.5" r="1.5"/><Path d="M21 15l-5-5L5 21"/>
          </Svg>
          <Text style={styles.label}>3. صورة/ألبوم</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
            <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </Svg>
          <Text style={styles.label}>4. نجمة/وميض</Text>
        </View>
      </View>

      {/* قسم أنا */}
      <Text style={styles.sectionTitle}>أيقونة "أنا":</Text>
      <View style={styles.row}>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><Circle cx="12" cy="7" r="4"/>
          </Svg>
          <Text style={styles.label}>1. مخطط كلاسيك</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
            <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </Svg>
          <Text style={styles.label}>2. ممتلئ حديث</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
            <Circle cx="12" cy="12" r="10" fill="#2C2C2E"/>
            <Path d="M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0 2c-2 0-6 1-6 3v1h12v-1c0-2-4-3-6-3z" fill="#FFF"/>
          </Svg>
          <Text style={styles.label}>3. دائرة رمادية</Text>
        </View>
        <View style={styles.option}>
          <Svg width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
            <Circle cx="12" cy="12" r="10" fill="#10B981"/>
            <Path d="M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0 2c-2 0-6 1-6 3v1h12v-1c0-2-4-3-6-3z" fill="#181A20"/>
          </Svg>
          <Text style={styles.label}>4. دائرة خضراء</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#1C1C1E', marginHorizontal: 15, marginTop: 20, padding: 15, borderRadius: 15 },
  mainTitle: { color: '#10B981', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  sectionTitle: { color: '#FFF', fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 10, textAlign: 'right' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  option: { alignItems: 'center', width: '24%' },
  label: { color: '#888', fontSize: 10, marginTop: 5, textAlign: 'center' }
});
