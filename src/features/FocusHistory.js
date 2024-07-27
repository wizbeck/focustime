import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) return <Text style={styles.title}>We haven't focused on anything yet!</Text>

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList style={{}} data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
