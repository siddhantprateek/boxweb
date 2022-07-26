module.export = {
    aws_table_name: 'user-dynamodb',
    aws_local_config: {
        region: 'local',
        endpoint: 'http://localhost:4000'
    },
    aws_remote_config: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: 'us-east-1'
    }
}