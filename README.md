

## Getting Started
## On your host machine

Ensure you have node and npm with the required versions installed. Then run the following commands in terminal:

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

### With Docker

In terminal, navigate to the project root directory and run the following command to build the image:
docker build -t any-name .

Check if your image was created:
docker images

Run your container: 
docker run -p 3000:3000 your-docker-image-name

if success, your app will be available on 
http://localhost:3000

to stop the container use the command:
docker stop your-docker-image-name