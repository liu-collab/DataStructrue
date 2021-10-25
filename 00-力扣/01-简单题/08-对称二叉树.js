var isSymmetric = function (root) {
  function compareNode(left, right) {
    if (left === null && right === null) return true;
    else if (
      (left != null && right === null) ||
      (left === null && right != null)
    )
      return false;
    else if (left.val !== right.val) return false;
    let a = compareNode(left.left, right.right);
    let b = compareNode(left.right, right.left);
    return a && b;
  }
  if (root === null) return true;

  return compareNode(root.left, root.right);
};
