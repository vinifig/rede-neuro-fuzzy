const Perceptron = require('./lib/perceptron');
const Fuzzy = require('./utils/fuzzy');
const Structure = require('./utils/structure');
const Weights = require('./utils/weights');
const examples = require('./utils/examples');
const tests = require('./utils/tests');

const weights = new Weights(Structure.model)
const perceptron = new Perceptron(weights);

const limitTrain = 10;

function classify(output){
  return output.indexOf(Math.min(...output));
}

function choose(data){
  let result = {};
  result.input = data.input.map(Fuzzy.inputFuzzify);
  result.output = classify(perceptron.calculate(result.input));
  return result;
}

function train(data){
  for(let i = 0; i < limitTrain; i++){
    let result = choose(data);

    result.success = result.output == data.output;
    perceptron.adjust(result);
  }
}

console.log('iniciando treinamento');
for(let example of examples){
  train(example);
}

console.log('treinamento concluido');
