'use strict';
let Weights;
class Hidden {
  constructor(weights) {
    Weights = weights;
  }

  applyHidden(server){
    let result = 0.0;
    let weights = Weights.weights;
    let multiplier = 1;
    for(let prop in server){
      result += server[prop] * weights[prop] * multiplier;
    }
    
    return result;
  }

  backPropagation(newWeights){
    Weights.weights = newWeights;
  }

  get weights(){
    return Weights.weights;
  }
}

module.exports = Hidden;
