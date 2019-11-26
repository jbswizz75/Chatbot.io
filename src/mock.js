export default [{
  id: 'Sansa-1',
  name: 'Sansa',
  avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1552510536.jpg?crop=0.501xw:1.00xh;0.0173xw,0&resize=480:*',
  version: '1.0.0',
  description: 'L\'hiver vient',
  actions: [{
    keyword: ['/sansa heure', '/sensa hour', '/sensa time'],
    response: () => {
      const date = new Date();
      return date.toLocaleString();
    },
  }, {
    title: 'devise',
    keyword: ['devise', '/sensa time'],
    response: () => 'L\'hiver vient',
  }],
},
{
  id: 'Tirion-1',
  name: 'Tirion',
  avatar: 'https://avatarfiles.alphacoders.com/189/thumb-189599.jpg',
  version: '1.0.0',
  description: 'Un Lannister paye toujours ses dettes',
  actions: [{
    title: 'devise',
    keyword: ['devise'],
    response: () => 'Un Lannister paye toujours ses dettes',
  }],
}];
