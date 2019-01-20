# Mongo S3 Backup 2

### What can it do ?
A utility to backup/dump mongo database to amazon s3
### How do I get set up?
- Install the package
 `npm install mongo-dump-s3-2`
- Import it into your file
- Setup a backup client with your aws credential
- Initiate the backup

### Working example:

  ```
  const mognoS3Backup = require('mongo-dump-s3-2');
  const backupClient = mognoS3Backup({ bucketName: 'myBucketName', accessKey: 'myAccessKey', accessSecret: 'myAccessSecret' });

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
    console.log(err)
  })
  ```
#### The package supports both promises & callback patterns

### Authors  
##### [**Hassan Amin**](https://github.com/hassanamin994)