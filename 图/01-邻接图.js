//封装图

function Graph() {
  //属性
  //顶点
  this.vertexts = [];
  //边
  this.edges = new Dictionary();
  //方法
  //1.添加顶点
  Graph.prototype.addVertext = function (v) {
    this.vertexts.push(v);
    this.edges.set(v, []);
  };
  //2.添加边
  Graph.prototype.addEdge = function (v1, v2) {
    //无向图
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  };
  Graph.prototype.toString = function () {
    //1.保存字符串
    let resString = '';
    //2.先取出顶点,在取出边
    for (let i of this.vertexts) {
      resString += i + '->';
      //取出对应顶点相连的边
      let E = this.edges.get(i);
      for (let j of E) {
        resString += j + ' ';
      }
      //换行
      resString += '\n';
    }
    return resString;
  };

  //广度优先
  //white:表示未被访问
  //gray:表示访问过了,但是没有探索完(还有其他相连的顶点没有访问)
  //black:表示探索完

  //初始化状态
  //顶点表示为['A':'white']
  Graph.prototype.initiallizeColor = function () {
    var colors = [];
    for (let i of this.vertexts) {
      colors[i] = 'white';
    }
    return colors;
  };

  //广度优先搜索BFS
  //先探测第一个顶点,将和这个相连的顶点放入到队尾,继续探测队列中第二个顶点,
  //又将相连的顶点放入到队尾,循环直到所有都探测完成
  //顶点,处理顶点
  Graph.prototype.bfs = function (initV, handle) {
    //1.初始化颜色
    const colors = this.initiallizeColor();
    //2.初始化队列
    const queue = new Queue();
    //3.将顶点放入到队列中
    queue.enqueue(initV);
    //4.从循环队列中取出顶点
    while (!queue.isEmpty()) {
      //4.1从队列中取出第一个顶点
      var v = queue.dequeue();
      //4.2获取顶点相邻的点
      var vList = this.edges.get(v);
      //4.3访问完成,改变颜色,
      colors[v] = 'gray';
      //4.4遍历所有的节点,将节点加入到队列中
      for (let item of vList) {
        //判断节点是否被访问过了
        if (colors[item] == 'white') {
          //没有访问,改变颜色
          colors[item] = 'gray';
          //加入到队列中
          queue.enqueue(item);
        }
      }
      //5.访问节点,处理节点
      handle(v);
      //6.探测完成,改变节点颜色
      colors[v] == 'black';
    }
  };

  //深度优先搜索DFS
  Graph.prototype.dfs = function (initV, handle) {
    //1.初始化颜色
    const colors = this.initiallizeColor();
    //2.递归调用处理
    this.dfsVisit(initV, colors, handle);
  };
  Graph.prototype.dfsVisit = function (v, colors, handle) {
    //1.处理顶点
    handle(v);
    //2.访问完成改变颜色
    colors[v] = 'gray';
    //3.探测相邻顶点
    const vList = this.edges.get(v);
    for (let item of vList) {
      if (colors[item] == 'white') {
        colors[item] = 'gray';
        this.dfsVisit(item, colors, handle);
      }
    }
    //4.探测完成,改变颜色
    colors[v] = 'black';
  };
}

//测试
const graph = new Graph();
//边
const myVertext = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

//添加顶点
for (let i of myVertext) {
  graph.addVertext(i);
}

//添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
//深度优先
let resString = '';
graph.bfs(graph.vertexts[0], function (v) {
  resString += v + ' ';
});
console.log(resString);

//广度优先
resString = '';
graph.dfs(graph.vertexts[0], function (v) {
  resString += v + ' ';
});
console.log(resString);
