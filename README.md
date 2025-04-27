# Angular 19 SSR Template

A **professional, production-ready Angular 19 SSR template** built for speed, scalability, and smooth developer experience.  
Perfectly structured for real-world apps with clean code architecture, built-in services, theming system, and SSR platform detection.

---

## ![Angular](https://img.shields.io/badge/Built%20with-Angular%2019-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![SSR Ready](https://img.shields.io/badge/Server%20Side%20Rendering-Ready-green?style=for-the-badge) ![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## ✨ Features

- **Server-Side Rendering (SSR)** ready with Angular Universal.
- **Professional folder structure**: `components/`, `pages/`, `layout/`, `services/`, `guards/`, `assets/`.
- **HTTP Service** (`http.service.ts`):
  - Built-in `GET`, `POST`, `PATCH`, `DELETE` methods.
  - Automatically attaches **Authorization token** from `localStorage`.
- **Platform Detection Service** (`platform-detection.service.ts`):
  - Easily check if the code is running on **browser** or **server**.
- **Light/Dark Theme System**:
  - Predefined SCSS variables for both themes.
  - **Theme Toggle Component**:
    - One-click toggle between light/dark mode.
    - Stores user preference in `localStorage`.
- **Layout and Routing**:
  - Central **Layout Route** with **smooth route animations** (fade-in + subtle scale effect).
- **Authentication Route and Guard**:
  - Prebuilt **AuthGuard** (easily customizable).
- **Global Styles**:
  - Reusable `.container` class with professional max-width and margins.
- **Environment Configuration**:
  - Properly set up `environments/` and `app.config.ts`.
- **Assets Ready**:
  - Pre-configured `assets/` folder in `angular.json`.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   ├── guards/            # Route guards (Auth, etc.)
│   ├── interfaces/        # Define your interfaces here
│   ├── layout/            # Layout components and wrappers
│   ├── pages/             # Page-specific components
│   ├── portals/           # Portals like (admin/dashboard/etc...)
│   ├── services/          # Singleton services (HTTP, Platform Detection, etc.)
│   ├── widgets/           # Animations/custom directives/etc...
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
│
├── assets/                # Static assets (images, icons, etc.)
│
├── environments/          # Environment configurations
│
├── styles/
│   ├── _variables.scss    # Theme variables (Light & Dark)
│   └── styles.scss        # Global styles
│
└── app.config.ts          # App-wide configurations
```

---

## 🚀 How to Get Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run SSR Development Server**:
   ```bash
   npm run start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm run serve:ssr:ng-ssr
   ```

---

## 🛠️ Customization Guide

- **HTTP Interactions**:
  - Modify `http.service.ts` to suit your API structure.
  - Token is automatically picked from `localStorage` (configurable).

- **Platform-specific Logic**:
  - Inject `PlatformDetectionService` and use:
    ```typescript
    if (this.platformDetection.isRunningInBrowser) {
      // Browser-only code
    }
    ```

- **Theming**:
  - Use the `<app-toggle-theme>` component anywhere to allow users to switch themes.
  - Customize SCSS variables inside `styles/_variables.scss`.

- **Route Animations**:
  - Smooth fade-in + scale animations already configured.
  - Customize inside `layout/` or the main `app.component.ts`.

---

## 📦 Built-in Utilities

| Utility                   | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| `http.service.ts`          | API requests with automatic token handling.          |
| `platform-detection.service.ts` | Detect if running on Browser or Server.           |
| `toggle-theme.component.ts` | Light/Dark mode toggle + persistence.                |
| `.container` class         | Predefined clean container for consistent layouts.   |
| `app.config.ts`            | Centralized configuration handling.                  |

---

## 🔥 Why Use This Template?

- Saves time.
- Focus on your business logic — not boilerplate.
- Follow best practices and clean code conventions.
- Optimized for both SEO and performance with SSR out of the box.
- Easily scalable to large enterprise-grade projects.

---

## 📜 License

This template is open for use under the **MIT License**.

---

## 🦰 Contributions

Feel free to fork, extend, and improve!  
If you find a bug or have a feature request, open an issue or a pull request.

---

_Designed with ❤️ to make your Angular development smoother and faster._

