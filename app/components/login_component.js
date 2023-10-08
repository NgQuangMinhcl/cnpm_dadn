import { View, Text,Modal, StyleSheet,TouchableOpacity } from 'react-native';

const Loginmodal = ({message,visible,onHide}) => {
  return <Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Notification</Text></View>
        <View><Text>{message}</Text></View>
        <View>
        <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#00A7EB"}} onPress={onHide}>
        <Text>Close</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
  </Modal>
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor : 'rgba(00,00,00,.5)',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20
  },
  noti :{
    backgroundColor : 'white',
    width : "100%",
    borderRadius: 10,
    padding: 20
  },
  text :{
    fontSize : 20,
    color: 'black'
  },
  header : {
     justifyContent : 'center',
     alignItems : 'center',
     marginBottom: 20
  }
});
export default Loginmodal;
