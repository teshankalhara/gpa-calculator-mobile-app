import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface AddAccountButtonProps {
  title: string
  iconName: string
  onPress: () => void
}

export default function AddAccountButton({
  title,
  iconName,
  onPress,
}: AddAccountButtonProps) {
  return (
    <View className="flex-1 items-center justify-center">
      {/* Modern Button */}
      <TouchableOpacity
        className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-xl shadow-lg flex-row items-center"
        onPress={onPress}
      >
        {/* Optional Icon */}
        <Icon name={iconName} size={20} color="white" className="mr-2" />
        <Text className="text-white font-bold text-xl">{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
