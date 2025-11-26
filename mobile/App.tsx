import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TaskDetail } from './components/TaskDetail';

const MOCK_TASK = {
  id: '1',
  title: 'Finish Eating Dinner',
  description: 'Enjoy and finish all courses of the dinner meal, from appetizers to dessert.',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <View style={styles.content}>
          <TaskDetail task={MOCK_TASK} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  }
});
