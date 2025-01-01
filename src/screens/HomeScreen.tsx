import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, SafeAreaView, StatusBar } from 'react-native';
import { BadgePlus, HandHeart, HeartOff, Menu } from 'lucide-react-native';
import { pets } from '../models/pets';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const addNewPet = () => {
    console.log('Add New Pet');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Menu size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.appName}>PetMatch</Text>
        <TouchableOpacity onPress={addNewPet}>
          <BadgePlus size={30} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Dropdown Menu */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.menuOverlay} onPress={toggleMenu}>
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Profile</Text>
            <Text style={styles.menuItem}>Settings</Text>
            <Text style={styles.menuItem}>Logout</Text>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Pet Cards */}
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.petName}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.petAge}>{item.age}</Text>
            <Text style={styles.petDescription}>{item.description}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.likeButton}>
                <HandHeart color="#fff" size={40} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.skipButton}>
                <HeartOff color="#fff" size={40} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 15,
    width: 200,
    marginTop: 50,
    marginRight: 10,
    borderRadius: 8,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#333',
  },
  card: {
    height: height - 200, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 30,
    marginHorizontal: 20,
    paddingTop: 20,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    marginBottom: 20,
  },
  petName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  petAge: {
    fontSize: 20,
    color: '#777',
    marginBottom: 10,
  },
  petDescription: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  likeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 50,
  },
  skipButton: {
    backgroundColor: '#FF5252',
    padding: 15,
    borderRadius: 50,
  },
});