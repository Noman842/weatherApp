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
// import { LogLevel, OneSignal } from 'react-native-onesignal';




// const Bottomnavigation = createBottomTabNavigator({
//   screens: {
//     // LoginSignup: {
//     //   screen: LoginSignup,
//     // },

//     home: {
//       screen: Home, options: {
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
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
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
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
//         tabBarIcon: ({ color }) => (
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
//         tabBarIcon: ({ color }) => (
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
//         tabBarIcon: ({ color }) => (
//           <ProfileIcon
//             name='user-o' color={color} size={23}
//           />
//         ),
//         tabBarLabel: '',
//       }
//     },

//   },
//   screenOptions: { tabBarActiveTintColor: 'black' }
// })

// const Stack = createNativeStackNavigator({
//   screens: {

//     firstpage: {
//       screen: firstpage, options: {
//         headerShown: false,
//       }
//     },
//     Intro: {
//       screen: Intro, options: {
//         headerShown: false,
//       },
//     },
//     Cart: {
//       screen: Cart, options: {
//         headerShown: false
//       }
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
//     EditProfile: {
//       screen: EditProfile,
//       options: {
//         headerShown: false,
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

//   // Remove this method to stop OneSignal Debugging
//   OneSignal.Debug.setLogLevel(LogLevel.Verbose);

//   // OneSignal Initialization
//   OneSignal.initialize("999f2278-f73d-4918-9e29-8a40b903585c");

//   // requestPermission will show the native iOS or Android notification permission prompt.
//   // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
//   OneSignal.Notifications.requestPermission(true);

//   // Method for listening for notification clicks
//   OneSignal.Notifications.addEventListener('click', (event) => {
//     console.log('OneSignal: notification clicked:', event);
//   });

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
<<<<<<< HEAD
=======
//   }
// })

// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return <Navigation />
// }
// export default App









>>>>>>> master



// import React from 'react'
// import DataInput from './screens/CloudData/DataInput'
// import ImagePicker from './ImagePicker'

// const App = () => {
//   return (
//     <DataInput/>
//   )
// }

// export default App















<<<<<<< HEAD
=======










>>>>>>> master
// import { View } from 'react-native'
// import React from 'react'
// // Screens
// import SplashScreen from './screens/Threads/SplashScreen'
// import SettingsThreads from './screens/Threads/SettingsThreads'
// import ProfileThread from './screens/Threads/ProfileThread'
// import HomeThreads from './screens/Threads/HomeThreads'
// import PrivacyScreenThreads from './screens/Threads/PrivacyScreenThreads'
// import EditProfileThread from './screens/Threads/EditProfileThread'
// import LoginThread from './screens/Threads/LoginThread'
// import SignupThread from './screens/Threads/SignupThread'
// import HelpScreenThread from './screens/Threads/HelpScreenThread'
// import AboutThread from './screens/Threads/AboutThread'
// import SearchThread from './screens/Threads/SearchThread'
// import AddPostThread from './screens/Threads/AddPostThread'
// import LikeScreenThread from './screens/Threads/LikeScreenThread'
// import InviteFriendsThread from './screens/Threads/InviteFriendsThread'
// import { Provider } from 'react-redux'
// import Store, { persistor } from './store/Store'
// import AccountThread from './screens/Threads/AccountThread'
// import LikedPostThread from './screens/Threads/LikedPostThread'
// import PostDetailThread from './screens/Threads/PostDetailThread'
// import ForgetPasswordThread from './screens/Threads/ForgetPasswordThread'


// // Navigations
// import { createStaticNavigation } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// // Icons
// import HomeIcon from 'react-native-vector-icons/Octicons'
// import SearchIcon from 'react-native-vector-icons/Feather'
// import AddIcon from 'react-native-vector-icons/MaterialIcons'
// import LikeIcon from 'react-native-vector-icons/AntDesign'
// import ProfileIcon from 'react-native-vector-icons/Feather'
// import SavedPostThread from './screens/Threads/SavedPostThread'
// import { PersistGate } from 'redux-persist/es/integration/react'


