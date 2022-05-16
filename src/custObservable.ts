export class custObservable {
  subscribers = [];
  constructor(sub) {
    sub(this);
  }

  subscribe(method) {
    this.subscribers.push(method);
  }

  next(value) {
    this.subscribers.forEach((x) => {
      x(value);
    });
  }
}
