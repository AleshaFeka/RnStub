// import React from 'react';
// import { Text, View } from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         Try editing me! 🎉
//       </Text>
//     </View>
//   );
// }

// export default YourApp;


import React, { Component } from "react";
import { Button, 
  Image,
  Text, 
  View } from "react-native";

class Wrapper extends Component {
  render() {
    return (
      <>
        <View style = {{
          flex: 1, 
          flexDirection: "column", 
          justifyContent: "flex-start", 
          alignItems: "center"
        }}>
          <Image source={require('./img/stator.jpg')} style={{height: "50%", width:"100%"}}/>

          <View style={{height: "10%", width:"100%",borderWidth: 1, justifyContent: "center" }}>
            <Button
                title = "Action"
              />
          </View>

          <View style={{height: "40%", width:"100%",borderWidth: 1}}>
            <Text>
              Hello!
            </Text>
          </View>
        </View>
      </>
    );
  }
}

export default  Wrapper;
