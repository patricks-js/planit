<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/patricks-js/planit">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Planit</h3>

  <p align="center">
    A simple and intuitive task management app with built-in time tracking.
    <br />
    <a href="https://github.com/patricks-js/planit"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://github.com/patricks-js/planit">Website</a>
    &middot;
    <a href="https://github.com/patricks-js/planit/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/patricks-js/planit/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

# About Planit

<!-- Project Video Overview -->
Planit is a modern and simple task manager with built-in time tracking to streamline productivity. It offers a user-friendly interface for managing tasks, automating recurring tasks, tracking time spent on tasks, and monitoring task completion (with reminders).

## Features

- **Task Management**: Create, edit, and delete tasks with ease.
- **Time Tracking**: Track the time spent on tasks with built-in time tracking.
- **Automated Recurring Tasks**: Set up recurring tasks to automate repetitive tasks.
- **Free Reminders**: Get reminders for upcoming tasks.
- **Task Prioritization**: Prioritize tasks based on Eisenhower's Matrix (Urgency and Importance).

## Built With

Some of the major technologies used in this project include:

- [![Next][NEXTJS_BADGE]][NEXTJS_URL]
- [![React][REACT_BADGE]][REACT_URL]
- [![Bun][BUN_BADGE]][BUN_URL]
- [![TypeScript][TYPESCRIPT_BADGE]][TYPESCRIPT_URL]
- [![TailwindCSS][TAILWIND_BADGE]][TAILWIND_URL]
- [![Drizzle ORM][DRIZZLE_BADGE]][DRIZZLE_URL]

## Getting Started

### Prerequisites

Here is what you need to be able to run Planit locally:

- Bun (v1.2 or higher)
- Docker & Docker Compose (latest)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/patricks-js/planit.git
    ```

2. Install dependencies:

    ```bash
    bun install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add the following:

    ```bash
    # App
    NEXT_PUBLIC_APP_URL=http://localhost:3000

    # Database
    DATABASE_URL=<your_database_url>

    # Better Auth
    BETTER_AUTH_URL=$NEXT_PUBLIC_APP_URL
    BETTER_AUTH_SECRET=<your_better_auth_secret>

    # Better Auth providers
    GITHUB_CLIENT_ID=<your_github_client_id>
    GITHUB_CLIENT_SECRET=<your_github_client_secret>

    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    ```

4. Run the application:

    ```bash
    bun dev
    ```

5. Open your browser and navigate to `http://localhost:3000`

## Roadmap

- [ ] User authentication
  - [x] OAuth social sign-in
  - [ ] Magic link sign-in
- [ ] Task management
  - [ ] Task CRUD
  - [ ] Task prioritization
  - [ ] Task scheduling
  - [ ] Sub-task management
  - [ ] Task recurring
- [ ] Time tracking
- [ ] Real-time updates
- [ ] Push notifications

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Unlicense MIT License. See [LICENSE](./LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [PRODUCT_VIDEO_URL]: public/logo.svg -->
[NEXTJS_BADGE]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[NEXTJS_URL]: https://nextjs.org/
[REACT_BADGE]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[REACT_URL]: https://reactjs.org/
[TYPESCRIPT_BADGE]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TYPESCRIPT_URL]: https://www.typescriptlang.org/
[TAILWIND_BADGE]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[TAILWIND_URL]: https://tailwindcss.com/
[DRIZZLE_BADGE]: https://img.shields.io/badge/Drizzle-111111?style=for-the-badge&logo=drizzle&logoColor=C5F74F
[DRIZZLE_URL]: https://orm.drizzle.team/
[BUN_BADGE]: https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white
[BUN_URL]: https://bun.sh/