// const Stack2 = createNativeStackNavigator({
//   screens: {
//     ProfileThread1: {
//       screen: ProfileThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     EditProfile: {
//       screen: EditProfileThread,
//       options: {
//         headerShown: false,
//         animation: 'slide_from_bottom'
//       }
//     },
//   }
// })

// const bottomnavigation = createBottomTabNavigator({

//   screens: {
//     HomeThreads: {
//       screen: HomeThreads,
//       options: {
//         headerShown: false,
//         animation: 'shift',
//         tabBarIcon: ({ color }) => (
//           <HomeIcon
//             style={{ marginTop: 4 }}
//             name='home' color={color} size={27}
//           />
//         ),
//         tabBarLabel: '',
//         tabBarStyle: {
//           backgroundColor: '#101010',
//           borderColor: '#101010'
//         }

//       },
//     },
//     SearchThread: {
//       screen: SearchThread,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <SearchIcon
//             style={{ marginTop: 4 }}
//             name='search' color={color} size={27}
//           />
//         ),
//         tabBarLabel: '',
//         tabBarStyle: {
//           backgroundColor: '#101010',
//           borderColor: '#101010'
//         }
//       }
//     },
//     AddPostThread: {
//       screen: AddPostThread,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <View style={{
//             height: 40, width: 55, backgroundColor: '#1E1E1E',
//             borderRadius: 15, marginTop: 10, alignItems: 'center', justifyContent: 'center'
//           }}>
//             <AddIcon

//               name='add' color={color} size={27}
//             />
//           </View>
//         ),
//         tabBarLabel: '',
//         tabBarStyle: {
//           display: 'none',
//           backgroundColor: '#101010',
//           borderColor: '#101010'
//         }
//       },
//     },
//     LikeScreenThread: {
//       screen: LikeScreenThread,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <LikeIcon
//             style={{ marginTop: 4 }}
//             name='hearto' color={color} size={26}
//           />
//         ),
//         tabBarLabel: '',
//         tabBarStyle: {
//           backgroundColor: '#101010',
//           borderColor: '#101010'
//         }
//       },
//     },
//     ProfileThread: {
//       screen: Stack2,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <ProfileIcon
//             style={{ marginTop: 4 }}
//             name='user' color={color} size={27}
//           />
//         ),
//         tabBarLabel: '',
//         tabBarStyle: {
//           backgroundColor: '#101010',
//           borderColor: '#101010'
//         }
//       },
//     },
//   },
//   screenOptions: { tabBarActiveTintColor: '#fff' }

// })
// const Stack = createNativeStackNavigator({
//   screens: {
//     SplashScreen: {
//       screen: SplashScreen,
//       options: {
//         headerShown: false,

//       }
//     },
//     LoginThread: {
//       screen: LoginThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     SignupThread: {
//       screen: SignupThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     HomeThread: {
//       screen: bottomnavigation,
//       options: {
//         headerShown: false,
//       },
//     },

//     PostDetailThread: {
//       screen: PostDetailThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     // ProfileThread: {
//     //   screen: bottomnavigation,
//     //   options: {
//     //     headerShown: false,
//     //   }
//     // },
//     SettingsThreads: {
//       screen: SettingsThreads,
//       options: {
//         headerShown: false,
//       }
//     },
//     PrivacyScreenThreads: {
//       screen: PrivacyScreenThreads,
//       options: {
//         headerShown: false,
//       }
//     },
//     // EditProfile: {
//     //   screen: EditProfileThread,
//     //   options: {
//     //     headerShown: false,
//     //   }
//     // },
//     HelpScreenThread: {
//       screen: HelpScreenThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     AboutThread: {
//       screen: AboutThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     AddPostThread: {
//       screen: AddPostThread,
//       options: {

