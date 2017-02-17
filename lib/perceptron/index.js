'use strict';
const Hidden = require('./hidden.js');

const filterInstance = Symbol();

const sigmoid = (value) => (1.0 / (1.0 + Math.exp(value)));

const derivate = 0.5;

var learningRate = 0.01;

class Perceptron {
  constructor(Weights) {
    this[filterInstance] = new Hidden(Weights);
  }

  calculate(input){
    return input.map(this[filterInstance].applyHidden).map(sigmoid);
  }

  adjust(result){
    let currentWeights = this[filterInstance].weights;
    let input = result.input;
    let output = result.output;
    let greaterWeight = -50000;
    let greaterWeightIndex = null;
    for(let i in currentWeights){
      let processedWeight = currentWeights[i] * input[i];
      // processedWeight = processedWeight > 500 ? processedWeight * ALPHASIGMOIDE : processedWeight;
      if(greaterWeight < processedWeight || greaterWeightIndex == null){
        greaterWeight = processedWeight;
        greaterWeightIndex =  i;
      }
    }

    if(result.success){
      currentWeights[greaterWeightIndex]+=learningRate;
    }
    else{
      currentWeights[greaterWeightIndex]-=learningRate;
    }
    currentWeights[greaterWeightIndex] = currentWeights[greaterWeightIndex] < 0 ? 0: currentWeights[greaterWeightIndex];
    this[filterInstance].backPropagation(currentWeights);

  }

  get derivative(){
    return derivate;
  }
}

module.exports = Perceptron;
