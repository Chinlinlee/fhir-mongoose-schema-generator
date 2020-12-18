# FHIR-MONGOOSE-GENERATOR
Generate FHIR mongoose schema.

# Usage
- command
```bash
Usage: index [options]

Options:
  -rt --resource <resource>  The FHIR resource type that you want to generate
  -tp --typepath <path>      The path to save FHIR data type
  -rp --resourcepath <path>  The path to save  FHIR resource type schema
  -h, --help                 display help for command
```
```bash=
npm install -g fhir-mongoose-schema-generator
fhir-mongoose-schema-generator -rp Patient -tp ./FHIRModels -rp ./FHIRResource
```
- Run test first time to see patient resource type schema in test/FHIRResource and relation data type schema in test/FHIRDataType
```bash=
npm test
```
![test result](https://i.imgur.com/Isz4fw0.png)
- in node.js
```javascript=
const fhirgen = require('fhir-mongoose-schema-generator');

fhirgen("Patient" , {typePath : './FHIRModels' , 'resourcePath': './FHIRResource' , cwd : process.cwd()});
```
## Result
- patient resouce schema
```javascript=
const mongoose = require('mongoose');
const Identifier = require('../FHIRDataType/Identifier');
const HumanName = require('../FHIRDataType/HumanName');
const ContactPoint = require('../FHIRDataType/ContactPoint');
const Address = require('../FHIRDataType/Address');
const CodeableConcept = require('../FHIRDataType/CodeableConcept');
const Attachment = require('../FHIRDataType/Attachment');
const Patient_Contact = require('../FHIRDataType/Patient_Contact');
const Patient_Communication = require('../FHIRDataType/Patient_Communication');
const Reference = require('../FHIRDataType/Reference');
const Patient_Link = require('../FHIRDataType/Patient_Link');
module.exports = function() {
    const Patient = {
        id: {
            type: String,
            unique: true,
            index: true
        },
        resourceType: {
            type: String,
            default: type
        },
        identifier: {
            type: [Identifier],
            default: void 0
        },
        active: {
            type: Boolean,
            default: void 0
        },
        name: {
            type: [HumanName],
            default: void 0
        },
        telecom: {
            type: [ContactPoint],
            default: void 0
        },
        gender: {
            type: String,
            default: void 0
        },
        birthDate: {
            type: Date,
            default: void 0
        },
        address: {
            type: [Address],
            default: void 0
        },
        maritalStatus: {
            type: CodeableConcept,
            default: void 0
        },
        photo: {
            type: [Attachment],
            default: void 0
        },
        contact: {
            type: [Patient_Contact],
            default: void 0
        },
        communication: {
            type: [Patient_Communication],
            default: void 0
        },
        generalPractitioner: {
            type: [Reference],
            default: void 0
        },
        managingOrganization: {
            type: Reference,
            default: void 0
        },
        link: {
            type: [Patient_Link],
            default: void 0
        }
    };
    const PatientSchema = new mongoose.Schema(Patient, {
        _id: false
    });
    return PatientSchema;
}
```
- patient relation data type
- HumanName
```javascript=
const mongoose = require('mongoose');
const Period = require('./Period');
module.exports = new mongoose.Schema({
    use: {
        type: String,
        default: void 0
    },
    family: {
        type: String,
        default: void 0
    },
    given: {
        type: [String],
        default: void 0
    },
    prefix: {
        type: [String],
        default: void 0
    },
    suffix: {
        type: [String],
        default: void 0
    },
    period: {
        type: Period,
        default: void 0
    }
}, {
    _id: false
});
```