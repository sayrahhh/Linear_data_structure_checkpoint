// Q1 Solution 1

let theSets = function (set1, set2) {
  var sum = 0;
  var arr = [];
  for (let i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i]) === false) {
      sum += set1[i];
      arr.push(set1[i]);
    }
  }

  for (let i = 0; i < set2.length; i++) {
    if (set1.includes(set2[i]) === false) {
      sum += set2[i];
      arr.push(set2[i]);
    }
  }
  return `${sum} (distinct elements ${arr.toString()})`;
};

// Q1 Solution 2

let objectSum = function (set1, set2) {
  let arr = set1.concat(set2);
  var count = {};
  var distinct = [];
  var sum = 0;
  arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (var key in count) {
    if (count[key] == 1) {
      sum += parseInt(key);
      distinct.push(key);
    }
  }
  return `${sum} (${distinct.toString()})`;
};
// console.log(objectSum([3,1,7,9],[2,4,9,1,9,3]));

// Q2 Solution

let newSets = function (set3, set4) {
  var sum = 0;
  var arr = [];

  for (i = 0; i < set3.length; i++) {
    if (set4.includes(set3[i])) {
      sum += set3[i];
      arr.push(set3[i]);
    }
  }

  for (i = 0; i < set3.length; i++) {
    if (set3.includes(set4[i])) {
      sum += set4[i];
      arr.push(set4[i]);
    }
  }
  return `sum of overlapping elements: ${sum}`;
};

console.log(newSets([12, 13, 6, 10], [13, 10, 16, 15]));

// Q2 Solution 2
function overlappingSum2(set1, set2) {
  var arr = set1.concat(set2);
  var count = {};
  var overlap = [];
  var sum = 0;
  arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (var key in count) {
    if (count[key] > 1) {
      sum += parseInt(key) * count[key];
      overlap.push(key);
    }
  }
  return `Sum of overlapping elements: ${sum}`;
}
