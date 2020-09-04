import RNFS from 'react-native-fs';
import NativeCamera from './NativeCameraBridge';
import React, { Component } from "react";
import { Button, 
  Image,
  Text, 
  View, 
  ScrollView} from "react-native";

class Wrapper extends Component {

  state = {
    imagePath: "STUB",
    consoleText : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.              
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`
  };

  onButtonTap() {
    var text = "New console output";
    this.setConsoleOutputText(text)
    this.setImage(text)
    console.log(text)
  }

  setConsoleOutputText(text) {
    this.setState ({ consoleText: text })   
  }

  setImage(path){
    NativeCamera.show(path, NativeCamera.SHORT);
  }

  render(props) {

    return (
      <>
        <View style = {{
          flex: 1, 
          flexDirection: "column", 
          justifyContent: "flex-start", 
          alignItems: "center"
        }}>
          <Image source={{ uri: this.state.imagePath }} style={{height: "50%", width:"100%"}}/>

          <View style={{height: "10%", width:"100%",justifyContent: "center" }}>
            <Button
                title = "Action"
                onPress={ this.onButtonTap.bind(this) }
              />
          </View>
          <Text>
              Logs output:
          </Text>

          <View style={{height: "35%", width:"100%",borderWidth: 1}}>
            <ScrollView>
              <Text>
                {this.state.consoleText}
              </Text>
            </ScrollView>
          </View>
        </View>
      </>

    );
  }
}

export default  Wrapper;
