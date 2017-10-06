/**
 * AWS Config
 *
 */

module.exports = {

    isEnabled: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && process.env.AWS_S3_BUCKET && process.env.AWS_S3_REGION && process.env.AWS_S3_PATH ? true : false,

    accessKeyId: process.env.AWS_ACCESS_KEY_ID || null,

    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || null,

    bucket: process.env.AWS_S3_BUCKET || null,

    region: process.env.AWS_S3_REGION || null,

    path: process.env.AWS_S3_PATH

};
