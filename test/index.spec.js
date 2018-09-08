/* global describe, it, before */

import chai from 'chai';
import {Collection}  from '../lib/react-collection-layout.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Collection component', () => {
  it('should be a function', () => {
    expect(Collection).to.be.instanceOf(Function);
  })
});
