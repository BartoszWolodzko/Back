docker container rm -f postgres api tests
docker network rm test-net
docker volume rm pg-data