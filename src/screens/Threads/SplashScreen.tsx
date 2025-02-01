import { StyleSheet, Text, View,Image} from 'react-native'
import { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Meta from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'




const SplashScreen = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation()


  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!initializing) {
        if (!user) {
          navigation.navigate('LoginThread' as never)

        } else (navigation.navigate('HomeThread' as never))
      }

    }, 2000);
  }, [initializing, user]),

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);


  return (
    <View style={styles.body}>
      <View style={{ bottom: 80, flex: 0.2 }}>

        <Image
        style={{height:250,width:170}}
        source={require('./../../images/Threadslogo.png')}/>

      </View>

      <View style={{ flex: 0.1, alignItems: 'center', position: "absolute", bottom: 80 }}>
        <Text>from</Text>
        <View style={{ flexDirection: 'row' }}>
         <Image style={{height:30,width:30}} source={require('./../../images/Metalogo.png')}/>
          <Text style={styles.Meta}> Meta</Text>
        </View>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: "center",
    alignItems: 'center',
  },
  Meta: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    alignSelf:'center'
  }
})