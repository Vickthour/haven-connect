import * as React from 'react'

import {Text, View} from '../components/Themed'

import ChatMessage from '../components/chatMessage'
import ChatRoomData from '../data/Chats'
import ChatRoomScreenHeader from '../headers/ChatRoomScreenHeader'
import { FlatList } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'
import InputBox from '../components/inputBox'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { user } from '../types'

// import BG from '../assets/images/BG.png'









const ChatRoomScreen = () => {
    const route = useRoute();
    // useRoute Hook is used to access the params passed through the useNavigateion hook
    const user:user = route.params as user;
    
    return(
        <View style = {[tw`pb-5`,{flex: 1}]}>
            <ChatRoomScreenHeader user = {user}/>
                <FlatList 
                    style={{width: "100%", }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                    data={ChatRoomData.messages}
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item}) => <ChatMessage message={item} /> }
                />
                {/* Input Box */}
                <InputBox />
        </View>
    )
}

export default ChatRoomScreen