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

// const cache = {};

// export default function get(url) {
//   const cacheResult = cache[url] || {};

//   if (cacheResult.value) {
//     console.log('value');
//     return cacheResult.value;
//   } else if (cacheResult.error) {
//     console.log('error');
//     throw cacheResult.error;
//   } else {
//     console.log('promise');
//     throw new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (Math.random() < 1) {
//           cache[url] = { value: MOCK_DATA[url] };
//           resolve();
//         } else {
//           console.log('reject');
//           cache[url] = { error: { url } };
//           reject();
//         }
//       }, 1000);
//     });
//   }
// }
