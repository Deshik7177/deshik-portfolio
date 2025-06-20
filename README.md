
# Firebase Studio - Paila Dhana Deshik's Portfolio

This is Paila Dhana Deshik's personal portfolio website, built with Next.js, React, Tailwind CSS, ShadCN UI, and prepared for Genkit AI integration.

## Getting Started

To get started with development:

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Set up Environment Variables (for Contact Form):**
    This project uses EmailJS to handle contact form submissions. You'll need to set up environment variables for it to work.
    *   Create a file named `.env.local` in the root of your project.
    *   Copy the contents of `.env.example` into `.env.local`.
    *   Replace the placeholder values in `.env.local` with your actual EmailJS credentials:
        ```env
        NEXT_PUBLIC_EMAILJS_SERVICE_ID="YOUR_EMAILJS_SERVICE_ID"
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="YOUR_EMAILJS_TEMPLATE_ID"
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="YOUR_EMAILJS_PUBLIC_KEY"
        ```
    *   You can get these credentials from your [EmailJS account dashboard](https://www.emailjs.com/).

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The application will be available at `http://localhost:9002` (or the port specified in your `package.json` dev script).

## Project Structure Highlights

*   **`src/app/`**: Contains all routes, layouts, and pages (App Router).
*   **`src/components/`**: Reusable UI components, categorized into `layout/`, `sections/`, and `ui/`.
*   **`src/lib/data.ts`**: Centralized data for navigation, projects, timeline events, etc.
*   **`src/lib/utils.ts`**: Utility functions.
*   **`src/hooks/`**: Custom React hooks.
*   **`src/types/`**: TypeScript type definitions.
*   **`src/ai/`**: Genkit related files.
*   **`public/`**: Static assets (images, etc.).
*   **`globals.css`**: Global styles, Tailwind CSS configuration, and CSS variables for theming.

## Building for Production

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Key Technologies

*   **Next.js 15.x** (App Router)
*   **React 18.x**
*   **TypeScript**
*   **Tailwind CSS**
*   **ShadCN UI**
*   **EmailJS** (for contact form)
*   **Genkit** (setup for AI features)
*   **Lucide React** (for icons)
*   **`react-hook-form` & `zod`** (for form handling and validation)

Explore the `src/app/page.tsx` to see the main homepage structure and how different sections are imported.
