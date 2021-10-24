class Mypormise {
  constructor(excutor) {
    this.status = 'pendding';
    this.resolved = undefined;
    this.rejected = undefined;
    this.onResolvedFns = [];
    this.onRejectedFns = [];
    const resolve = (val) => {
      if (this.status == 'pendding') {
        //在队列中先判断当前的状态,不满足对应的状态直接return,防止resolve和reject一起调用
        queueMicrotask(() => {
          if (this.status !== 'pendding') return;
          this.status = 'resolved';
          this.resolved = val;
          //遍历数组中的函数
          this.onResolvedFns.forEach((fn) => {
            fn(this.resolved);
          });
        });
      }
    };
    const reject = (rejected) => {
      if (this.status == 'pendding') {
        queueMicrotask(() => {
          if (this.status !== 'pendding') return;
          this.status = 'rejected';
          this.rejected = rejected;
          this.onRejectedFns.forEach((fn) => {
            fn(this.rejected);
          });
        });
      }
    };
    excutor(resolve, reject);
  }
  then(onResolved, onRejected) {
    //判断当前的状态为resolved直接执行
    //在定时器中会直接改变状态,如果不直接执行,状态不是pendding
    if (this.status == 'resolved') {
      onResolved(this.resolved);
    }
    if (this.status == 'rejected') {
      onRejected(this.rejected);
    }
    //将多个then执行放入到数组中,遍历执行数组中的函数
    if (this.status == 'pendding') {
      this.onResolvedFns.push(onResolved);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const pormise = new Mypormise((resolve, reject) => {
  resolve(111);
  //reject(222);
});

pormise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

pormise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

setTimeout(() => {
  pormise.then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
}, 1000);
