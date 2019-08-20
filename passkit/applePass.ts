// const {Template} = require("@destinationstransfers/passkit");
// // const pemEncodedPassCertificate = require("./pass.uk.co.atobtyres.pem");
//
// const fs = require('fs')
// const pem = require('pem-file')
// const options = {
// 	key: fs.readFileSync("./pass.uk.co.atobtyres.pem", "utf8"),
// 	cert: fs.readFileSync("./pass.cer", "utf8")
// };
//
//
// const file = fs.readFileSync('./pass.uk.co.atobtyres.pem');
//
//
// function createPassbookCard() {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const template = new Template("coupon", {
// 				passTypeIdentifier: "pass.uk.co.atobtyres",
// 				teamIdentifier: "MXL",
// 				backgroundColor: "red",
// 				sharingProhibited: true
// 			});
// 			//
// 			await template.loadCertificate(
// 				"./pass.uk.co.atobtyres.pem", ""
// 			);
//
// 			template.setCertificate('./pass.uk.co.atobtyres.pem');
// 			template.setPrivateKey('./pass.cer');
//
// 			await template.images.add("icon", 'src/assets/img/apple.png'); //.add("logo", 'src/assets/img/apple.png');
// 			await template.images.add("logo", 'src/assets/img/apple.png'); //.add("logo", 'src/assets/img/apple.png');
//
// 			const pass = template.createPass({
// 				serialNumber: "123456",
// 				description: "20% off",
// 				organizationName: "A To B Tyres"
// 			});
//
//
// 			const buf = await pass.asBuffer();
// 			await fs.writeFile("pathToPass.pass", buf);
// 		}
// 		catch (err) {
// 			console.log(" ");
// 			console.error(err);
// 			console.log(" ");
// 		}
//
// 	})
// }
//
// createPassbookCard();
//
//
//


// const { createPass, Pass } = require("passkit-generator");
// or, for typescript
import {createPass, Pass} from "passkit-generator";

let examplePass: Pass;


function createPassbookCard() {
    return new Promise(async (resolve, reject) => {
        try {
            examplePass = await createPass({
                model: "./passModels/myFirstModel",
                certificates: {
                    wwdr: "./certs/wwdr.pem",
                    signerCert: "./certs/signerCert.pem",
                    signerKey: {
                        keyFile: "./certs/signerKey.pem",
                        passphrase: "123456"
                    }
                },
                overrides: {
                    // keys to be added or overridden
                    serialNumber: "AAGH44625236dddaffbda"
                }
            });

            // Adding some settings to be written inside pass.json
            // examplePass.localize("en", { ... });
            examplePass.barcode("PKBarcodeFormatQR"); // Random value

            // Generate the stream, which gets returned through a Promise
            const stream = examplePass.generate();

            // doSomethingWithTheStream(stream);
            console.log(stream);
        } catch (err) {
            console.log(" ");
            console.error(err);
            console.log(" ");
        }
    })
}


// p2iOWY3CORmjAhiucHKX
