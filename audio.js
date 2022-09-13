


// import { StyleSheet, Text, View , Button } from 'react-native';
// import{ Audio} from 'expo-av'
// import * as React from 'react'

// export default function App() {
//   //https://www.youtube.com/watch?v=70K6QL0lYRQ

// const [recording, setRecording]= React.useState();
// const [recordings, setRecordings]= React.useState();
// const [message, setMessage]= React.useState();

// async function startRecording() {
//     try{
//         const permission= await Audio.requestPermissionsAsync();
//         if (permission.status ==='granted'){
//             await Audio.setAudioModeAsync({
//                 allowsRecordingIOS: true,
//                 playsInSilentModeIOS: true

//             });
//             const {recording} = await Audio.Recording.createAsync(
//                 Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//             );
//             setRecording(recording)
//         }else{
//             setMessage("please grant permission to app access microphone")
//         }
//     }catch(err){
//         console.error('failed to start recording', err)
//     }
  
// }

// async function stopRecording(){
//     setRecording(undefined)
//     await recording.stopAndUnloadAsync();

//     //get recordings
//     let updateRecordings =[...recordings]
//     const {sound, status} = await recording.createNewLoadedSoundAsync();
//     updateRecordings.push({
//         sound: sound,
//         duration: getDurationFormatted(status.durationMillis),
//         file: recording.getURI()
//     });
//     setRecordings(updateRecordings); 
// }

// //function to get duration
// function getDurationFormatted(millis){
//     const minutes=millis / 1000 / 60;
//     const minutesDisplay=Math.floor(minutes);
//     const seconds=Math.round((minutes-minutesDisplay) *60);
//     const secondsDisplay=seconds< 10 ? `0${seconds}` : seconds;
//     return `${minutesDisplay}:${secondsDisplay}`;
// }

// function getRecordingLines(){
//     return recordings.map((recordingLine, index)=>{
//         return(
//             <View key={index} style={styles.row}>
//                 <Text style={styles.fill}> Recording {index + 1} - {recordingLine.duration}</Text>
//                 <Button style={styles.button} onPress={()=>recordingLine.sound.replayAsync()} title="play"></Button>
//             </View>
//         )
//     });
// }

//   return (
//     <View style={styles.container}>
//       <Text>{message}</Text>
//       <Button
//          title={recording ? 'Stop recording' : 'Start recording' }
//          onPress={recording? stopRecording : startRecording}   {getRecordingLines()}
       

//       />
  
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   row:{
//     flexDirection:'row',
//     alignItems: 'center',
//     justifyContent:'center',

//   },
//   fill:{
//     flex:1,
//     margin: 16
//   },
//   button:{
//     margin:16
//   }
// });


///  https://snyk.io/advisor/npm-package/react-native-waveview-android
