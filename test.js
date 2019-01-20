const mognoS3Backup = require('./index');

const bucketName = '';
const accessKey = '';
const accessSecret = '';
const dbConnectionUri = '';


const backupClient = mognoS3Backup({ bucketName, accessKey, accessSecret });

backupClient.backupDatabase({ uri: dbConnectionUri, backupName: 'test_backup' })
.then(response => {
  console.log('Success response ', response)
  /*
    Success response includes default aws response to uploading files
    example: 
      { 
        ETag: '"exampleEtag"',
        Location: 'https://examplebucket.s3.amazonaws.com/test_backup',
        key: 'test_backup',
        Key: 'test_backup',
        Bucket: 'mybucket' 
      }

  */
})
.catch(err => {
  console.log('error is ', err);
})