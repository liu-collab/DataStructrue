package main
func maxArea(height []int) int {
	L :=0
	R :=len(height)-1
	m :=0
 for L<R {
 cur := min(height[L],height[R]) * (R-L)
 if cur > m {
		 m = cur
 }
 if height[L] < height [R] {
		 L++
 }else {
		 R--
 }

 }
 return m
}
func min(m int,n int) int {
 if m > n {
		 return n
 }else {
		 return m
 }
}
func main()  {
	var height = []int{1,1}
	maxArea(height)
}