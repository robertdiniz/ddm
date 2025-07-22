import { StyleSheet, View, Text, Button } from 'react-native';
import CounterDisplay from '@/components/CounterDisplay';
import CounterControls from '@/components/CounterControls';
import CounterStatus from '@/components/CounterStatus';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CounterDisplay/>
      <CounterControls/>
      <CounterStatus/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    gap: 12,
  },
  title: {
    fontSize: 16,
    color: "#fff"
  },
});
