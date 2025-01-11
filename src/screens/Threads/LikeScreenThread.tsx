import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LikeScreenThread = () => {
  return (
    <View style={styles.body}>
      <View style={{ margin: 16, }}>
        <Text style={styles.title}>Activity</Text>
      </View>
     
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
        <ScrollView
      showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
          <TouchableOpacity style={styles.scrollview1}>
            <Text style={{ color: 'black', fontSize: 15 }}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrollview}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrollview}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Replies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrollview}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Mentions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrollview}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Quotes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrollview}>     
              <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Reposts</Text>
          </TouchableOpacity>
          </ScrollView>


        </View>
    </View>
  )
}

export default LikeScreenThread

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#101010'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  scrollview1: {
    height: 35,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  scrollview: {
    height: 35,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transperant',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 10
  }
})