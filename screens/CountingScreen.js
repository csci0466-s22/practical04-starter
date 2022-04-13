import { View, Text, StyleSheet } from "react-native";



function CountingScreen(){

  return(
    <View style={styles.container}>
      <Text>Counting Screen</Text>
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

export default CountingScreen;