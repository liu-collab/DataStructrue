class YQEventBus {
  constructor() {
    this.event = {};
  }

  on(eventName, eventCallback, thisArgs) {
    let headlers = this.event[eventName]; //从event中取出处理函数
    if (!headlers) {
      headlers = []; //将处理的函数放在数组中
      this.event[eventName] = headlers;
    }
    headlers.push({
      //将处理函数和this参数放入到对象中
      eventCallback,
      thisArgs,
    });
  }
  off(eventName, handleCallback) {
    const headlers = this.event[eventName];
    if (!headlers) return;
    const newHeadlers = [...headlers]; //复制新的数组
    for (let i = 0; i < newHeadlers.length; i++) {
      const header = newHeadlers[i]; //取到对应的处理函数
      if (header.eventCallback === handleCallback) {
        //比较是否和需要移除的处理函数一样
        const index = headlers.indexOf(header); //找到原来处理函数的索引
        headlers.splice(index, 1); //删除对应的处理函数
      }
    }
  }
  emit(eventName, ...payload) {
    const headlers = this.event[eventName];
    if (!headlers) return;
    headlers.forEach((headler) => {
      //遍历对应的处理函数,并且调用
      headler.eventCallback.apply(headler.thisArgs, payload);
    });
  }
}
const eventBus = new YQEventBus();
eventBus.on(
  "click",
  function () {
    console.log("click1", this);
  },
  { name: "jack" }
);
const headleCallback = function () {
  console.log("click2", this);
};
eventBus.on("click", headleCallback, { name: "mask" });
eventBus.off("click", headleCallback);
eventBus.emit("click");
