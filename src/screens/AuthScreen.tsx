import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useThemeStore } from '../store/themeStore';

export default function AuthScreen({ navigation }: any) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  // إعداد مشغل الفيديو الجديد
  const player = useVideoPlayer('https://res.cloudinary.com/demo/video/upload/dog.mp4', player => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      {/* الفيديو */}
      <VideoView
        style={StyleSheet.absoluteFill}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />
      
      <View style={[styles.overlay, { backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' }]} />
      
      <View style={styles.content}>
        <Text style={[styles.logo, { color: isDark ? '#FFF' : '#000' }]}>EZO GROUP</Text>
        <Text style={[styles.subtitle, { color: isDark ? '#AAA' : '#666' }]}>Voice Chat Rooms</Text>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.replace('Main')}>
          <Text style={styles.loginText}>تسجيل الدخول</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.registerBtn, { borderColor: isDark ? '#FFF' : '#000' }]}>
          <Text style={[styles.registerText, { color: isDark ? '#FFF' : '#000' }]}>إنشاء حساب جديد</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  overlay: { ...StyleSheet.absoluteFillObject },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 42, fontWeight: '900', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 50 },
  loginBtn: { width: '100%', backgroundColor: '#8B5CF6', padding: 18, borderRadius: 15, alignItems: 'center', marginBottom: 15 },
  loginText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  registerBtn: { width: '100%', borderWidth: 1, padding: 18, borderRadius: 15, alignItems: 'center' },
  registerText: { fontSize: 18, fontWeight: 'bold' },
});
