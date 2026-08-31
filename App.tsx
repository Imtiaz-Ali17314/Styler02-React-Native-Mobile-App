import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
