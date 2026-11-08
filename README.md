# 📚 StudyMate — Student Task Management App

StudyMate is a student task management application prototype built with **React Native, Expo, TypeScript, and Expo Router**. It helps university students organize assignments, track study progress, and view weekly class schedules through a simple and modern interface.

## ✨ Features

- **Login Screen** — Login interface with username and password validation.
- **Dashboard** — Personalized greeting, task statistics, and study progress tracking.
- **Task Management** — Add new assignments with task names, subjects, and deadlines.
- **Task Checklist** — Mark assignments as completed and automatically update progress.
- **Task Details** — View detailed information about individual assignments.
- **Class Schedule** — View weekly class schedules and course information.
- **Logout** — Return to the login screen.

## 🛠️ Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router
- React Hooks
- Git & GitHub

## 📱 Main Screens

StudyMate consists of four main application screens:

1. **Login** — User login interface.
2. **Home / Dashboard** — Task overview, statistics, and study progress.
3. **Task Details** — Detailed information about assignments.
4. **Class Schedule** — Weekly class schedule.

## 📂 Project Structure

```text
LoginApp-ReactNative/
├── assets/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── home.tsx
│   │   ├── task-detail.tsx
│   │   ├── schedule.tsx
│   │   └── explore.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── InputField.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── TaskCard.tsx
│   │   ├── app-tabs.tsx
│   │   ├── app-tabs.web.tsx
│   │   ├── animated-icon.tsx
│   │   ├── animated-icon.web.tsx
│   │   ├── animated-icon.module.css
│   │   ├── external-link.tsx
│   │   ├── hint-row.tsx
│   │   ├── themed-text.tsx
│   │   ├── themed-view.tsx
│   │   └── web-badge.tsx
│   │
│   └── data/
│       ├── tasks.ts
│       └── schedule.ts
│
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Expo development environment

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Red23Line/LoginApp-ReactNative.git
```

**2. Navigate to the project directory**

```bash
cd LoginApp-ReactNative
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the Expo development server**

```bash
npx expo start
```

Follow the instructions displayed in the terminal to run the application on a supported device or emulator.

## ⚠️ Project Limitations

StudyMate is currently a frontend prototype with the following limitations:

- Login uses basic input validation and does not implement real authentication.
- Task and class schedule information uses sample data.
- Task creation and completion status are managed using React State.
- Data is not permanently stored after the application is reloaded.
- Task editing and deletion are not yet implemented.

## 🔮 Future Improvements

- Implement persistent local data storage.
- Add task editing and deletion functionality.
- Improve deadline management.
- Implement proper authentication.
- Add more student productivity features.

---

**StudyMate — Your Companion in Learning 💜**

Developed with React Native, Expo, and TypeScript.