//       }
//     },
//     InviteFriendsThread: {
//       screen: InviteFriendsThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     AccountThread: {
//       screen: AccountThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     LikedPostThread: {
//       screen: LikedPostThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     SavedPostThread: {
//       screen: SavedPostThread,
//       options: {
//         headerShown: false,
//       }
//     },
//     ForgetPasswordThread: {
//       screen: ForgetPasswordThread,
//       options: {
//         headerShown: false,
//       }
//     }
//   }
// })



// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return (
//     <Provider store={Store}>
//       <PersistGate persistor={persistor}>
//         <Navigation />
//       </PersistGate>

//     </Provider>
//   )
// }
// export default App
















<<<<<<< HEAD
// import { View } from 'react-native'
// import React from 'react'
// // Navigations
// import { createStaticNavigation } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// //Icons
// import Home from 'react-native-vector-icons/Feather'
// import Find from 'react-native-vector-icons/MaterialCommunityIcons'
// import Donation from 'react-native-vector-icons/Octicons'
// import Profile from 'react-native-vector-icons/FontAwesome5'
// //Screens
// import BloodSplash from './screens/Bloodapp/BloodSplash'
// import BloodLoginSignup from './screens/Bloodapp/BloodLoginSignup'
// import BloodLogin from './screens/Bloodapp/BloodLogin'
// import BloodSignup from './screens/Bloodapp/BloodSignup'
// import BloodHome from './screens/Bloodapp/BloodHome'
// import BloodProfile from './screens/Bloodapp/BloodProfile'
// import BloodDonate from './screens/Bloodapp/BloodDonate'
// import BloodDonor from './screens/Bloodapp/BloodDonor'
// import { Provider } from 'react-redux'
// import store, { persistor } from './store/Store'
// import BloodDetail from './screens/Bloodapp/BloodDetail'
// import BloodMyDonations from './screens/Bloodapp/BloodMyDonations'
// import BloodForget from './screens/Bloodapp/BloodForget'
// import { PersistGate } from 'redux-persist/integration/react'
// import BloodEdit from './screens/Bloodapp/BloodEdit'
// import BloodSearch from './screens/Bloodapp/BloodSearch'
// import BloodLanguage from './screens/Bloodapp/BloodLanguage'
// import BloodPrivacy from './screens/Bloodapp/BloodPrivacy'
// import BloodTerms from './screens/Bloodapp/BloodTerms'

// const stack2 = createNativeStackNavigator({
//   screens: {
//     BloodProfile1: {
//       screen: BloodProfile,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodEdit: {
//       screen: BloodEdit,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodMyDonations: {
//       screen: BloodMyDonations,
//       options: {
//         headerShown: false,
//       }
//     },
//   }
// })
// const bottomnavigation = createBottomTabNavigator({
//   screens: {
//     Home: {
//       screen: BloodHome,
//       options: {
//         animation: 'shift',
//         headerShown: false,
//         tabBarIcon: ({ color }) => (
//           <Home
//             name='home' color={color} size={27}
//           />
//         )
//       }
//     },
//     FindDonor: {
//       screen: BloodDonor,
//       options: {
//         headerShown: false,
//         animation: 'shift',


//         tabBarIcon: ({ color }) => (
//           <Find
//             name='account-search-outline' color={color} size={28}
//           />
//         )
//       }
//     },
//     Donation: {
//       screen: BloodDonate,
//       options: {
//         headerShown: false,
//         animation: 'shift',
//         tabBarIcon: ({ color }) => (
//           <Donation
//             name='checklist' color={color} size={23}
//           />
//         )
//       }
//     },
//     Profile: {
//       screen: stack2,
//       options: {
//         headerShown: false,
//         animation: 'shift',
//         tabBarIcon: ({ color }) => (
//           <Profile
//             name='user-circle' color={color} size={26}
//           />
//         )
//       }
//     },
//   },
//   screenOptions: {
//     tabBarActiveTintColor: '#D80032',
//   }
// })

