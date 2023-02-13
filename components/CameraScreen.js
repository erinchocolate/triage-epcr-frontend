import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraButton from './CameraButton';


export default function OpenCamera({ changeView}) {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);


  useEffect(() => {
    (async ()=> {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");    
    })();
  }, [])


  const takePicture = async () =>{
    if(cameraRef){
      try{
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      }catch(e){
        console.log(e);
      }
    }
  }

  const saveImage = async () =>{
    if(image){
      try{
        await MediaLibrary.createAssetAsync(image);
        alert('Picture save!')
        setImage(null);
      }catch(e){
        console.log(e)
      }
    }
  }


  if(hasCameraPermission === false){
    return <Text>No access to camera</Text>
  }


  return (
    <View style={styles.container}>
      
      {!image ?
      <Camera 
          style={styles.container}
          type={type}
          flashMode={flash}
          ref={cameraRef} 
        
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 80,
          height: '115%',
        }}>
          <CameraButton icon={'circle-with-cross'}   onPress={() => changeView('assessment')}/>
          <CameraButton icon={'retweet'} onPress={() => {
            setType(type === CameraType.back ? CameraType.front : CameraType.back)
          }}/>
          <CameraButton icon={'flash'} 
            color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
            onPress={() =>{            
              setFlash(flash === Camera.Constants.FlashMode.off 
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
                )
          }}/>
        </View>
      </Camera>
      :
      <Image source={{uri: image}} style={styles.camera}/>
      }
      <View>
        {image ?
        <View style={{
          backgroundColor: '#332d2d',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50
        }}>
          <CameraButton title={"Re-take"} icon="retweet" onPress={() => setImage(null)}/>
          <CameraButton title={"Save"} icon="check" onPress={saveImage}/>
        </View>
        :       
        <CameraButton title={'Take a Picture'} icon="camera" onPress={takePicture}/>
        }
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    //...StyleSheet.absoluteFillObject,
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center',
    paddingBottom:20,
  }, 
  camera:{
    flex:1,
  }
});

