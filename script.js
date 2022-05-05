// Bai 1
// a)

const getMaxLength = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].toString().length) {
      max = arr[i].toString().length;
    }
  }
  return max;
};

const getOrder = function (number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
};

const findMax5 = function (arr) {
  const maxLength = getMaxLength(arr);

  for (let i = 0; i < maxLength; i++) {
    let subArr = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      subArr[getOrder(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...subArr);
  }

  const arrNeed = [];

  for (let i = arr.length - 1; i > arr.length - 6; i--) {
    arrNeed.push(arr[i]);
  }
  return arrNeed;
};

findMax5([3, 4, 5, 3, 2, 3, 10, 11]); // => [11,10,5,4,3]
findMax5([14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22]); // => [48, 45, 38, 36, 34]
findMax5([10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22]); // => [30, 22, 22, 12, 11]

// b)
const findFrequent = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return Object.keys(obj)[0];
};

findFrequent([3, 7, 3, 2, 5, 2, 10, 2, 11, 2]); //➞ 3
findFrequent([null, "hello", true, null]); //➞ null
findFrequent([false, "up", "down", "left", "right", true, false]); //➞ false

// 2)
const formValues = {};
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const sdtInput = document.querySelector(".sdt");
const textInput = document.querySelector(".text");

nameInput.addEventListener("change", (e) => {
  formValues.name = e.target.value;
});

emailInput.addEventListener("change", (e) => {
  formValues.email = e.target.value;
});

sdtInput.addEventListener("change", (e) => {
  formValues.sdt = e.target.value;
});

textInput.addEventListener("change", (e) => {
  formValues.text = e.target.value;
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const postData = async function () {
    await fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(formValues),
    });
  };

  postData();
});

document.querySelector(".clear").addEventListener("click", function (e) {
  e.preventDefault();
  nameInput.value = emailInput.value = sdtInput.value = textInput.value = "";
});
