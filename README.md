This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## what is shared structure

`Layouts: Common elements like headers, footers, sidebars, and navigation menus that appear on multiple pages.

Consistent Layout: Ensuring that each page of your application follows a consistent structural template.

Nested Layouts: Allowing for sections of your application to have specific sub-layouts while still maintaining a global layout.
`
## summary of basic of understanding of Nextjs

`Summary
children Prop: Automatically passed to layout components by Next.js, representing nested pages or components.

RootLayout: A layout component defined in layout.tsx that wraps around pages or other nested layouts, providing shared structure and styles.

File Structure: Next.js uses the app directory to organize layouts (layout.tsx) and pages (page.tsx), enabling a clean and intuitive way to structure applicat
`

## Nested layout

`Nested layouts in Next.js refer to the concept of having multiple layers of layout components that wrap around specific parts of your application. This allows you to create hierarchical structures where different sections of your application can have their own layouts while still inheriting the global layout.

  ### Understanding Nested Layouts
 Global Layout: This is the top-level layout that applies to the entire application. It usually includes common elements like the header, footer, and main navigation.
 Sectional Layouts: These are layouts specific to certain sections or pages of the application, such as a dashboard or user profile section. They can include additional structure and styling specific to that section.`