docker network create test-net

docker run -d -p 5432:5432 --name postgres --net test-net -v ${pwd}/database:/docker-entrypoint-initdb.d -v pg-data:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres postgres:11.5-alpine

cd api
docker build . -t api
docker run -d -p 3000:3000 --net test-net --name api api
cd ..

echo "Sleeping for 5 sec..."
sleep 5

cd tests
docker build . -t tests
docker run -it --name tests --net test-net -e BASE_URL="http://api:3000" tests
cd ..


