const multer = require("multer");
const multerS3 = require("multer-s3");
const aws =  require("aws-sdk");
const { ServerConfig } = require("../config");



aws.config.update({
    region: "us-east-1",
    secretAccessKey: ServerConfig.SecretAccessKey,
    accessKeyId: ServerConfig.AccessKeyID,
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "twitterbucketps",
      acl: "public-read",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
});

module.exports = upload;