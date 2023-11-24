# Todo App

## I will put more detail later

To run this project in dev mode requires two terminal windows.

- run `npm install`
- run `docker compose up` (you may or may not require `sudo`)
- open a new terminal window
- run `npx prisma migrate dev --name init` (you might need to wait a moment for the docker container to spin up)
- run `npx prisma db seed`
- run `npm run dev`

You should now be able to navigate to [localhost:3000](localhost:3000)
