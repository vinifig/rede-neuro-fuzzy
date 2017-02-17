'use strict';

const examples = [];

// type: 1 (menos sujeito a falhas)
// type: 2 (mais sujeito a falhas)
// type: 3 (extremamente sujeito a falhas)
examples.push({
  input : [
    {
      responseTime: 780,
      state: 1,
      type: 1
    },
    {
      responseTime: 400,
      state: 1,
      type: 1
    },
    {
      responseTime: 38,
      state: 1,
      type: 1
    }
  ],
  output: 2
})

examples.push({
  input : [
    {
      responseTime: 780,
      state: 1,
      type: 1
    },
    {
      responseTime: 400,
      state: 1,
      type: 1
    },
    {
      responseTime: 38,
      state: 1,
      type: 1
    }
  ],
  output: 2
})

examples.push({
  input : [
    {
      responseTime: 780,
      state: 1,
      type: 1
    },
    {
      responseTime: 400,
      state: 1,
      type: 1
    },
    {
      responseTime: 38,
      state: 1,
      type: 1
    }
  ],
  output: 2
})

examples.push({
  input : [
    {
      responseTime: 280,
      state: 1,
      type: 1
    },
    {
      responseTime: 90,
      state: 1,
      type: 1
    },
    {
      responseTime: 150,
      state: 1,
      type: 1
    }
  ],
  output: 1
})

examples.push({
  input : [
    {
      responseTime: 15,
      state: 1,
      type: 1
    },
    {
      responseTime: 200,
      state: 1,
      type: 2
    },
    {
      responseTime: 200,
      state: 1,
      type: 3
    }
  ],
  output: 0
})

module.exports = examples;
