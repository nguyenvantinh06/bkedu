import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, ShadowPropTypesIOS, TouchableOpacity } from 'react-native';
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

const { width, height } = Dimensions.get('screen')

const CanlendarClass = () => {

    const data = [{
        title: 'Tiết 10: Gương cầu',
        time: '9:00-9:45',
    },
    {
        title: 'Tiết 9: Số hữu tỉ',
        time: '8:00-8:45',
    },
    {
        title: 'Tiết 12: Vợ chồng A Phủ',
        time: '13:00-13:45',
    }]

    // let datesWhitelist = [{
    //   start: moment(),
    //   end: moment().add(1, 'days')  
    // }];

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Tham gia </Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable
                calendarAnimation={{ type: 'sequence', duration: 10 }}
                daySelectionAnimation={{ type: 'background', duration: 50, highlightColor: 'yellow' }}
                style={{ height: 120, paddingTop: 20, paddingBottom: 10 }}
                iconContainer={{ flex: 0.1 }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: width * 0.9,
        height: height * 0.12,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        elevation: 5,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 16,
        margin: 10
    },
    button: {
        position: 'absolute',
        right: 30,
        top: 40,
        width: 120,
        height: 40,
        backgroundColor: '#00A9B7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
});
export default CanlendarClass;