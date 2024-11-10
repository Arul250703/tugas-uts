import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

// Data makanan lokal
const foodData = [
  {
    id: 1,
    title: 'Sate Ayam',
    image: 'https://i.pinimg.com/474x/84/1b/c1/841bc1665850351ce27e2850ec63241b.jpg',
  },
  {
    id: 2,
    title: 'Mie Ayam',
    image: 'https://i.pinimg.com/474x/10/9c/a0/109ca0cd6c676168beb76544a6052bd3.jpg',
  },
  {
    id: 3,
    title: 'Bakso',
    image: 'https://i.pinimg.com/474x/3a/9a/43/3a9a437acebfed3f968caadfd3df055d.jpg',
  },
  {
    id: 4,
    title: 'Nasi Goreng',
    image: 'https://i.pinimg.com/474x/4d/89/4a/4d894ae7d925293f90b3aa7e5b3a316c.jpg',
  },
  {
    id: 5,
    title: 'Rendang',
    image: 'https://i.pinimg.com/474x/06/86/8d/06868d0d342290434ac1d00586cdbab9.jpg',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'URL_GAMBAR_MAKANAN_ABU_ABU' }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Makanan Favorit</Text>
        <FlatList
          data={foodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500', 
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  foodImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  foodName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;
