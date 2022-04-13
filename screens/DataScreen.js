import { View, Text, Button, StyleSheet } from "react-native";



function DataScreen({navigation}){

  return(
    <View style={styles.container}>
      <Text>Data Screen</Text>
      <Button
        title='Go to Details'
        onPress={()=>navigation.navigate('Details')}
        />
    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
});

export default DataScreen;