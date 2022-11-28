import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import ContactList from '../components/ContactList';
import NewChatNavs from '../components/NewChatNav';
import SearchBar from '../components/searchBar';
import SectionTitle from '../components/NewChatSectionTitle';
import { StatusBar } from 'expo-status-bar';
import Users from '../data/Users';
import tw from 'twrnc';
import useColorScheme from '../hooks/useColorScheme';
import { useState } from 'react';

const Freqs: Array<string> = [];
export default function NewChatModalScreen() {
  const [users, setUsers] = useState(Users);
  const [query, setQuery] = useState('')
  const colorScheme = useColorScheme();
  
  const filteredUsers =query === '' ? Users: Users.filter((user) =>
  user.name
    .toLowerCase()
    .replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, ''))
)
  const onSearch = (name: string) => {
    setQuery(name);
  }
  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <NewChatModalHeader /> */}
      <View style = {tw`w-full px-3 bg-${colorScheme == 'light'? 'white': '[#333333]'}`}>
        <SearchBar search = {onSearch} style = {tw`bg-${colorScheme == 'light'? `[#ebebeb]`:'[#3b3b3b]'}`} />
      </View>
      <View style = {tw`w-full py-2`}>
        <NewChatNavs />
      </View>
      
      {
        Freqs.length > 0 && (
          <View style = {tw`w-full`}>
            <SectionTitle title = {'Frequently Contacted'} />
          </View>
        )
      }
      <ScrollView style = {tw`w-full`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
      >
       <ContactList data = {users}  />
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

