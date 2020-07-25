# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
   "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "CLOUD_NAME": "Cloudiary Cloud name",
  "API_ID":"Cloudinary API ID",
  "API_SECRET":"Cloudinary API secret", 
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

```bash
NODE_ENV=production node index.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)