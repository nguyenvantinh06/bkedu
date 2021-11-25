import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const markedDatesArray = [
    {
        date: '2021-11-19',
        dots: [
            {
                color: 'red',
                selectedColor: 'yellow',
            },
        ],
    },
];


const CanlendarClass = () => {
    // let datesWhitelist = [{
    //   start: moment(),
    //   end: moment().add(1, 'days')  
    // }];

    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable
                calendarAnimation={{ type: 'sequence', duration: 10 }}
                daySelectionAnimation={{ type: 'background', duration: 50, highlightColor: 'yellow' }}
                style={{ height: 120, paddingTop: 20, paddingBottom: 10 }}
                iconContainer={{ flex: 0.1 }}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});
export default CanlendarClass;