# TimingAI Take-Home Assessment

This repository contains my solution for the TimingAI Frontend Internship Take-Home Assessment.

## Project Structure

- `web/`: Next.js project for Part A (Task Manager).
- `mobile/`: React Native/Expo project for Part B (Pomodoro Timer).

## Part A: Web (Task Manager)

A simple web page using React + TypeScript that implements a basic task manager with a built-in timer.

### Features
- Add tasks.
- Start/Stop timers for each task (only one active at a time).
- Accumulate time for tasks.
- Added a delete button to easily remove tasks without clearing `localStorage`.
- Persist data using `localStorage`.

### Setup & Run

1. Navigate to the `web` directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Technical Notes
- **State Management**: A custom hook `useTasks` manages the task list and timer logic.
- **Timer Accuracy**: The timer calculates elapsed time based on start timestamps rather than counting intervals, ensuring accuracy even if the browser tab is inactive. A local interval is used only for updating the UI.
- **UI**: Tailwind CSS is used for styling.

## Part B: Mobile (Pomodoro Timer)

A "Task Detail" screen using React Native (Expo) with a Pomodoro timer.

### Features
- Display task title and description.
- 25-minute countdown timer.
- Start/Pause/Reset functionality.

### Setup & Run

1. Navigate to the `mobile` directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Expo development server:
   ```bash
   npm run start
   ```

   - Press `a` for Android (requires emulator).
   - Press `i` for iOS (requires simulator).
   - Scan the QR code with the Expo Go app on your physical device.

### Technical Notes
- **Timer Logic**: A custom hook `usePomodoro` manages the countdown logic.
- **Layout**: `SafeAreaProvider` and `SafeAreaView` from `react-native-safe-area-context` are used for safe area handling. `ScrollView` ensures content is accessible on different devices.
- **Styling**: `StyleSheet` is used for component styling.

