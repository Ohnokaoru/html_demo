//取元素
const nameEl = document.querySelector("#username");
const heightEl = document.querySelector("#userheight");
const weightEl = document.querySelector("#userweight");
const bmiEl = document.querySelector("#bmi")
const commentEl = document.querySelector("#comment")

//console.log(nameEl, heightEl, weightEl,bimEl,commentEl);

//測試函式
console.log(getBmi(weightEl.value, heightEl.value));



//綁定按鈕函式(不能給參數)
function calcBmi() {
    let height = heightEl.value;
    let weight = weightEl.value;
    //檢查是否為空(required是後端用)
    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    let bmi = getBmi(weight, height);
    let comment;
    if (bmi < 18.5) {
        comment = "過輕";
    } else if (bmi < 24) {
        comment = "正常";
    } else if (bmi < 27) {
        comment = "過重";
    } else if (bmi < 30) {
        comment = "輕度肥胖";
    } else if (bmi < 35) {
        comment = "中度肥胖";
    } else {
        comment = "重度肥胖";
    }
    // console.log(comment);
    bmiEl.innerText = bmi;
    commentEl.innerText = comment;
}



function clearButton() {
    nameEl.value = "";
    heightEl.value = "";
    weightEl.value = "";
    bmiEl.innerText = "";
    commentEl.innerText = "";
}


//計算函式，給按鈕綁定用
function getBmi(weight, height) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤";
    }
    return bmi.toFixed(2);

}
