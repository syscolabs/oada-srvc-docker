#! /bin/sh

chmod u+x /code/hyperledger-fabric/wait-for-it.sh && \
  /code/hyperledger-fabric/wait-for-it.sh startup:80 -t 0 && \
  cd /code/hyperledger-fabric/oada-srvc-hyperledger-fabric && \
  npm run start -- --config=/oada-srvc-docker-config.js
