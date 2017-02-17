'use strict';

const ENUM = {
  muito_demorado: 0,
  demorado: 1,
  regular: 2,
  normal: 3,
  rapido:  4,
  muito_rapido: 5
};

class Fuzzy {
  static inputFuzzify(input){
    let responseTime = input.responseTime;
    if(responseTime > 10000){
      responseTime = ENUM.muito_demorado;
    }
    else if(responseTime > 5000){
      responseTime = ENUM.demorado;
    }
    else if(responseTime > 1000){
      responseTime = ENUM.regular;
    }
    else if(responseTime > 500){
      responseTime = ENUM.normal;
    }
    else if(responseTime > 100){
      responseTime = ENUM.rapido;
    }
    else{
      responseTime = ENUM.muito_rapido;
    }
    input.responseTime = responseTime;
    return input;
  }
}

module.exports = Fuzzy;
