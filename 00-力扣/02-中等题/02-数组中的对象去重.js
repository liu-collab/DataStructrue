var arr = [
  { id: 1, name: 'jack' },
  { id: 2, name: 'mask' },
  { id: 3, name: 'jkdf' },
  { id: 2, name: 'dsv' },
];

function create(id, name) {
  var p = {};
  p.id = id;
  p.name = name;
  return p;
}

function foo(arr) {
  const map = new Map();
  var af = [];
  for (const item of arr) {
    map.set(item.id, item.name);
  }
  ad = Array.from(map);

  for (let item of ad) {
    const p = create(item[0], item[1]);
    af.push(p);
  }
  return af;
}
console.log(foo(arr));
