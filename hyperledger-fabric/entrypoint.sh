#! /bin/sh
cd oada-srvc-hyperledger-fabric && \
npm install && 
sudo rm -r ../../libs/oada-lib-kafka/node_modules/
npm install ../../libs/oada-lib-kafka && \
chmod u+x /code/hyperledger-fabric/wait-for-it.sh && \
  /code/hyperledger-fabric/wait-for-it.sh startup:80 -t 0 && \
  cd /code/hyperledger-fabric/oada-srvc-hyperledger-fabric && \
  npm run start -- --config=/oada-srvc-docker-config.js
