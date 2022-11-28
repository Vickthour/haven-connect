import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/Colors';
import React from 'react';
import { Text } from '../Themed';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const Settingitem = ({iconType = 'MI', iconName, iconBgColor, title, route = '', style = {}}) => {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={.7} style = {[tw`flex-row justify-between items-center  py-2 px-2 border-t border-b`, {borderColor: Colors[colorScheme].backgroundOpac, borderTopWidth: 0.3, borderBottomWidth: 0.3, backgroundColor: colorScheme == 'light'? '#fff': '#0F0E0E'}]}>
            <View style = {tw`flex-row justify-between items-center`}>
                <View style={[tw`p-1  rounded-lg`, {backgroundColor: iconBgColor}]}>
                    {iconType == 'MI' && (
                        <MaterialIcons
                            name = {iconName}
                            size = {24}
                            color = {'#fff'}
                            style = {style}
                        />
                    ) ||
                    
                    iconType == 'F' && (
                        <Fontisto
                            name = {iconName}
                            size = {24}
                            color = {'#fff'}
                            style = {style}
                        />
                    ) ||
                    iconType == "MCI" && (
                        <MaterialCommunityIcons
                            name = {iconName}
                            size = {24}
                            color = {'#fff'}
                            style = {style}
                        />
                    ) ||
                    iconType == "AD" && (
                        <AntDesign
                            name = {iconName}
                            size = {24}
                            color = {'#fff'}
                            style = {style}
                        />
                    )
                    }
                </View>
                <View>
                    <Text numberOfLines={2} ellipsizeMode = {'tail'}  style = {tw`font-semibold text-lg mx-3`}>{title}</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color={Colors[colorScheme].tabIconDefault} />
        </TouchableOpacity>
    )
}

export default Settingitem;
