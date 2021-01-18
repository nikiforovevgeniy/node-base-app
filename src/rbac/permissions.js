module.exports = {
  user: {
    can: [
      {
        name: 'users:getOne',
        when: async ({ user, params }) => {
          return user.id === params.id;
        },
      },
    ],
  },
  admin: {
    inherits: ['user'],
    can: ['users:getAll', 'users:getOne', 'users:create'],
  },
};
