// import React from 'react'
// // import Screens
// import HomeScreen from './screens/Shopping app/HomeScreen'
// import ProductDetailScreen from './screens/Shopping app/ProductDetailScreen'
// import Cart from './screens/Furniture/Cart'
// import Settings from './screens/Contact App/Settings'
// import Store from './store/Store'
// // import Navigatiions
// import { createStaticNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import CartScreen from './screens/Shopping app/CartScreen'
// import { Screen } from 'react-native-screens'
// // import Icons
// import Home from 'react-native-vector-icons/Entypo'
// import ProfileIcon from 'react-native-vector-icons/FontAwesome6'
// import CartIcon from 'react-native-vector-icons/FontAwesome'
// import DetailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import ShoppingSetting from './screens/Shopping app/ShoppingSetting'
// import { Provider } from 'react-redux'



// const bottomstack = createBottomTabNavigator({
// screens:{
//   HomeScreen:{
//     screen:HomeScreen,
//     options:{headerShown:false,
//       tabBarIcon:({color})=>(
// <Home
// name='home' color={color} size={27}
// />
//       ),
//       tabBarLabel:''
//     }
    
//   },
//   CartScreen:{
//     screen:CartScreen,
//     options:{headerShown:false,
//       tabBarIcon:({color})=>(
//         <DetailIcon
//         name='reorder-horizontal' color={color} size={25}
//         />
//       ),
//       tabBarLabel:''
//     }
//   },
//   Details:{
//     screen:ProductDetailScreen,
//     options:{headerShown:false,
//       tabBarIcon:({color})=>(
//         <CartIcon
//         name='shopping-cart' color={color} size={25}
//         />
//       ),
//       tabBarLabel:''
//     }
//   },
//   Settings:{
//     screen:ShoppingSetting,
//     options:{
//       headerShown:false,
//       tabBarIcon:({color})=>(
//         <ProfileIcon
//         name='user-large' color={color} size={23}
//         />
//       ),
//       tabBarLabel:''
//     }
//   }

// },

// screenOptions:{tabBarActiveTintColor:'#ED6767'}
// })
// // const drawer =  createDrawerNavigator({
// //   screens:{
// //     Screen:CartScreen
// //   }
// // })
//  const Navigation = createStaticNavigation(bottomstack);

// const App = () => {
//  return( <Provider store={Store}>  
//     <Navigation/>
//     </Provider>
//  )
  
// };

// export default App;



















// import React from 'react'
// import Contacts from './Contacts'
// import Practice from './Practice'
// import DataScreen from './screens/Contact App/DataScreen';
// import allcontacts from './screens/Contact App/allcontacts';
// import Contactinfo from './screens/Contact App/Contactinfo';
// import Settings from './screens/Contact App/Settings';
// import AboutUs from './screens/Contact App/AboutUs';
// import Profile from './screens/Contact App/Profile';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import Detail from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Screen } from 'react-native-screens';

// const Stack = createNativeStackNavigator({
//   screens: {
//      AllContacts:{
//       screen:allcontacts,
//       options:{
//         headerShown:false
//       }
//      },
//      AddContact:{
//       screen:DataScreen,
//      },
//      Contactinfo:{
//       screen:Contactinfo,
//       options:{headerShown:false}
//      }
//   },
// });

// // DrawerStack:MyDrawer,
// // ContactList: allcontacts,
// // ContactInfo: {screen:Contactinfo, options:{headerShown:false}}


// const Navigation = createStaticNavigation(Stack);

// const App = () => {
//   return <Navigation/>
// }

// export default App































