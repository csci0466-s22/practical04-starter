import { View, Text, StyleSheet } from "react-native";



function DetailsScreen(){

  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
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

export default DetailsScreen;