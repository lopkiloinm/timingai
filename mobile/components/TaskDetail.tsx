import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { usePomodoro } from '../hooks/usePomodoro';

interface Task {
  title: string;
  description: string;
}

interface Props {
  task: Task;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const TaskDetail = ({ task }: Props) => {
  const { timeLeft, isActive, toggleTimer, resetTimer } = usePomodoro();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>

      <View style={styles.timerWrapper}>
        {/* Tomato Stem/Leaves */}
        <View style={styles.stemContainer}>
          <View style={styles.leafLeft} />
          <View style={styles.stem} />
          <View style={styles.leafRight} />
        </View>

        {/* Tomato Body */}
        <View style={styles.tomatoBody}>
          {/* Reflection/Gloss for 3D effect */}
          <View style={styles.gloss} />
          
          <View style={styles.face}>
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
            <Text style={styles.label}>MIN</Text>
          </View>

          {/* Integrated Buttons */}
          <View style={styles.controls}>
            <TouchableOpacity
              style={[styles.roundButton, isActive ? styles.stopButton : styles.startButton]}
              onPress={toggleTimer}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonLabel}>{isActive ? 'PAUSE' : 'START'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.roundButton, styles.resetButton]}
              onPress={resetTimer}
              activeOpacity={0.7}
            >
              <Text style={[styles.buttonLabel, styles.resetLabel]}>RESET</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 60,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  timerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  stemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: -15, // Overlap with body
    zIndex: 10,
  },
  stem: {
    width: 24,
    height: 30,
    backgroundColor: '#388E3C',
    borderRadius: 4,
  },
  leafLeft: {
    width: 30,
    height: 15,
    backgroundColor: '#4CAF50',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '-20deg' }, { translateX: 5 }],
    marginBottom: 5,
  },
  leafRight: {
    width: 30,
    height: 15,
    backgroundColor: '#4CAF50',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ rotate: '20deg' }, { translateX: -5 }],
    marginBottom: 5,
  },
  tomatoBody: {
    width: 300,
    height: 300,
    backgroundColor: '#FF5252',
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#D32F2F',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    overflow: 'hidden', // Clip content to circle
  },
  gloss: {
    position: 'absolute',
    top: 30,
    left: 50,
    width: 80,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    transform: [{ rotate: '-20deg' }],
  },
  face: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    minWidth: 180,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timerText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#333',
    fontVariant: ['tabular-nums'],
    letterSpacing: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#999',
    marginTop: 4,
  },
  controls: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  roundButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  startButton: {
    backgroundColor: '#4CD964', // Green
  },
  stopButton: {
    backgroundColor: '#FFC107', // Amber/Yellow for Pause
  },
  resetButton: {
    backgroundColor: '#EEEEEE',
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: 'white',
    marginTop: 0,
  },
  resetLabel: {
    color: '#555',
  },
  shadow: {
    width: 200,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 50,
    marginTop: 20,
  },
});
