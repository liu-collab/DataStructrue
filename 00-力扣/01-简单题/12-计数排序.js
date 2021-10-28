//计数排序,空间换时间
//新建一个数组,数组的长度根据需要排序的数据最大值确定
//定义一个最大数据长度的数组,将需要排序的数据依次放入到bucket对应的下标中
//在循环重bucket取出对应的数据,就排好序了
function countingSort(arr, maxValue) {
  let bucket = new Array(maxValue + 1);
  var index = 0;
  const aLen = arr.length;
  const buLen = maxValue + 1;

  for (let i = 0; i < aLen; i++) {
    //遍历数组的长度
    //判断bucket是否有数组中对应的值,没有初始化为0,
    //有的话bucket的下标值加一,表示增加这个位置有多个相同的值
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }
  for (let j = 0; j < buLen; j++) {
    //遍历bucket的长度,判断每一个bucket的位置是否有数据
    while (bucket[j] > 0) {
      //每一个的bucket可能存在多个相同的值,每次出栈一个,
      //将每次出栈的一个数据赋值给arr数组对应的下标值位置
      arr[index++] = j;
      //每出一个减一
      bucket[j]--;
    }
  }
  return arr;
}

const arr = [20, 45, 50, 54, 78, 56, 123, 4, 65, 52, 42, 85, 12, 23, 89, 32];
const MaxValue = Math.max(...arr);
console.log(countingSort(arr, MaxValue));
