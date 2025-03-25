# GIT ACTIONS LESSON

https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions


## SETUP

VITE: 
https://vite.dev/guide/

    npm create vite@latest  
    cd my-project
    npm install
    npm run dev

VITEST:
https://vitest.dev/guide/

    npm install -D vitest

in package.json:

    {
    "name": "my-app",
    "private": true,
    "version": "0.0.0",
    "homepage": "./",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview",
        "test": "vitest"
    },
    "dependencies": {
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
    },
    "devDependencies": {
        "@eslint/js": "^9.21.0",
        "@types/react": "^19.0.10",
        "@types/react-dom": "^19.0.4",
        "@vitejs/plugin-react": "^4.3.4",
        "eslint": "^9.21.0",
        "eslint-plugin-react-hooks": "^5.1.0",
        "eslint-plugin-react-refresh": "^0.4.19",
        "globals": "^15.15.0",
        "vite": "^6.2.0",
        "vitest": "^3.0.9"
    }
    }

to use react with githubpages: "homepage": "./" 

## DEPLOY TO GITHUB PAGES

https://github.com/marketplace/actions/deploy-to-github-pages

