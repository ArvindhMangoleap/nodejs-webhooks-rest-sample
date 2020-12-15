exports.msalConfiguration = {
  authority: 'https://login.microsoftonline.com/common',
  clientID: 'bc03ca0e-6821-4379-bda6-322081a32046',
  clientSecret: '_2b2YA88Dp9W.aDD-SrLqGZz0_.q2YNQTQ',
  tenantID: '7118a3ea-cc9b-4e31-be12-a57daecdb767',
  redirectUri: 'http://localhost:3000/callback'
};

exports.subscriptionConfiguration = {
  changeType: 'Created',
  notificationUrl: 'https://2c373fa60a2a.ngrok.io/listen',
  resource: 'me/mailFolders(\'Inbox\')/messages',
  clientState: 'cLIENTsTATEfORvALIDATION',
  includeResourceData: false
};

exports.certificateConfiguration = {
  certificateId: 'myCertificateId',
  relativeCertPath: './certificate.pem',
  relativeKeyPath: './key.pem',
  password: 'Password123',
}; // the certificate will be generated during the first subscription creation, production solutions should rely on a certificate store

const clientSecretID = "e6556828-50af-4298-86e4-093f3bdd7234";
const clientSecretValue = "_2b2YA88Dp9W.aDD-SrLqGZz0_.q2YNQTQ";