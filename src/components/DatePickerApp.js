// import React, {useState} from 'react';
// import {View, Button, Platform, StyleSheet} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { MaterialIcons } from '@expo/vector-icons'; 

// const DatePickerApp = () => {
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState('Empty');

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform === 'android');
//     setDate(currentDate);

//     let tempDate = new Date(currentDate);
//     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear()
//     console.log(fDate);
//   };

  

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <View>
//         {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
//         <MaterialIcons name="insert-invitation" size={30} color="#B5B5B5" onPress={showDatepicker} />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: '#fff',
//         justifyContent: "center",
//         alignItems: "center",
//     }
// });
// export default DatePickerApp;

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

const DatePickerApp = () => {
  const [date, setDate] = useState(new Date());

  return (
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="Hạn nộp"
          format="DD/MM/YYYY"
          // minDate= {moment().startOf('day')}
          minDate="24-11-2021"
          maxDate="01-01-2024"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "#B5B5B5",
              alignItems: "flex-start",
              borderWidth: 0,
              color: "#B5B5B5"
            },
            placeholderText: {
              fontSize: 14,
              color: "gray"
            },
            dateText: {
              fontSize: 14,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
  );
};

export default DatePickerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  datePickerStyle: {
    flex:1
  },
});