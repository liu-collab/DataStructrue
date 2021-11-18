package main

import "fmt"

func swap(tree []int, max int, i int) {
	tmp := tree[max]
	tree[max] = tree[i]
	tree[i] = tmp
}

func heapify(tree []int, n int, i int) { //生成堆操作
	if i >= n { //退出操作
		return
	}
	c1 := 2*i + 1  //左节点
	c2 := 2*i + 2  //右节点
	max := i
	if c1 < n && tree[c1] > tree[max] { //找出父子节点中的最大值
		max = c1
	}
	if c2 < n && tree[c2] > tree[max] {
		max = c2
	}
	if max != i { //将最大值进行交换,并且递归下面的数据
		swap(tree, max, i)
		heapify(tree, n, max)
	}
}

func build_heap(tree []int,n int) {  //生成一颗完全二叉树
	last_node := n - 1
	parent := (last_node-1) / 2
   for i:=parent;i>=0;i-- {
	heapify(tree,n,i)
 }
}

func heap_sort(tree []int,n int) {
	build_heap(tree,n)
	for i:=n-1;i>=0;i-- {
		swap(tree,i,0)
		heapify(tree,i,0)
	}
}

func main() {
	tree := [...]int{4, 6, 3,10, 5, 1,2}
	n := len(tree)
	heap_sort(tree[:], n)
	for i := 0; i < n; i++ {
		fmt.Printf("%v\n",tree[i])
	}
}