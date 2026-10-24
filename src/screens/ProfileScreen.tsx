import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ICONS = [
  { name: 'محفظة', icon: 'wallet', color: '#FBBF24' },
  { name: 'أوسمة', icon: 'medal', color: '#60A5FA' },
  { name: 'مستوى', icon: 'crown', color: '#FBBF24' },
  { name: 'العلاقة', icon: 'heart', color: '#F472B6' },
  { name: 'متجر', icon: 'shopping-bag', color: '#FBBF24' },
  { name: 'وكالة', icon: 'shield-alt', color: '#A78BFA' },
  { name: 'مضيف', icon: 'microphone', color: '#FBBF24' },
  { name: 'الأسطورة', icon: 'dragon', color: '#FBBF24' },
];

const MENU = [
  { name: 'مهام', icon: 'tasks' },
  { name: 'VIP خاصة بالداعمين', icon: 'gem' },
  { name: 'دعوة مستخدم جديد', icon: 'user-plus' },
  { name: 'المصادقة', icon: 'check-circle' },
  { name: 'الزيارات الأخيرة', icon: 'history' },
  { name: 'خدمة عملاء', icon: 'headset' },
  { name: 'اللغة', icon: 'globe' },
  { name: 'إعدادات', icon: 'cog' },
];

export default function ProfileScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* الهيدر - القسم العلوي يلي بياخد للملف الشخصي */}
      <TouchableOpacity 
        style={styles.header} 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MyProfile')}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.editBtn}>
            <FontAwesome5 name="pen" size={18} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="mars" size={16} color="#60A5FA" style={{ marginRight: 5 }} />
                <Text style={styles.userIdText}>1831156</Text>
                <Text style={{ marginLeft: 5 }}>🇸🇦</Text>
              </View>
              <Text style={styles.idLabel}>ID:1831156</Text>
            </View>
            <Image source={{ uri: 'https://ui-avatars.com/api/?name=Ezo&background=8B5CF6&color=fff' }} style={styles.avatar} />
          </View>
        </View>

        {/* الإحصائيات */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>الزوار</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>المعجبين</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>المُتابعين</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* بانرات VIP */}
      <View style={styles.vipBanners}>
        <LinearGradient colors={['#F59E0B', '#78350F']} style={styles.vipBannerLeft}>
          <Text style={styles.vipTextLeft}>VIP 1</Text>
        </LinearGradient>
        <LinearGradient colors={['#374151', '#111827']} style={styles.vipBannerRight}>
          <Text style={styles.vipTextRight}>الداعم المحترم</Text>
        </LinearGradient>
      </View>

      {/* شبكة الأيقونات */}
      <View style={styles.grid}>
        {ICONS.map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name={item.icon as any} size={24} color={item.color} />
            </View>
            <Text style={styles.gridText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* القائمة السفلية */}
      <View style={styles.menuList}>
        {MENU.map((menu, i) => (
          <TouchableOpacity key={i} style={styles.menuItem}>
            <FontAwesome5 name="chevron-left" size={16} color="#888" />
            <View style={styles.menuRight}>
              <Text style={styles.menuText}>{menu.name}</Text>
              <FontAwesome5 name={menu.icon as any} size={18} color="#888" style={{ marginLeft: 10 }} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { paddingTop: 50, paddingHorizontal: 20 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  editBtn: { padding: 10 },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  userIdText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  idLabel: { color: '#888', fontSize: 12 },
  avatar: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#FFF' },
  
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  statLabel: { color: '#888', fontSize: 12, marginTop: 4 },

  vipBanners: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 },
  vipBannerLeft: { width: '48%', height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  vipBannerRight: { width: '48%', height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F59E0B' },
  vipTextLeft: { color: '#FFF', fontWeight: '900', fontSize: 20 },
  vipTextRight: { color: '#F59E0B', fontWeight: 'bold', fontSize: 14 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: '#1C1C1E', borderRadius: 15, paddingVertical: 20, marginHorizontal: 15, marginBottom: 20 },
  gridItem: { width: '25%', alignItems: 'center', marginBottom: 20 },
  iconWrapper: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#2C2C2E', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  gridText: { color: '#FFF', fontSize: 12 },

  menuList: { backgroundColor: '#1C1C1E', borderRadius: 15, marginHorizontal: 15, paddingVertical: 10 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#2C2C2E' },
  menuRight: { flexDirection: 'row', alignItems: 'center' },
  menuText: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
});
