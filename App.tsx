import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCard from './components/FlatCard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={{ color: textColor }}>App</Text>
          <FlatCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});
