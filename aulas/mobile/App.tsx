import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-gray-700'>
      <Text className='text-white'>Hello World!</Text>
      <StatusBar style="light" />
    </View>
  );
}
