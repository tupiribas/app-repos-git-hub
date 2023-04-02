import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({repo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repo.name}</Text>
      <Text style={styles.description}>{repo.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.language}>{repo.language}</Text>
        <Text style={styles.stars}>{repo.stargazers_count} stars</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  language: {
    fontSize: 12,
    color: '#555',
  },
  stars: {
    fontSize: 12,
    color: '#555',
  },
});

export default Card;
