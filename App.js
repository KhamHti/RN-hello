// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Alert, Button, Platform, StatusBar} from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={[styles.container, backgroundStyle ]}>
        <Button 
        color="#10A19D"
        title="click me"
        onPress={() => Alert.prompt("My Title", "My Message", Text => console.log(Text))}
        />
    </SafeAreaView>
  ); 
} 

const backgroundStyle ={ backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
