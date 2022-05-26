'use strict';

import { node } from 'test-util-ipfs-example';
import { resolve } from 'path';

async function test() {
  await node.waitForOutput('protocolVersion', 'electron', [
    resolve(`${__dirname}/main.js`)
  ]);
}

test();
