/* Copyright 2017 Open Ag Data Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const debug = require('debug');
const trace = debug('hyperledger-fabric:trace');
const info = debug('hyperledger-fabric:info');
const warn = debug('hyperledger-fabric:warn');
const error = debug('hyperledger-fabric:error');

const Promise = require('bluebird');
// const kf = require('kafka-node');
const {ReResponder} = require('../../libs/oada-lib-kafka');
const oadaLib = require('../../libs/oada-lib-arangodb');
const config = require('./config');

//---------------------------------------------------------
// Kafka intializations:
const responder = new ReResponder({
    consumeTopic: config.get('kafka:topics:httpResponse'),
    produceTopic: config.get('kafka:topics:writeRequest'),
    group: 'hyperledger-fabric'
});

module.exports = function stopResp() {
    return responder.disconnect();
};

responder.on('request', function handleReq(req) {
    
    if (!req || req.msgtype !== 'write-response') {
        return []; // not a write-response message, ignore it
    }
    console.log("printing from fabric service")
    console.log(req);
});

