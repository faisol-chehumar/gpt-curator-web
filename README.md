# PromptCraft-Web
PromptCraft-Web is the frontend repository for the PromptCraft web application, providing users with a user-friendly interface to discover prompts. With a focus on creative design and art, PromptCraft-Web allows users to browse a curated collection of prompts and access tips and tricks for working with generative image AI.


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