// const Stack = createNativeStackNavigator({
//   screens: {
//     BloodSplash: {
//       screen: BloodSplash,
//       options: {
//         animation: 'slide_from_right',
//         headerShown: false
//       }
//     },
//     BloodLoginSignup: {
//       screen: BloodLoginSignup,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodLogin: {
//       screen: BloodLogin,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodSignup: {
//       screen: BloodSignup,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodTerms:{
//       screen:BloodTerms,
//       options:{
//         headerShown:false,

//       }
//     },
//     BloodHome: {
//       screen: bottomnavigation,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodDonate: {
//       screen: BloodDonate,
//       options: {
//         headerShown: false,
//       }
//     },

//     BloodDetail: {
//       screen: BloodDetail,
//       options: {
//         headerShown: false,
//       }
//     },

//     BloodForget: {
//       screen: BloodForget,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodSearch: {
//       screen: BloodSearch,
//       options: {
//         headerShown: false,
//       }
//     },
//     BloodLanguage:{
//       screen:BloodLanguage,
//       options:{
//         headerShown:false
//       }
//     },
//     BloodPrivacy:{
//       screen:BloodPrivacy,
//       options:{
//         headerShown:false
//       }
//     }
//   }
// });

// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Navigation />
//       </PersistGate>
//     </Provider>

//   )
// }
// export default App


















// import React from 'react'
// // Navigations
// import { createStaticNavigation } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// //Icons
// import Home from 'react-native-vector-icons/Entypo'
// import Check from 'react-native-vector-icons/Feather'
// //Screens
// import HomeToDo from './screens/TO-DO App/HomeToDo'
// import ToDoInput from './screens/TO-DO App/ToDoInput'
// import ToDoDetail from './screens/TO-DO App/ToDoDetail'




// const Stack = createNativeStackNavigator({
//   screens: {
//     HomeToDo: {
//       screen: HomeToDo,
//       options: {
//         animation:'fade_from_bottom',
//         headerShown: false,
//       }
//     },
//     ToDoInput: {
//       screen: ToDoInput,
//       options: {
//         animation:'fade_from_bottom',
//         headerShown: false,
//       }
//     },
//     ToDoDetail:{
//       screen:ToDoDetail,
//       options:{
//         headerShown:false
//       }
//     }
//   },
// })

// const Navigation = createStaticNavigation(Stack)
// const App = () => {
//   return <Navigation />
// }

// export default App




















// import React from 'react'
// import Calulatorsplash from './screens/Calculator/Calulatorsplash'
// import { createStaticNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import CalculatorGo from './screens/Calculator/CalculatorGo'
// import Calculator from './screens/Calculator/Calculator'

// const stack = createNativeStackNavigator ({
//   screens: {
//    Calulatorsplash:{
//     screen:Calulatorsplash,
//     options:{
//       headerShown:false
//     }
//    },
//    CalculatorGo:{
//     screen:CalculatorGo,
//     options:{
//       headerShown:false
//     }
//    },
//    Calculator:{
//     screen:Calculator,
//     options:{
//       headerShown:false
//     }
//    }
//   }
// })
// const Navigation = createStaticNavigation(stack)
// const App = () => {
//   return <Navigation />

// }

// export default App
















// import React from 'react'
// import Timer from './screens/Timmer/Timer'

// const App = () => {
//   return (
//    <Timer/>
//   )
// }

// export default App














