//util fun

const excuteFunctionWithThrowError = function (excuFn, value, resolve, reject) {
  try {
    const res = excuFn(value);
    resolve(res);
  } catch (error) {
    reject(error);
  }
};

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

    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onResolved, onRejected) {
    //判断onRejected是否有值
    const defaultonRejected = (err) => {
      throw err;
    };

    onRejected = onRejected || defaultonRejected;
    //链式调用,在then的返回值为下一个的promise的值
    return new Mypormise((resolve, reject) => {
      //判断当前的状态为resolved直接执行
      //在定时器中会直接改变状态,如果不直接执行,状态不是pendding
      if (this.status == 'resolved') {
        //拿到返回值
        // try {
        //   //执行正常,调用下一个resolve,不正常调用下一个的reject
        //   const val = onResolved(this.resolved);
        //   resolve(val);
        // } catch (error) {
        //   reject(error);
        // }
        //利用工具函数执行判断是否抛出异常
        excuteFunctionWithThrowError(
          onResolved,
          this.resolved,
          resolve,
          reject
        );
      }
      if (this.status == 'rejected') {
        // try {
        //   const val = onRejected(this.rejected);
        //   resolve(val);
        // } catch (error) {
        //   reject(error);
        // }
        excuteFunctionWithThrowError(
          onRejected,
          this.rejected,
          resolve,
          reject
        );
      }
      //将多个then执行放入到数组中,遍历执行数组中的函数
      if (this.status == 'pendding') {
        if (onResolved)
          this.onResolvedFns.push(() => {
            // try {
            //   const val = onResolved(this.resolved);
            //   resolve(val);
            // } catch (error) {
            //   reject(error);
            // }
            excuteFunctionWithThrowError(
              onResolved,
              this.resolved,
              resolve,
              reject
            );
          });

        if (onRejected)
          this.onRejectedFns.push(() => {
            // try {
            //   const val = onRejected(this.rejected);
            //   resolve(val);
            // } catch (error) {
            //   reject(error);
            // }
            excuteFunctionWithThrowError(
              onRejected,
              this.rejected,
              resolve,
              reject
            );
          });
      }
    });
  }
  //catch方法,调用then方法,第一个参数传入undefined,只执行第二个函数
  catch(onRejected) {
    this.then(undefined, onRejected);
  }
}

const promise = new Mypormise((resolve, reject) => {
  //resolve(111);
  reject(222);
});
//多个then方法调用
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
//在定时器中调用
// setTimeout(() => {
//   promise.then(
//     (res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// }, 1000);

//链式调用
// promise
//   .then(
//     (res) => {
//       console.log('res1: ' + res);
//       return 'aaa';
//       //throw new Error('aaa'); //只有抛出错误的时候执行下一个的promise的reject
//     },
//     (err) => {
//       console.log('err1: ' + err);
//       // throw new Error('aaa');
//     }
//   )
//   .then(
//     (res) => {
//       console.log('res2: ' + res);
//     },
//     (err) => {
//       console.log('err2: ' + err);
//     }
//   );

//catch方法
promise
  .then((res) => {
    console.log(res);
    //throw new Error('asd');
  })
  .catch((err) => {
    console.log(err);
  });
