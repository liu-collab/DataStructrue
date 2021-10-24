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
    //判断onRejected是否有值,在没有值的情况下表示使用的是catch方法
    //直接将异常抛出,在下一个promise中用catch捕获异常
    const defaultonRejected = (err) => {
      throw err;
    };
    onRejected = onRejected || defaultonRejected;
    //判断onResolved是否有值,没有值说明
    const defaultonResolved = (val) => {
      return val;
    };
    onResolved = onResolved || defaultonResolved;
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
  //返回一个promise,给finally方法使用
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  //finally方法
  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(val) {
    return new Mypormise((resolve) => {
      resolve(val);
    });
  }
  static reject(err) {
    return new Mypormise((resolve, reject) => {
      reject(err);
    });
  }
  static all(promises) {
    const values = [];
    return new Mypormise((resolve, reject) => {
      promises.forEach((promise) => {
        //判断数组中的元素是否为自定义promise类,不是直接添加到结果的数组中
        if (promise instanceof Mypormise) {
          promise
            .then((res) => {
              values.push(res);
              if (values.length === promises.length) {
                resolve(values);
              }
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          values.push(promise);
        }
      });
    });
  }
}

const promise = new Mypormise((resolve, reject) => {
  resolve(111);
  // reject(222);
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
// promise
//   .then((res) => {
//     console.log(res);
//     //throw new Error('asd');
//     return 'aaa';
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

//resolve,reject
// Mypormise.resolve('asd').then((res) => {
//   console.log(res);
// });
// Mypormise.reject('err').catch((err) => {
//   console.log(err);
// });

const p1 = new Mypormise((resolve) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
const p2 = new Mypormise((resolve, reject) => {
  setTimeout(() => {
    resolve(2222);
  }, 2000);
});
const p3 = new Mypormise((resolve) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});

Mypormise.all([p1, p2, p3, 'aaa'])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
