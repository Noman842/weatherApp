import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice/Slice';
import EmailandData from './Slice/EmailandData';
import BloodandData from './Slice/BloodSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persist = {
    key: 'root',
    storage: AsyncStorage
}

const persists = persistReducer(persist, BloodandData)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        Email: persists,
        Blood: persists,
    },
    middleware:(GetDefault)=>
        GetDefault({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
            }
        })
});


export const persistor = persistStore(store)
export default store;
store.subscribe(() => {
    console.log('item in store', JSON.stringify(store.getState(), null, 2))
})