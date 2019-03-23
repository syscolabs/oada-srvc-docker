
docker kill $(docker ps -a | grep oadasrvc | awk '{print $1}')
docker rm $(docker ps -a | grep oadasrvc | awk '{print $1}')
sudo rm -r libs/oada-lib-kafka/node_modules/
docker rmi -f oadasrvcdocker_hyperledger-fabric oadasrvcdocker_yarn 
docker-compose build 
docker-compose run yarn
NODE_TLS_REJECT_UNAUTHORIZED=0 docker-compose up