const listofMatches = [
  "jQuery",
  "React",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Backbone.js",
  "D3.js",
  "Three.js",
  "Lodash",
  "Underscore.js",
  "Redux",
  "MobX",
  "Axios",
  "Moment.js",
  "Socket.io",
  "Chart.js",
  "Leaflet",
  "Babel",
  "Webpack",
  "Express.js",
  "Node.js",
  "Jasmine",
  "Mocha",
  "Chai",
  "Cypress",
  "Jest",
  "RxJS",
  "Async.js",
  "TweenMax",
  "Foundation",
];

let mText = [];
const searchForm = document.querySelector("#search-form");
const getInput = document.querySelector("#search");
const suggestionsList = document.querySelector("#suggestion");

// Select variables
function makeList(arr, selector = suggestionsList) {
  suggestionsList.innerHTML = null;
  for (i = 0; i < arr.length; ++i) {
    let li = document.createElement("li");
    li.innerText = arr[i];
    li.setAttribute("onclick", `clickToSubmit('${arr[i]}')`);
    selector.appendChild(li);
  }
}

// check is input focused
getInput.addEventListener("focus", (e) => {
  suggestionsList.style.display = "block";
  listHighlight();
});
ul.addEventListener("hover", () => {
  suggestionsList.style.display = "block";
});
getInput.addEventListener("blur", (e) => {
  suggestionsList.style.display = "none";
});

getInput.addEventListener("keyup", (e) => {
  if (event.which !== 40 && event.which !== 38) {
    getRuntimeText();
  }
});

function getRuntimeText() {
  mText = [];
  const value = getInput.value.toLowerCase();
  listofMatches.forEach((item, i) => {
    const alowValue = item.toLowerCase();
    const re = new RegExp(`(\w*(?:[${value}]{3,})\w*\w*)`);
    // const re = /`(\w*(?:[ang]{2,})\w*\w*)`/;

    const match = alowValue.match(re);
    if (match) {
      mText.includes(item) ? "" : mText.push(item);
    }
  });

  makeList(mText);
}

function clickToSubmit(val) {
  getInput.value = val;
  searchForm.submit();
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentValue = e.target.search.value;
  console.log(
    "🔐 -> file: script.js:100 -> searchForm.addEventListener -> currentValue:",
    currentValue
  );
});

const setValueToForm = (i) => {
  const elementValue = i.innerHTML;
  getInput.value = elementValue;
};

function listHighlight() {
  const ul = document.querySelector("#suggestion");

  var index = null;
  // Set up a key event handler for the document
  document.addEventListener(
    "keydown",
    function (event) {
      //set value to input form
      if (event.which === 40) {
        const li = ul.children;
        const actualLength = suggestionsList.children.length;
        const length = suggestionsList.children.length - 1;

        if (index == null) {
          index = 0;

          //when index =0
          for (let i = 0; i < length; i++) {
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        } else if (index >= 0 && index < length) {
          index++;
          // when index value equals or  more than 0
          for (let i = 0; i < actualLength; i++) {
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        } else {
          index = 0;
          // when index value equals or  more than 0
          for (let i = 0; i < actualLength; i++) {
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        }

        //code
      } else if (event.which === 38) {
        const li = ul.children;
        const actualLength = suggestionsList.children.length;
        const length = suggestionsList.children.length - 1;

        if (index == null) {
          index = length;
          //when index =0
          for (let i = 0; i < actualLength; i++) {
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        } else if (index >= 0 && index <= length) {
          index--;
          // when index value equals or  more than 0
          for (let i = 0; i < actualLength; i++) {
            if (index === -1) {
              index = length;
            }
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        } else {
          index = length;
          for (let i = 0; i < actualLength; i++) {
            const element = li[i];
            index == i ? addClass(element) : removeClass(element);
          }
        }
      }
    },
    false
  );
}
function removeClass(el) {
  if (el.classList) {
    el.classList.remove("active");
  }
}

function addClass(el) {
  setValueToForm(el);
  if (el.classList) {
    el.classList.add("active");
  }
}
