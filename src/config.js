const API = 'https://ibnx74ezzk.execute-api.us-east-1.amazonaws.com/default'
const IdPattern = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}';
const NewPattern = 'new';
const AmplifyAuth = {
    identityPoolId: 'us-east-1:b91a29ee-b171-4d24-b545-81f97dce9e2e',
    userPoolId: 'us-east-1_PfkVUegdd',
    userPoolWebClientId: 'aei92dlp99djhgs4dnsifohm',
    region: 'us-east-1'
};

export {
    API,
    IdPattern,
    NewPattern,
    AmplifyAuth,
}