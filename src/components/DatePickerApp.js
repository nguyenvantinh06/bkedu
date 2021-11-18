import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons'; 

const DatePickerApp = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear()
    console.log(fDate);
  };

  

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
        <MaterialIcons name="insert-invitation" size={30} color="#B5B5B5" onPress={showDatepicker} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    }
});
export default DatePickerApp;