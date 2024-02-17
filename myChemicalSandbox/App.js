import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <Pressable style={{marginVertical: 'auto',
            height: '85%',
            width: '8%',
            display: 'flex'}} onPress={()=>{
              alert("Hamburger Pressed");
            }}>
        <Image source={require('./assets/hamburger.svg')} style={
          {
            marginVertical: 'auto',
            resizeMode: 'contain',
            flex: 1
          }
          } /> </Pressable>
          <Pressable style={{marginVertical: 'auto',
            height: '85%',
            width: '8%',
            display: 'flex'}} onPress={()=>{
              alert("Trophy Pressed");
            }}>
        <Image source={require('./assets/trophy.svg')} style={
          {
            marginVertical: 'auto',
            resizeMode: 'contain',
            flex: 1
          }
          } /> </Pressable>
        </View>
        <View style={styles.body}>
          <View style={styles.playfield}></View>
          <ScrollView style={styles.rightmenu}>
            
          </ScrollView>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0fff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menubar: {
    height: '13%',
    width: '100%',
    backgroundColor: 'salmon',
    position: 'absolute', 
    display: 'flex',
    flex: 0.13,
    zIndex: 1,
    top: '0%',
    left: '0%',
    flexDirection: 'row'
  },
  body: {
    height: '87%',
    width: '100%',
    opacity: 1,
    position: 'absolute', 
    display: 'flex',
    flexDirection: 'row',
    flex: 0.7,
    zIndex: 0,
    top: '13%',
    left: '0%'
  },
  playfield: {
    height: '70%',
    flex: 0.6,
    backgroundColor: '#F7FFF7',
    position: 'relative', 
    zIndex: 2,
    top: '10%',
    left: '3%',
    opacity: '100%',
    flexDirection: 'row',
    borderRadius: '1%',
    borderColor: '#AFD0BF',
    borderWidth: 1,
    
  },
  rightmenu: {
    height: '100%',
    marginLeft: 'auto',
    flex: 0.4,
    backgroundColor: '#AFD0BF',
    position: 'relative',
    zIndex: 2,
    top: '0%',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2,
  }
});


