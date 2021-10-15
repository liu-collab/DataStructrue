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
