export default {
  isAdmin: ({ role }) => role === 0,
  isDirector: ({ role }) => role === 1,
  isUser: ({ role }) => role === 2,
  isGuest: ({ role }) => role === null,
};