import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Navigations
import { createStaticNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Icons 
import Home from 'react-native-vector-icons/AntDesign'
import Earn from 'react-native-vector-icons/MaterialIcons'
import Profile from 'react-native-vector-icons/Feather'
import Dash from 'react-native-vector-icons/Feather'

//Screens
import ZonixLogin from './screens/ZONIX/ZonixLogin'
import ZonixSignup from './screens/ZONIX/ZonixSignup'
import ZonixHome from './screens/ZONIX/ZonixHome'
import ZonixProfile from './screens/ZONIX/ZonixProfile'
import ZonixMining from './screens/ZONIX/ZonixMining'
import ZonixDashboard from './screens/ZONIX/ZonixDashboard'
import ZonixEarn from './screens/ZONIX/ZonixEarn'
import ZonixSplash from './screens/ZONIX/ZonixSplash'
import ZonixEditProfile from './screens/ZONIX/ZonixEditProfile'

const handleTabPress = (e: any) => {
  e.preventDefault();

}
const Profilee = createNativeStackNavigator({
  screens: {
    ZonixProfile: {
      screen: ZonixProfile

    },
    ZonixEditProfile: {
      screen: ZonixEditProfile,
      options: {
        animation: 'slide_from_bottom',
=======












import { View } from 'react-native'
import React from 'react'
// Navigations
import { createStaticNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Icons
import Home from 'react-native-vector-icons/Feather'
import Find from 'react-native-vector-icons/MaterialCommunityIcons'
import Donation from 'react-native-vector-icons/Octicons'
import Profile from 'react-native-vector-icons/FontAwesome5'
//Screens
import BloodSplash from './screens/Bloodapp/BloodSplash'
import BloodLoginSignup from './screens/Bloodapp/BloodLoginSignup'
import BloodLogin from './screens/Bloodapp/BloodLogin'
import BloodSignup from './screens/Bloodapp/BloodSignup'
import BloodHome from './screens/Bloodapp/BloodHome'
import BloodProfile from './screens/Bloodapp/BloodProfile'
import BloodDonate from './screens/Bloodapp/BloodDonate'
import BloodDonor from './screens/Bloodapp/BloodDonor'
import { Provider } from 'react-redux'
import store, { persistor } from './store/Store'
import BloodDetail from './screens/Bloodapp/BloodDetail'
import BloodMyDonations from './screens/Bloodapp/BloodMyDonations'
import BloodForget from './screens/Bloodapp/BloodForget'
import { PersistGate } from 'redux-persist/integration/react'
import BloodEdit from './screens/Bloodapp/BloodEdit'
import BloodSearch from './screens/Bloodapp/BloodSearch'
import BloodLanguage from './screens/Bloodapp/BloodLanguage'
import BloodPrivacy from './screens/Bloodapp/BloodPrivacy'
import BloodTerms from './screens/Bloodapp/BloodTerms'

const stack2 = createNativeStackNavigator({
  screens: {
    BloodProfile1: {
      screen: BloodProfile,
      options: {
        headerShown: false,
      }
    },
    BloodEdit: {
      screen: BloodEdit,
      options: {
        headerShown: false,
      }
    },
    BloodMyDonations: {
      screen: BloodMyDonations,
      options: {
        headerShown: false,
>>>>>>> master
      }
    }

  },
  screenOptions: {
    headerShown: false
  }
})
const bottomnavigation = createBottomTabNavigator({
  screens: {
    Home: {
      screen: BloodHome,
      options: {
        animation: 'shift',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Home
            name='home' color={color} size={27}
          />
        )
      }
    },
    FindDonor: {
      screen: BloodDonor,
      options: {
        headerShown: false,
        animation: 'shift',


        tabBarIcon: ({ color }) => (
          <Find
            name='account-search-outline' color={color} size={28}
          />
        )
      }
    },
    Donation: {
      screen: BloodDonate,
      options: {
        headerShown: false,
        animation: 'shift',
        tabBarIcon: ({ color }) => (
          <Donation
            name='checklist' color={color} size={23}
          />
        )
      }
    },
    Profile: {
      screen: stack2,
      options: {
        headerShown: false,
        animation: 'shift',
        tabBarIcon: ({ color }) => (
          <Profile
            name='user-circle' color={color} size={26}
          />
        )
      }
    },
  },
  screenOptions: {
    tabBarActiveTintColor: '#D80032',
  }
})

const Stack = createNativeStackNavigator({
  screens: {
    BloodSplash: {
      screen: BloodSplash,
      options: {
        animation: 'slide_from_right',
        headerShown: false
      }
    },
    BloodLoginSignup: {
      screen: BloodLoginSignup,
      options: {
        headerShown: false,
      }
    },
    BloodLogin: {
      screen: BloodLogin,
      options: {
        headerShown: false,
      }
    },
    BloodSignup: {
      screen: BloodSignup,
      options: {
        headerShown: false,
      }
    },
    BloodTerms:{
      screen:BloodTerms,
      options:{
        headerShown:false,

      }
    },
    BloodHome: {
      screen: bottomnavigation,
      options: {
        headerShown: false,
      }
    },
    BloodDonate: {
      screen: BloodDonate,
      options: {
        headerShown: false,
      }
    },

    BloodDetail: {
      screen: BloodDetail,
      options: {
        headerShown: false,
      }
    },

    BloodForget: {
      screen: BloodForget,
      options: {
        headerShown: false,
      }
    },
    BloodSearch: {
      screen: BloodSearch,
      options: {
        headerShown: false,
      }
    },
    BloodLanguage:{
      screen:BloodLanguage,
      options:{
        headerShown:false
      }
    },
    BloodPrivacy:{
      screen:BloodPrivacy,
      options:{
        headerShown:false
      }
    }
  }
});


const Bottom = createBottomTabNavigator({
  screens: {
    ZonixHome: {
      screen: ZonixHome,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Home
            name='home' color={color} size={23}
          />
        )
      }
    },
    ZonixEarn: {
      screen: ZonixEarn,
      options: {
        tabBarLabel: 'Earn',
        tabBarIcon: ({ color }) => (
          <Earn
            name='attach-money' color={color} size={25}
          />
        )
      }
    },
    ZonixMining: {
      screen: ZonixMining,
      options: {
        title: 'Action',
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
            <View style={styles.cont}>
              {/* <Text style={styles.$}>$</Text> */}
              <Text style={styles.ZNX}>ZNX</Text>
            </View>
          </View>
        ),
        tabBarStyle: {
          display: 'none'
        }
      }
    },


    ZonixDashboard: {
      screen: ZonixDashboard,
      options: {
        tabBarLabel: 'Leaderboard',
        tabBarIcon: ({ color }) => (
          <Dash
            name='bar-chart-2' color={color} size={23}
          />
        )
      }
    },

    ZonixProfile: {
      screen: Profilee,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Profile
            name='user' color={color} size={23}
          />
        )
      }
    },

  },
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: '#23D9B1',
    tabBarStyle: {
      backgroundColor: '#16191E',
      borderColor: '#16191E',
    },
  },

})

