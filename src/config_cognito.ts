const awsConfig = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_K2XbxQ2bT',
        userPoolWebClientId: '5nud0gq4v734gjakbbvsev6juq',
        identityPoolId: 'us-east-1:19500374-dc83-4c10-87c7-78bc565c08f6',
    },
    API: {
        endpoints: [
            {
                name: 'Ransa360API',
                endpoint: 'https://q9hpg27one.execute-api.us-east-1.amazonaws.com/dev',
            },
        ],
    },
};
export { awsConfig };
