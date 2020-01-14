const TOKEN = 'TOKEN';

const getToken = (token) => ({
  type: TOKEN,
  payload: {
    token
  }
});

export { TOKEN, getToken };