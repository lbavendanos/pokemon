const axios = {
  get: jest.fn(),
  create: () => axios,
  // defaults: {
  //   adapter: {},
  // },
}

export default axios
