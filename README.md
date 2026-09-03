# 🎨 Styler - React Native Styling & UI Components

![React Native](https://img.shields.io/badge/React_Native-0.87.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Learning Journey](https://img.shields.io/badge/Project-2_of_10-FF6B6B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Welcome to **Styler**, the **2nd Project** in my **10-App React Native Mastery Series** (from Beginner to Advanced level)! 🚀

This project is dedicated to mastering **React Native Styling**, layout design using **Flexbox**, elevation & shadows, custom UI components, horizontal scroll views, dynamic dark mode support, and interactive touch elements with native linking.

---

## 📱 App Previews

| Screenshot 1 | Screenshot 2 |
| :---: | :---: |
| ![App Preview 1](./assets/images/sty1.PNG) | ![App Preview 2](./assets/images/sty2.PNG) |

---

## 🌟 Key Features & Components

This project is structured into 5 decoupled, reusable UI components:

### 1. 🟥 Flat Cards (`FlatCard.tsx`)
* **Focus**: Flexbox fundamentals & layout direction.
* Uses `flexDirection: 'row'` to align styled colored cards (Red, Green, Blue) horizontally.
* Adapts text colors dynamically using `useColorScheme()` for dark/light mode compatibility.

### 2. ⭕ Horizontal Elevated Cards (`ElevatedCards.tsx`)
* **Focus**: Horizontal scrolling, avatars & elevation effects.
* Implements horizontal `<ScrollView>` with `showsHorizontalScrollIndicator={false}`.
* Renders circular profile avatars with custom border styling (`borderRightColor`, `borderTopColor`, etc.).
* Demonstrates cross-platform drop shadow effects (`elevation` for Android, `shadowColor`/`shadowOffset`/`shadowOpacity`/`shadowRadius` for iOS).

### 3. 🏔️ Fancy Card (`FancyCard.tsx`)
* **Focus**: Rich visual card design & remote images.
* Features a travel showcase card ("Naran Lake, Pakistan") using the `<Image>` component with rounded top corners (`borderTopLeftRadius`, `borderTopRightRadius`).
* Organizes content into structured typography layers (Title, Subtitle/Location, Description, Timestamp).

### 4. 👥 Contact List (`ContactList.tsx`)
* **Focus**: Data rendering & list UI layouts.
* Iterates over a contacts array using `.map()` to generate user card rows.
* Features circular avatar images, user titles, status indicators (*Available*, *Busy*, *Away*), and custom card backgrounds (`#43aa8b`).

### 5. 🔗 Action Card (`ActionCard.tsx`)
* **Focus**: Interactivity, text truncation & native linking.
* Modern blog post card layout showcasing "Web Design Trends 2026".
* Uses `numberOfLines={3}` for clean multi-line text clamping.
* Includes touchable buttons using `<TouchableOpacity>` that utilize `Linking.openURL()` to open external web links (Portfolio & LinkedIn).

---

## 💡 Core Styling Concepts Learned

- 📐 **Flexbox Layout Engine**: Mastering `flexDirection`, `justifyContent`, `alignItems`, `flexGrow`, and spacing utilities.
- 🌓 **Dynamic Theme Awareness**: Utilizing React Native's `useColorScheme()` hook to handle dark and light themes gracefully.
- 🖼️ **Image Handling**: Working with local and remote URIs, rounded borders, avatar cropping, and dynamic dimensions.
- 🌫️ **Shadows & Elevation**: Applying native depth using Android's `elevation` property and iOS's `shadow*` style properties.
- 📜 **ScrollViews**: Handling vertical and horizontal scrollable containers without performance hitches.
- 🌐 **Native Linking**: Interacting with external web URLs using `react-native` `Linking` API and user feedback touches (`TouchableOpacity`).

---

## 🛠️ Tech Stack & Dependencies

* **Framework**: [React Native 0.87.1](https://reactnative.dev/)
* **Library**: React 19.2.3
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Safe Area Handling**: `react-native-safe-area-context`
* **Tooling**: Metro Bundler, Babel, ESLint, Prettier

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running on your machine:

### Prerequisites

Ensure you have your React Native development environment set up. If not, follow the official [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide.

* **Node.js**: `>= 22.11.0`
* **npm** or **yarn**
* **Android Studio** (for Android Emulator) / **Xcode** (for iOS Simulator - macOS only)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Imtiaz-Ali17314/Styler-App-React-Native.git
   cd Styler-App-React-Native
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Metro Bundler**:
   ```bash
   npm start
   ```

4. **Run on Android / iOS**:
   - For **Android**:
     ```bash
     npm run android
     ```
   - For **iOS** (macOS only):
     ```bash
     bundle install
     bundle exec pod install
     npm run ios
     ```

---

## 👤 Author

**Imtiaz Ali**
* **GitHub**: [@Imtiaz-Ali17314](https://github.com/Imtiaz-Ali17314)
* **LinkedIn**: [Imtiaz Ali](https://www.linkedin.com/in/imtiaz-ali-79476a385/)
* **Portfolio**: [imtiazali.dev](https://imtiazali.dev/)

---

⭐ *If you find this repository helpful, feel free to give it a star!*
