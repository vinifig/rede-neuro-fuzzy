'use strict';

const tests = [];

tests.push({
  input : [
    {
      responseTime: 50,
      state: 1,
      type: 1
    },
    {
      responseTime: 102,
      state: 1,
      type: 1
    },
    {
      responseTime: 150,
      state: 1,
      type: 1
    }
  ],
  output: 0
})

tests.push({
  input : [
    {
      responseTime: 400,
      state: 1,
      type: 1
    },
    {
      responseTime: 1200,
      state: 1,
      type: 1
    },
    {
      responseTime: 15000,
      state: 1,
      type: 1
    }
  ],
  output: 0
})

tests.push({
  input : [
    {
      responseTime: 12000,
      state: 1,
      type: 1
    },
    {
      responseTime: 600,
      state: 1,
      type: 1
    },
    {
      responseTime: 8000,
      state: 1,
      type: 1
    }
  ],
  output: 1
})

tests.push({
  input : [
    {
      responseTime: 12000,
      state: 1,
      type: 1
    },
    {
      responseTime: 600,
      state: 1,
      type: 1
    },
    {
      responseTime: 600,
      state: 1,
      type: 1
    }
  ],
  output: 1
})

module.exports = tests;
