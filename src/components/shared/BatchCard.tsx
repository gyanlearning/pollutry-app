import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const BatchCard = ({ data ,index}) => {
  return (
    <View style={styles.card}  key={index} >
      <Text style={styles.title}>Batch ID: {data.batchId}</Text>
      <Text>Company ID: {data.companyId}</Text>
      <Text>Quantity: {data.quantity}</Text>
      <Text>Available Quantity: {data.availble_quantity}</Text>
      <Text>Started Date: {moment(data.started_date).format('YYYY-MM-DD')}</Text>
      <Text>Duration: {data.duration} days</Text>
      <Text>Close Date: {moment(data.close_date).format('YYYY-MM-DD')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BatchCard;
