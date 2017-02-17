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

for(let test of tests){
  console.log("verificando teste: ");
  let result = choose(test);
  let success = result.output == test.output;

  console.log(`Sucesso: ${result.output} == ${test.output} = ${success}`);
  console.log("");
  console.log("");
}
