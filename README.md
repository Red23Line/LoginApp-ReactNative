# 📚 StudyMate — Student Task Management App

StudyMate is a student productivity application built with React Native, Expo, and TypeScript. It is designed to help students organize academic tasks, monitor their progress, and view their study schedule through a clean and modern dashboard.

The project started as a login screen UI and is being developed into a student task management application.

## ✨ Features

### 🔐 Login Screen
- Modern login interface with a purple gradient background
- Username and password input fields
- Password visibility toggle
- Basic input validation
- Navigation to the Home dashboard

### 📊 StudyMate Dashboard
- Personalized greeting
- Summary of total, pending, and completed tasks
- Automatic study progress calculation
- Interactive task checklist
- Sample academic schedule
- Logout navigation

### 🎨 User Interface
- Consistent purple and white color theme
- Reusable input and button components
- Card-based dashboard layout
- Responsive layout for supported screen sizes

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React Native | User interface development |
| Expo | Development and application runtime |
| TypeScript | Type-safe JavaScript development |
| Expo Router | File-based navigation |
| Expo Linear Gradient | Gradient backgrounds |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
LoginApp-ReactNative/
├── assets/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── home.tsx
│   │   └── explore.tsx
│   └── components/
│       ├── InputField.tsx
│       ├── PrimaryButton.tsx
│       └── app-tabs.web.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Git
- Expo-compatible development environment

### Installation

Clone the repository:

```bash
git clone https://github.com/Red23Line/LoginApp-ReactNative.git
```

Navigate to the project directory:

```bash
cd LoginApp-ReactNative
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start
```

Follow the Expo terminal instructions to open the application in a supported environment.

## 🧪 Current Project Status

StudyMate is currently a frontend prototype.

- Login validation only checks whether the username and password fields are filled in.
- No real account authentication or backend integration is implemented yet.
- Task and schedule information currently uses sample data.
- Task completion and progress are managed in application state and are not permanently saved.

## 🔮 Planned Improvements

- Add new tasks with subject names and deadlines
- Edit and delete tasks
- Persist tasks between application sessions
- Add a dedicated task management screen
- Add a more complete weekly class schedule
- Implement real authentication if required
- Improve accessibility and responsive layouts

## 🎯 Project Goal

The goal of StudyMate is to provide a simple and intuitive way for students to manage academic tasks and track their study progress while learning mobile application development with React Native.

---

*Developed as a learning project using React Native, Expo, and TypeScript.*