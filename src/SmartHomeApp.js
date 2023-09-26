import React from 'react';
//import firebase from './firebase';
//import { getDatabase, ref, set, onValue } from "firebase/database";
import Sidebar from './component/Sidebar/Sidebar';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



const SmartHomeApp = () => {
  // const [temperature, setTemperature] = useState(null);
  // const [humidity, setHumidity] = useState(null);
  // const [lightLevel, setLightLevel] = useState(null);
  // const [lightStatus, setLightStatus] = useState(false);

  // // Sử dụng useEffect để lắng nghe dữ liệu từ Firebase Realtime Database
  // useEffect(() => {
  //   const databaseRef = ref(getDatabase(),'/smart-home')

  //   onValue(databaseRef, (snapshot) => {
  //       const username = (snapshot.val() && snapshot.val()) || 'Anonymous';
  //       console.log(username)
    // ...
    // });
    // Lắng nghe sự thay đổi của dữ liệu
    // databaseRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   if (data) {
    //     setTemperature(data.temperature);
    //     setHumidity(data.humidity);
    //     setLightLevel(data.lightLevel);
    //     setLightStatus(data.lightStatus);
    //   }
    // });

    // Ngắt kết nối khi component unmount
    // return () => {
    //   databaseRef.off();
    // };
  // }, []);

  // const toggleLight = () => {
  //   // Gửi lệnh điều khiển đèn tới Firebase Realtime Database
  //   const databaseRef = firebase.database().ref('smart-home');
  //   databaseRef.update({ lightStatus: !lightStatus });
  // };

  return (
    <div className='home'>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={2}><Sidebar /></Col>
        <Col><Home /></Col>
      </Row>
      
        
      
      
        
    </div>
  );
};

export default SmartHomeApp;
