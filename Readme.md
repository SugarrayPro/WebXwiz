# Webxwiz test assignment

## Installation & Development
Replace .env-example with an .env file, or change environment variables on docker-compose.yml file

Make sure you make a connection string with replicaSet and directConnection parameter as true

After, run the app with [`docker compose`](https://docs.docker.com/compose/):

``
$ docker-compose up 
``

### Resume
Time spent: around 6hrs

Struggles and difficulties:
    I guess the main one was to set up a local replicaset in MongoDB for change streams feature to use. Unfortunately there's no ways to
set up replicaset in 'easy' way for every dev environment without overkilling assignment with migrations or skills.
    
Besides that, one thing that's worth mentioning is type juggling across the app, its always is :)
