import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';
import { colors } from './utils/colors';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  const addToHistory = (subject) => {
    setHistory([...history, subject])
  }

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => {setCurrentSubject(null)}}
          onTimerEnd={addToHistory}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.outerSpace,
  },
});
