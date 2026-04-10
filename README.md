# Taskio

A modern, clean Task Manager mobile application built with React Native and Expo Router. 

## Project Overview

Taskio allows users to easily manage their daily tasks. In this initial version, users can:
- Add a new task with a short description.
- View a list of all their tasks.
- Toggle task completion status.
- Delete a task.

The app is built keeping modern React Native frontend best practices in mind, utilizing global lightweight state management, form validation, and utility-first styling.

## Setup & Run Instructions

To install and run the project locally, follow these steps:

1. **Install Dependencies**
   Make sure you have Node and npm installed. From the project root, run:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   Start the Expo development server:
   ```bash
   npm start
   ```

3. **Run on a Device or Emulator**
   - Press `a` to run on an Android emulator.
   - Press `i` to run on an iOS simulator (Requires a Mac).
   - Alternatively, scan the QR code using the Expo Go app on your physical device.

## Tech Stack Summary

The following technologies were used to build this application:
- **React Native / Expo**: Core framework and development environment using Expo Router for file-based navigation.
- **TypeScript**: Ensuring end-to-end type safety.
- **Zustand**: Lightweight, predictable global state management for the tasks.
- **react-hook-form & zod**: Handling form interactions and schema-based validation safely.
- **NativeWind**: Utility-first styling integrating Tailwind CSS seamlessly with React Native.
- **Lucide React Native**: Beautiful and consistent SVG icons.

## Notes & Assumptions

- **Architecture**: The application follows a feature-based architecture pattern, keeping domains isolated and scalable.
- **State Storage**: Tasks are currently stored in-memory using Zustand and will reset upon app reload.
- **Styling**: NativeWind v2 is used as a reliable integration of Tailwind with React Native, avoiding peer dependency clashes.
