# Create Page Header

This is a code bundle for Create Page Header. The original project is available at https://www.figma.com/design/Ve0rqCO8TKhO9iVgrWvLsG/Create-Page-Header.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment

This project is deployed to Firebase Hosting using the `abi-design-portfolio` project.

**Live URL:** https://abi-design-portfolio.web.app

### Deploying Updates

To deploy updates to Firebase Hosting:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

### Changing Firebase Project

If you need to use a different Firebase project, you can switch it with:

```bash
firebase use <project-id>
```

To see all available projects:

```bash
firebase projects:list
```
