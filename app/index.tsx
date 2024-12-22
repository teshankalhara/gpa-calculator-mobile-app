import { View, Text } from 'react-native'
import '../global.css'
import AddAccountButton from '@/components/addAccountButton/addAccountButton'

const index = () => {
  const handleAddAccount = () => {
    console.log('Account Added', 'Your account has been successfully added.')
  }

  const handleDeleteAccount = () => {
    console.log('Account Deleted', 'Your account has been successfully deleted.')
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
        iconName="person-remove"
        onPress={handleDeleteAccount}
      />
    </View>
  )
}

export default index