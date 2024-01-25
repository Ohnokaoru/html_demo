//取元素
const nameEl = document.querySelector("#username");
const heightEl = document.querySelector("#userheight");
const weightEl = document.querySelector("#userweight");

//console.log(nameEl, heightEl, weightEl);

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
    console.log(bmi);


}
//計算函式，給按鈕綁定用
function getBmi(weight, height) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤";
    }
    return bmi.toFixed(2);

}
