# Task Time Tracking Application

An open-source and modern web application for task management and built-in time tracking to streamline your productivity.

## Features

- 🔐 Secure authentication system
- ✅ Task management with status tracking
- ⏱️ Time tracking for tasks
- 📊 Task completion tracking
- 🔄 Real-time updates

## Tech Stack

- **Framework**: Next.js with Server Actions
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Form Validation**: Zod
- **Type Safety**: TypeScript

## Project Structure

```plaintext
src/
├── app/
│   ├── actions/        # Server actions for core functionality
│   ├── api/            # API routes
├── db/
│   ├── schema/         # Database schema definitions
├── features/           # Feature-specific components and actions
│   ├── auth/           # Authentication related components and logic
│   ├── time-tracking/  # Time tracking feature components and actions
├── lib/                # Shared utilities and configurations
```

## Core Features

### Authentication

- Email/password sign up and sign in
- Secure session management
- Protected routes

### Task Management

- Create and manage tasks
- Mark tasks as complete
- View pending and completed tasks

### Time Tracking

- Start/stop time tracking for tasks
- Calculate total time spent per task
- Track task duration accurately