// import React from 'react'
// // Navigation
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStaticNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// // Screens
// import Home from './screens/Furniture/Home'
// import BooksFurniture from './screens/Furniture/BooksFurniture'
// import ProfileFurniture from './screens/Furniture/ProfileFurniture'
// import Cart from './screens/Furniture/Cart'
// import Message from './screens/Furniture/Message'
// import Login from './screens/Furniture/Login'
// import signup from './screens/Furniture/signup'
// import Forgetpassword from './screens/Furniture/Forgetpassword'
// import Otp from './screens/Furniture/Otp'
// import Save from './screens/Furniture/Save'
// // Vector Icons
// import Icon from 'react-native-vector-icons/Feather'
// import ProfileIcon from 'react-native-vector-icons/FontAwesome'
// import BooksIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import MessageIcon from 'react-native-vector-icons/Feather'
// import Intro from './screens/Furniture/Intro'
// import LoginSignup from './screens/Furniture/LoginSignup'
// import Checkout from './screens/Furniture/Checkout'
// import BookMark from 'react-native-vector-icons/Feather'
// import { Screen } from 'react-native-screens'
// import firstpage from './screens/Furniture/firstpage'
// import EditProfile from './screens/Furniture/EditProfile'




// const Bottomnavigation = createBottomTabNavigator({
//   screens: {
//     // LoginSignup: {
//     //   screen: LoginSignup,
//     // },

//     home: {
//       screen: Home, options: {
//         headerShown: false,
//         tabBarIcon: ({color}) => (
//           <Icon
//             name='home' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },
//     BooksFurniture: {
//       screen: BooksFurniture,
//       options: {
//         // tabBarStyle:{display:'none'},
//         headerShown: false,
//         tabBarIcon: ({color}) => (
//           <BooksIcon
//             name='bookshelf' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },

//     Save: {
//       screen: Save,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({color}) => (
//           <BookMark
//             name='bookmark' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },
//     Message: {
//       screen: Message,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({color}) => (
//           <MessageIcon
//             name='message-square' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },

//     ProfileFurniture: {
//       screen: ProfileFurniture,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({color}) => (
//           <ProfileIcon
//             name='user-o' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },

//   },
//   screenOptions:{tabBarActiveTintColor:'black'}
// })

// const Stack = createNativeStackNavigator({
//   screens: {

//     firstpage:{
//       screen:firstpage,options:{
//        headerShown:false,
//       }
//     },
//     Intro: {
//       screen: Intro, options: {
//         headerShown: false,
//       },
//     },
//     Cart: {
//       screen: Cart, options: { headerShown: false }
//     },

//     BooksFurniture: {
//       screen: BooksFurniture,
//     },
//     Save: {
//       screen: Save,
//       options: {
//         headerShown: false,
//       }
//     },
//     ProfileFurniture: {
//       screen: Bottomnavigation,
//       options: {
//         headerShown: false,
//       },
//     },
//     EditProfile:{
//      screen:EditProfile,
//      options:{
//        headerShown:false,
//       }
//     },
//     Message: {
//       screen: Message,
//       options: {
//         headerShown: false,
//       }
//     },

//     LoginSignup: {
//       screen: LoginSignup, options: {
//         headerShown: false
//       }
//     },
//     Login: {
//       screen: Login, options: {
//         headerShown: false,
//       }
//     },
    
//     Signup: {
//       screen: signup, options: {
//         headerShown: false,
//       }
//     },
//     Forgetpassword: {
//       screen: Forgetpassword, options: {
//         headerShown: false,
//       }
//     },
//     Otp: {
//       screen: Otp, options: {
//         headerShown: false,
//       }
//     },


//     Home: {
//       screen: Bottomnavigation,
//       options: { headerShown: false }
//     },

//     Checkout: {
//       screen: Checkout, options: {
//         headerShown: false,
//       }
//     },
//   },
// });

// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return <Navigation />
// }
// export default App

























// import React from 'react'
// // Navigations
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStaticNavigation } from '@react-navigation/native'
// // Screens
// import Weather from './screens/WeatherApp/Weather'
// import HomeWeather from './screens/WeatherApp/HomeWeather'

// const Stack = createNativeStackNavigator({
//   screens: {
//     HomeWeather: {
//       screen: HomeWeather,
//       options: {
//         headerShown: false,
//       }
//     },
//     Weather: {
//       screen: Weather,
//       options: {
//         headerShown: false
//       }
//     },
//   }
// })
 
// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return <Navigation />
// }
// export default App












import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DataInput from './screens/CloudData/DataInput'

const App = () => {
  return (
    <DataInput/>
  )
}

export default App