const stack = createNativeStackNavigator({
  screens: {
    ZonixSplash: {
      screen: ZonixSplash,
      options: {
        animation: 'slide_from_left',
      }
    },

    ZonixLogin: {
      screen: ZonixLogin,
      options: {
        animation: 'slide_from_left',
      }
    },

    ZonixSignup: {
      screen: ZonixSignup,
      options: {
        animation: 'slide_from_right',
      }
    },

    ZonixHome: {
      screen: Bottom,
      options: {
      }
    },

    // ZonixMining:{
    //   screen:ZonixMining,
    //   options:{
    //     animation:'slide_from_bottom',
    //   }
    // },


  },
  screenOptions: {
    headerShown: false,
  }
})
const Navigation = createStaticNavigation(stack)
const App = () => {
<<<<<<< HEAD
  return <Navigation />

=======
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

  )
>>>>>>> master
}

export default App

<<<<<<< HEAD



const styles = StyleSheet.create({
  cont: {
    height: 50,
    width: 50,
    backgroundColor: '#23D9B1',
    transform: [{ rotate: '46deg' }],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 37,
    elevation: 15,
  },
  $: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{ rotate: '-46deg' }],
    fontSize: 50
  },
  ZNX: {
    fontSize: 18,
    transform: [{ rotate: '-46deg' }],
    color: '#fff',
    zIndex: 1,
    fontWeight: '600',
    fontFamily: 'Orbitron-Bold',
  }
})

=======
>>>>>>> master
