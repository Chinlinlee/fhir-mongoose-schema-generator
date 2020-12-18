#!/usr/bin/env node
const {program} =require('commander');
const generateResourceSchema = require('../index');
const path = require('path');
let config = {};
program
    .option('-rt --resource <resource>' , 'The FHIR resource type that you want to generate')
    .option('-tp --typepath <path>' , 'The path to save FHIR data type')
    .option('-rp --resourcepath <path>' ,'The path to save  FHIR resource type schema')
    .parse(process.argv);
    let inputResourceType = program.resource;
    if (!inputResourceType) {
        console.error("missing resource type");
        process.exit(1);
    }
    let typePath = program.typepath;
    if (!typePath) {
        console.error("missing typePath option");
        process.exit(1);
    }
    let resourcePath = program.resourcepath;
    if (!resourcePath) {
        console.error("missing resourcePath option");
        process.exit(1);
    }
    config.typePath = typePath;
    config.resourcePath = resourcePath;
    config.requirePath = path.relative(resourcePath ,typePath).replace(/\\/gm ,"/");
    generateResourceSchema(inputResourceType , config);