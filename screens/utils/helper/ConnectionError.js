class ConnectionError extends Error {
  constructor({ request, response }) {
    super();

    this.request = request;
    this.response = response;
  }
}

export default ConnectionError;
