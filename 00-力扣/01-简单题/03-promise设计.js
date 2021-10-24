class Mypormise {
  constructor(excutor) {
    this.status = 'pendding';
    this.resolved = undefined;
    this.rejected = undefined;
    const resolve = (val) => {
      if (this.status == 'pedding') {
        //在进来的时候改变状态,不能放在在微任务队列中改状态
        this.status = 'resolved';
        queueMicrotask(() => {
          this.resolved = val;
          this.onResolved(this.resolved);
        });
      }
    };
    const reject = (rejected) => {
      if (this.status == 'pendding') {
        this.status = 'rejected';
        queueMicrotask(() => {
          this.rejected = rejected;
          this.onRejected(this.rejected);
        });
      }
    };
    excutor(resolve, reject);
  }
  then(onResolved, onRejected) {
    this.onResolved = onResolved;
    this.onRejected = onRejected;
  }
}

const pormise = new Mypormise((resolve, reject) => {
  resolve(111);
  reject(222);
});

pormise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
