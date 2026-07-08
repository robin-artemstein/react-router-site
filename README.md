# React Router Site

The React Router Site build the following tech stack combination.

- React for UI and interaction design
- React Router V8 for routing
- Vite for web building
- TypeScript for static typing
- Tailwind for UI styling 

## Push to GitHub repository
```
git init
git add .
git commit -m "The Nth commit on date."
git remote rm origin
git branch -M main
git remote add origin git@github.com:robin-artemstein/react-router-site.git
git push -u origin main
```

## Installation

Install Bun first

https://bun.sh

Then install dependencies:
```
bun install
bun dev
```
## Project structure
```
react-router-site/
├── public/
│   └── vite.svg
├── app/
│   ├── components/
│   │   └── Navbar.tsx    # Navigation bar stick on the top of the page
│   ├── routes/
│   │   ├── About.tsx     # About us page
│   │   ├── Contact.tsx   # Contact us page
│   │   ├── home.tsx      # Homepage
│   │   ├── Pricing.tsx   # Predictable pricing page
│   │   └── Services.tsx  # Our services page
│   ├── root.tsx          # Router and layout configuration
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css         # Tailwind + global styles
├── index.html
├── vite.config.ts
├── tailwind.config.js    # (if needed)
├── tsconfig.json
├── package.json
└── README.md             # Read me documentation
```
