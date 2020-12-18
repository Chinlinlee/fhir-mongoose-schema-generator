const generateResourceSchema = require('../index');
const fs = require('fs');
const { assert } = require('console');

describe('Test generate Patient resource', function(){
    let dataTypes = ["Address.js" , "Attachment.js" , "CodeableConcept.js" , "ContactPoint.js" , "HumanName.js" , "Identifier.js" , "Patient_Communication.js" , "Patient_Contact.js" , "Patient_Link.js" , "Reference.js"]
    let resource = "Patient.js";
    before(function(done) {
        try {
            for (let dataType of dataTypes) {
                if (fs.existsSync(`./test/FHIRDataType/${dataType}`)) {
                    fs.unlinkSync(`./test/FHIRDataType/${dataType}`);
                }
            }
            if (fs.existsSync(`./test/FHIRResource/${resource}`)) {
                fs.unlinkSync(`./test/FHIRResource/${resource}`);
            }
            done();
        } catch (e) {
            console.error(e);
            done(e);
            process.exit(1);
        }
    });
    it('generate Patient', function(done){
        // 進行測試
        generateResourceSchema("Patient" , {resourcePath : "./FHIRResource" ,typePath : "./FHIRDataType" , cwd : './test'})
        for (let dataType of dataTypes) {
            assert(fs.existsSync(`./FHIRDataType/${dataType}`)) 
        }
        assert(fs.existsSync(`./FHIRResource/${resource}`));
        done();
    })
})