const {Template} = require("@destinationstransfers/passkit");

// Create a Template from local folder, see __test__/resources/passes for examples
// .load will load all fields from pass.json,
// as well as all images and com.example.passbook.pem file as key
// and localization string too
const template = await
Template.load(
    "./path/to/templateFolder",
    "secretKeyPasswod"
);

// // or
// // create a Template from a Buffer with ZIP content
// const s3 = new AWS.S3({apiVersion: "2006-03-01", region: "us-west-2"});
// const s3file = await
// s3
//     .getObject({
//         Bucket: "bucket",
//         Key: "pass-template.zip"
//     })
//     .promise();
// const template = await
// Template.fromBuffer(s3file.Body);
//
// // or create it manually
// const template = new Template("coupon", {
//     passTypeIdentifier: "pass.com.example.passbook",
//     teamIdentifier: "MXL",
//     backgroundColor: "red",
//     sharingProhibited: true
// });
// await
// template.images.add("icon", iconPngFileBuffer)
    .add("logo", pathToLogoPNGfile)
