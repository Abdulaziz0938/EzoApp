import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import AppNavigator from './src/navigation';
import { useThemeStore } from './src/store/themeStore';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string);

export default function App() {
  const { theme } = useThemeStore();
  return (
    <ConvexProvider client={convex}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <AppNavigator />
    </ConvexProvider>
  );
}
