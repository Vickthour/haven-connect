import * as React from 'react'

import { SafeAreaView, ScrollView } from 'react-native'
import {Text, View} from '../components/Themed'

import ChatMessage from '../components/chatMessage'
import ChatRoomData from '../data/Chats'
import ChatRoomScreenHeader from '../headers/ChatRoomScreenHeader'
import { useRoute } from '@react-navigation/native'
import { user } from '../types'

const ChatRoomScreen = () => {
    const route = useRoute();
    const user:user = route.params as user;
    
    return(
        <View>
            <ChatRoomScreenHeader name = {user.name} avatar = {user.imageUri}/>
            <ScrollView>
                <ChatMessage message={ChatRoomData.messages[6]}  />
            </ScrollView>
        </View>
    )
}

export default ChatRoomScreen