// var walletItems = [
//   {
//     id: 0,
//     serviceName: 'Facebook',
//     description: 'Info to access to my facebook account',
//     credentials: [{ name: 'email', value: 'myemail@example.it' }, { name: 'username', value: 'myUsername' }, { name: '2 way auth second device', value: '3331111111' }],
//     secrets: [{ name: 'password', value: 'Abecedario11!!', lastUpdate: '1626945931177' }]
//   },
//   {
//     id: 1,
//     serviceName: 'Instagram',
//     description: 'Info to access to my instagram account',
//     credentials: [{ name: 'email', value: 'myemail@example.it' }, { name: 'username', value: 'myUsername' }, { name: '2 way auth second device', value: '3331111111' }],
//     secrets: [{ name: 'password', value: 'Abecedario11!!', lastUpdate: '1626945931177' }]
//   },
//   {
//     id: 2,
//     serviceName: 'MyBank',
//     description: 'Info to access to my mybank account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 3,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 4,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 5,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 6,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 7,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 8,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 9,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 10,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 11,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },
//   {
//     id: 12,
//     serviceName: 'WalletItem',
//     description: 'Info to access to my account',
//     credentials: [],
//     secrets: [{ name: 'pin', value: '0000', lastUpdate: '1625345111177' }]
//   },

// ];

module.exports = dependencies => async (event, data) => {
  const {persistence} = dependencies;
  return persistence.getItems();
}