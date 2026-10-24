import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyProfileScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Feather name="arrow-right" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>الملف الشخصي</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <LinearGradient colors={['#1C1C1E', '#000']} style={styles.coverImage}>
         <Image source={{ uri: 'https://ui-avatars.com/api/?name=Ezo&background=8B5CF6&color=fff&size=200' }} style={styles.avatar} />
      </LinearGradient>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>EZO Super Admin</Text>
        <Text style={styles.id}>ID: 1831156</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 15 },
  backBtn: { padding: 5 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  coverImage: { height: 200, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#8B5CF6' },
  infoContainer: { alignItems: 'center', marginTop: 15 },
  name: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  id: { color: '#888', fontSize: 14, marginTop: 5 }
});
