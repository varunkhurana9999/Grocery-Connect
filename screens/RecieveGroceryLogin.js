import React, {useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';



export default function RecieveGrocery() {

  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitValue = () => {
     const frmdetails = {
         'First Name' : fName,
         'Last Name' : lName,
         'Phone' : phone,
         'Email' : email
     }
     console.log(frmdetails);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
        <Input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
        <Input type="text" placeholder="Phone Number" onChange={e => setPhone(e.target.value)} />
        <Input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <Input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <Button title="Submit" onClick={submitValue()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
