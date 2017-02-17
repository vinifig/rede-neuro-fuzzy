'use strict'
const fs = require('fs');

class Weights{
  constructor(structure, filename){
    if(structure == undefined){
      throw new Error(`Missing "Weights.constructor" structure argument`);
      return;
    }
    this.structure = structure;
    this.fileName = filename || './weights.json';
  }

  get weights(){

    try{
      let fileData = fs.readFileSync(this.fileName);
      return JSON.parse(fileData);
    }catch(err){
      return this.structure;
    }
  }

  set weights(data){
    try{
      fs.writeFileSync(this.fileName, JSON.stringify(data));
    }catch(err){
      console.warn(err);
    }
  }
}

module.exports = Weights;
