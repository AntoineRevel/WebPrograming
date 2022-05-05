let text1 = "2";
let result = text1.concat();

const tab = [1, 4, 5, 7, 2, 9];


function appSmall() {
    let resultText=document.getElementById("resultSmall");
    let node=document.createTextNode(JSON.stringify(removeNsmallest(1, tab)));
    //console.log(removeNsmallest(3, tab))
    resultText.appendChild(node);
}
window.appSmall=appSmall;

const removeNsmallest = (n, array) => {
    if (n === 0) {
        //console.log(array);
        return array;
    } else {
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < array.length; i++) {
            let cour = array[i];
            if (min > cour) {
                min = cour;
            }
        }
        array.splice(array.indexOf(min), 1);
        return(removeNsmallest(n - 1, array));
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function caclulPi(tabPoint) {
    let t=0;
    for (let i = 0; i < tabPoint.length; i++) {
        let tabtabPointKeyX = tabPoint[i].x;
        let tabtabPointKeyY = tabPoint[i].y;
        if (Math.pow(tabtabPointKeyX, 2) + Math.pow(tabtabPointKeyY, 2) < 1) {
            t++;
        }
    }
    return t*4/tabPoint.length;
}


function appPi() {
    let tabPoint = [];
    for (let i = 0; i < 30000; i++) {
        tabPoint.push(new Point(Math.random(), Math.random()))
    }
    let resulPi=document.getElementById("resultPi");
    let node=document.createTextNode(JSON.stringify(caclulPi(tabPoint)));
    resulPi.appendChild(node);
    //document.write(caclulPi(tabPoint));
}

window.appPi=appPi;

window.add= function() {
    let nb=document.getElementById("nb").value;
    tab.push(nb);
    document.getElementById("tab").innerHTML=tab;
}