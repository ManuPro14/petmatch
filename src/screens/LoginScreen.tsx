import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({navigation}:any) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const users = [
    {email:'manupro1014@petmatch.co',password:'Password123'},
    {email:'prueba1@petmatch.co',password:'1234'}
  ]

  const handlelogin = () => {
    const user = users.find(user => user.email === email && user.password === password);
    if(user){
      navigation.navigate("Home");
    }else{
      Alert.alert('Tu contraseña o email son incorrectos. Intenta de nuevo 🐾');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        value={email}
        onChangeText={setEmail}
        />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
        />
      <TouchableOpacity style={styles.button} onPress={handlelogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#4A90E2',
    fontSize: 14,
    marginTop: 15,
  },
});