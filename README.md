# TimingAI Frontend Internship — Take-Home Assessment

This repository contains my submission for the TimingAI Frontend Internship Take-Home Assessment. It is organized into two main parts: a web-based task manager and a mobile-based Pomodoro timer.

## Project Structure

- `web/`: Next.js project for Part A.
- `mobile/`: React Native/Expo project for Part B.

---

## Part A — React/Next.js (Web)

A simple web page built with React, Next.js, and TypeScript that implements a task manager with a built-in timer.

### Features & Requirements Met
1. **Add Task**: 
   - Input field allows adding tasks via Enter key or "Add" button.
   - Input box is positioned at the bottom for better UX on mobile devices.
2. **Task List**: 
   - Displays all tasks with title, Start/Stop controls, and accumulated time (mm:ss).
   - **Bonus**: Added a Delete button to remove individual tasks.
3. **Timer Logic**: 
   - Ensures only one task runs at a time (starting a new task automatically stops the previous one).
   - Accumulates total time when stopped.
   - **Persistence**: Tasks and their time data persist after page refresh using `localStorage`.
   - **Accuracy**: Uses timestamps (`Date.now()`) to calculate elapsed time, ensuring accuracy even if the tab is inactive.
4. **UI**: 
   - Clean, structured code using Tailwind CSS.
   - Responsive design that handles virtual keyboards on mobile devices.

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
4. Open [http://localhost:3000](http://localhost:3000).

---

## Part B — React Native/Expo (Mobile)

A "Task Detail" screen built with React Native (Expo) featuring a Pomodoro timer.

### Features & Requirements Met
1. **Display**: 
   - Shows task title and description (using mock data).
   - **Mock Data**: "Finish Eating Dinner" - "Enjoy and finish all courses of the dinner meal, from appetizers to dessert."
2. **Pomodoro Timer**: 
   - Counts down from 25:00.
   - Visuals mimic a real-life tomato timer with a custom UI.
3. **Buttons**: 
   - Start, Pause, and Reset functionality.
   - Buttons are integrated into the tomato timer design.
4. **Timer Logic**: 
   - Supports pause & resume.
   - Logic is encapsulated in a custom `usePomodoro` hook.
5. **UI**: 
   - Clear, readable layout using `StyleSheet`.
   - Uses `react-native-safe-area-context` for proper safe area handling.

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
   - Press `a` for Android emulator.
   - Press `i` for iOS simulator.
   - Scan the QR code with the Expo Go app to run on a physical device.

---

## Technical Decisions & Design Notes

- **Web**:
  - **Framework**: Next.js was chosen for its zero-config TypeScript support and fast development cycle.
  - **Icons**: Used `lucide-react` for clean, modern UI icons.
  - **Mobile Responsiveness**: The layout uses dynamic viewport units (`100dvh`) to ensure the input bar stays visible above the virtual keyboard on mobile browsers.

- **Mobile**:
  - **Custom UI**: Instead of a plain text timer, I implemented a custom "Tomato" UI using standard React Native `View` styling to make the Pomodoro experience more engaging.
  - **Safe Areas**: Migrated to `react-native-safe-area-context` to handle notches and home indicators correctly on modern devices.
