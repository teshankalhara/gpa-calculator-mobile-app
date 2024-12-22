import { View, Text, Alert } from 'react-native'
import '../global.css'
import AddAccountButton from '@/components/addAccountButton/addAccountButton'

const index = () => {
  const handleAddAccount = () => {
    Alert.alert('Account Added', 'Your account has been successfully added.')
  }

  const handleDeleteAccount = () => {
    Alert.alert('Account Deleted', 'Your account has been successfully deleted.')
  }
  return (
    <View>
      <Text className='text-5xl text-blue-700'>App</Text>
      <AddAccountButton
        title="Add Account"
        iconName="person-add"
        onPress={handleAddAccount}
      />
      <AddAccountButton
        title="Delete Account"
        iconName="person"
        onPress={handleDeleteAccount}
      />
    </View>
  )
}

export default index