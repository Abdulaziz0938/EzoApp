import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const rooms = useQuery(api.rooms.listPublic) || [];
  const [activeTab, setActiveTab] = useState('الخاص بي');

  const renderRoom = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.roomCard} 
      onPress={() => navigation.navigate('Room', { roomName: item.name, roomId: item._id })}
    >
      <Image 
        source={{ uri: item.coverUrl || 'https://res.cloudinary.com/wdicx984/image/upload/v1792058827/vip.background.1.webp' }} 
        style={styles.roomImage} 
      />
      
      {/* تدرج لوني أسود في الأسفل */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.95)']}
        style={styles.gradient}
      />

      {/* شارة رسمي */}
      <View style={styles.officialBadge}>
        <Text style={styles.officialText}>رسمي</Text>
      </View>

      {/* تفاصيل الغرفة */}
      <View style={styles.roomInfo}>
        {/* الاسم والعلم (يمين) */}
        <View style={styles.roomTitleRow}>
          <Text style={styles.roomName} numberOfLines={1}>{item.name || 'غرفة جديدة'}</Text>
          <Text style={styles.flagIcon}>🇸🇦</Text>
        </View>
        {/* الإحصائيات (يسار) */}
        <View style={styles.roomStats}>
          <Ionicons name="stats-chart" size={12} color="#10B981" />
          <Text style={styles.userCountText}>{item.memberCount || Math.floor(Math.random() * 500) + 10}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      {/* الشريط العلوي */}
      <View style={styles.topHeader}>
        {/* التبويبات على اليمين (3 فقط زي بينمو) */}
        <View style={styles.headerTabs}>
          {['الخاص بي', 'ترند', 'لايف'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={{ marginLeft: 20 }}>
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              {activeTab === tab && <View style={styles.activeDot} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* الأيقونات على اليسار */}
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="search" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBtn, styles.iconBtnActive]}>
            <Ionicons name="home" size={22} color="#10B981" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item._id}
        renderItem={renderRoom}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.roomList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.bannerContainer}>
             <Image source={{ uri: 'https://res.cloudinary.com/wdicx984/image/upload/v1792060000/vip.background.7.webp' }} style={styles.bannerImage} />
             <LinearGradient colors={['transparent', '#121212']} style={StyleSheet.absoluteFillObject} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <FontAwesome5 name="door-closed" size={50} color="#333" />
            <Text style={styles.emptyText}>لا يوجد غرفة بعد...</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  
  // الشريط العلوي
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingTop: 50, paddingBottom: 15 },
  headerTabs: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  tabText: { color: '#888', fontSize: 18, fontWeight: 'bold' },
  tabTextActive: { color: '#FFF' },
  activeDot: { height: 3, width: 20, backgroundColor: '#10B981', borderRadius: 2, marginTop: 5, alignSelf: 'center' },
  
  headerLeft: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
  iconBtn: { marginRight: 15, padding: 5 },
  iconBtnActive: { backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 20, padding: 8 },

  // البانر
  bannerContainer: { width: '100%', height: 140, borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
  bannerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  
  // الكروت
  roomList: { paddingHorizontal: 10, paddingBottom: 100 },
  row: { justifyContent: 'space-between', paddingHorizontal: 5 },
  roomCard: { width: (width - 40) / 2, height: (width - 40) / 2, borderRadius: 15, marginBottom: 15, overflow: 'hidden', backgroundColor: '#1E1E1E' },
  roomImage: { width: '100%', height: '100%', position: 'absolute' },
  gradient: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '60%' },
  
  roomInfo: { position: 'absolute', bottom: 10, left: 10, right: 10 },
  roomTitleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 5 },
  roomName: { color: '#FFF', fontSize: 14, fontWeight: 'bold', textAlign: 'right', flex: 1 },
  flagIcon: { fontSize: 12, marginRight: 5 },
  roomStats: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
  userCountText: { color: '#10B981', fontSize: 12, fontWeight: 'bold', marginLeft: 4 },
  
  officialBadge: { position: 'absolute', top: 10, right: 10, backgroundColor: '#10B981', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 5 },
  officialText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyText: { color: '#888', fontSize: 16, marginTop: 15 }
});
