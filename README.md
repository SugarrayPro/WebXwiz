# Webxwiz Test Assignment
https://shrub-shaker-f54.notion.site/Middle-Senior-Backend-developer-b4a44b1fd1424be7ad8bf8d6944aa050
## Installation & Development

### Environment Setup

1. Rename `.env-example` to `.env` and populate it with your specific settings. Alternatively, you can directly modify the environment variables in the `docker-compose.yml` file.
2. Ensure your MongoDB connection string includes the `replicaSet` and `directConnection` parameters set to `true`.

### Running the Application

Execute the following command to start the application using Docker:

```bash
$ docker-compose up
```

## Summary

### Time Investment

The total time spent on this assignment was approximately 6 hours.

### Challenges Encountered

- **MongoDB Local ReplicaSet Configuration**: The primary challenge was setting up a local `replicaSet` in MongoDB to utilize the change streams feature. It's worth noting that there isn't a universally straightforward method to configure a replica set across different development environments without potentially overcomplicating the setup with extensive migrations or specific skill requirements.
- **Type Juggling**: Managing data types across the application proved to be a noteworthy challenge, as it often is in software development, requiring careful attention to detail and robust error handling.
