# Liquidity Digital Test Assignment Task

## Steps to run on local
- Clone the repo.
- Install `Node ^10.9`,
- Install `Mongodb` on local server
- Start `mongodb` Server
- Run `npm install` to install all node pakages
- Run `npm start` to start application or Run `npm run dev` to start application with nodemon
- Execute all npm commands inside src directory.

## Steps to run using docker compose
- Install and start docker
- `sudo docker-compose -f "docker-compose.yml" up -d --build` To Run services as docker.
- Docker Run will copy `.env` file from `setup` folder to `src`. and `setup.sh` file will put all env from global enviroment variables currently its not conifgured.
- It will spin up two containers one for mongo and another for the app. which will be exposed on 9000 port

## Execute test cases
- Need to start mongo server first
- Test cases will be executed with testDb and before each run db will be re initialized
- Go to src dir
- RUn `npm install`
- Run `npm run test:all` will execute all unit as well as integration test cases.
- To check code coverage goto `src/coverage` folder and open `index.html` file

## PostMan collection 
- `https://www.getpostman.com/collections/d5243cc6aa90877b6617`

## Git Hooks and Eslint
- git pre-commit included which means on commit it will check eslint and execute test cases then only will commit the code.

## User Credential for login
- ` logonid: prakhartkg@gmail.com password: admin123`
- Call login API using above cred which will give user response along with token which is valid for one hour.
- Use that JWT token in all request with header Authorization
    for Example :
    `'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGI5OTJhMTEzNzlkZDQ4YmIwYTFhZTgiLCJpc0RlbGV0ZWQiOmZhbHNlLCJmaXJzdE5hbWUiOiJwcmFraGFyIiwibGFzdE5hbWUiOiJqYWluIiwiZW1haWwiOiJwcmFraGFydGtnQGdtYWlsLmNvbSIsImRlcGFydG1lbnQiOiI1ZGI5OGYxMTQ3NGViMTQyNGY5ZjhhMmIiLCJwaG9uZSI6Ijk0ODMyODkxMzAiLCJjcmVhdGVkRGF0ZSI6IjIwMTktMTAtMzBUMTM6Mzk6NDUuNTQ5WiIsIl9fdiI6MCwiaWF0IjoxNTcyNDU4MDkyLCJleHAiOjE1NzI0NjE2OTJ9.zCQSVz0DVTrFbJbw9BzxiQ6DKHT4NUZCPx04GewFXQ8'`

> PORT 9000