import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ZegoUIKitPrebuiltLiveAudioRoom, {
  HOST_DEFAULT_CONFIG,
  AUDIENCE_DEFAULT_CONFIG,
  ZegoLiveAudioRoomLayoutAlignment,
} from '@zegocloud/zego-uikit-prebuilt-live-audio-room-rn';
import { Ionicons } from '@expo/vector-icons';

// ✅ المفاتيح الخاصة بك جاهزة
const appID = 1343800899; 
const appSign = "903b4100057ce94f9e489b6c9c90cad9400a6bed47c752e884e03098f261f50d";

export default function RoomScreen({ route, navigation }: any) {
  // نستقبل البيانات من شاشة الغرف (إذا مش مبعوتة، بنستخدم قيم افتراضية)
  const { roomName = 'غرفة Ezo', roomId = 'room_123', isHost = true, seatCount = 8 } = route.params || {};

  // دالة لتوليد التخطيط بناءً على عدد المقاعد
  const getLayoutConfig = (count: number) => {
    const spaceAround = ZegoLiveAudioRoomLayoutAlignment.spaceAround;
    switch (count) {
      case 8:
        return { rowConfigs: [ { count: 4, alignment: spaceAround }, { count: 4, alignment: spaceAround } ] };
      case 10:
        return { rowConfigs: [ { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround } ] };
      case 15:
        return { rowConfigs: [ { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround } ] };
      case 20:
        return { rowConfigs: [ { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround }, { count: 5, alignment: spaceAround } ] };
      default:
        return { rowConfigs: [ { count: 4, alignment: spaceAround }, { count: 4, alignment: spaceAround } ] };
    }
  };

  const baseConfig = isHost ? HOST_DEFAULT_CONFIG : AUDIENCE_DEFAULT_CONFIG;

  const config = {
    ...baseConfig,
    layoutConfig: getLayoutConfig(seatCount),
    // خلفية داكنة
    backgroundColor: '#121212',
    // إخفاء زر الخروج الافتراضي لأننا ضفنا زر مخصص
    showLeaveRoomButton: false,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.customCloseBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="power" size={24} color="#FFF" />
      </TouchableOpacity>

      <ZegoUIKitPrebuiltLiveAudioRoom
        appID={appID}
        appSign={appSign}
        userID={`user_${Date.now()}`}
        userName="Ezo Super Admin"
        roomID={roomId}
        config={config}
        onLeaveRoom={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  customCloseBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
});
