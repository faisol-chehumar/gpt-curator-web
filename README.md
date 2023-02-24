This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# PromptCraft-Web

PromptCraft-Web is the frontend repository for the PromptCraft web application, providing users with a user-friendly interface to discover prompts. With a focus on creative design and art, PromptCraft-Web allows users to browse a curated collection of prompts and access tips and tricks for working with generative image AI.

## UX/UI reference

- [Landing page](https://dribbble.com/shots/18938241-AstroClash-Play-to-Earn-NFT-Marketplace-Kit)
- [In general](https://dribbble.com/shots/18847976-Kalao-Web-Design-for-NFT-Marketplace)

## Project Architecture

- React/Next.js for the framework
- Recoil for state management
- Styled Components for CSS styling
- Axios for API requests
- Jest and React-testing-library for testing
- Deployment: Deploy the application to a hosting service such as Netlify, Vercel or AWS S3.

## Data Models

- Prompt model: includes ID, title, description, image URL, and category
- Category model: includes ID and name
- Authentication Model: An authentication object will have the following attributes: id, user_id, access_token, refresh_token, and created_at.
- User Model: A user object will have the following attributes: id, username, email, password, and created_at.

## Features and Components

- Homepage with search bar and categories filter
- Prompt list view with infinite scroll
- Prompt detail view with generative image and shareable link
- Category view with prompt list filtered by category
- Search view with prompt list filtered by search query
- Navigation menu with links to various views
- Footer with social media links and about section

## Functional Requirements

Based on the information provided, PromptCraft has the following core functionalities:

1. User registration and authentication
2. Prompt creation and management
3. Generative image creation
4. Image sharing
5. User interaction and feedback
