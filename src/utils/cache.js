const PENDING = Symbol('pending');
const RESOLVED = Symbol('resolved');
const REJECTED = Symbol('rejected');

class Result {
  constructor(promise) {
    this.status = PENDING;
    this.value = promise
      .then(result => {
        this.status = RESOLVED;
        this.value = result;
      })
      .catch(error => {
        this.status = REJECTED;
        this.value = error;
      });
  }
}

export default class Resource {
  constructor(fetch) {
    this.fetch = fetch;
    this.cache = new Map();
  }

  get(input) {
    const cached = this.cache.get(input);
    if (cached) {
      switch (cached.status) {
        case PENDING:
          // Trigger suspense by throwing a promise
          throw cached.value;
        case RESOLVED:
          // Return cached value
          return cached.value;
        case REJECTED:
          // Trigger error boundary by thowing error
          throw new Error(cached.value);
        default:
          // Should never happen
          return null;
      }
    } else {
      // Start fetching and throw promise to trigger suspense
      const result = new Result(this.fetch(input));
      this.cache.set(input, result);
      throw result.value;
    }
  }
}
