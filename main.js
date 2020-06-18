
const parentElement = document.querySrlrctor(".katas-list")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")
const div7 = document.createElement("div")
const div8 = document.createElement("div")
const div9 = document.createElement("div")
const div10 = document.createElement("div")
const div11 = document.createElement("div")
const div12 = document.createElement("div")
const div13 = document.createElement("div")
const div14 = document.createElement("div")
const div15 = document.createElement("div")

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//kata 1 
div1.append("kata 1: ")
parentElement.append(div1)

for (let i = 1; i <= 20; i += 1) {
    kataHeading.append(i + " ")
    parentElement.append(kata1Heading)
}

//kata 2

for (let i = 2; i <= 20; i += 2) {
    parentElement.append(i + " ")
}

//kata 3
div3.append("kata 3: ")
parentElement.append(div3)

for (let i = 2; i <= 20; i += 2) {
    kataHeading.append(i + " ")
    parentElement.append(i + " ")
}

//kata 4
div4.append("kata 4: ")
parentElement.append(div4)

for (let i = 2; i <= 20; i += 2) {
    kataHeading.append(i + " ")
    parentElement.append(i + " ")
}

//kata 5
div5.append("kata 5: ")
parentElement.append(div5)

for (let i = 1; i <= 10; i += 1) {
    parentElement.append(i + " ")
}


//kata 6
div6.append("kata 6: ")
parentElement.append(div6)

for (let i = 1; i <= 10; i += 1) {
    parentElement.append(i + " ")
}

//kata 7
div6.append("kata 6: ")
parentElement.append(div6)

for (let i = 1; i <= 10; i += 1) {
    parentElement.append(i + " ")
}

//kata 8
div6.append("kata 6: ")
parentElement.append(div6)

for (let i = 1; i <= 10; i += 1) {
    parentElement.append(i + " ")
}

//kata 9
div9.append("kata 9: ")
parentElement.append(div9)

for (let i = 100; i <= 1; i += 5) {
    parentElement.append(i + " ")
}


//kata 10
div10.append("kata 10: ")
parentElement.append(div10)

for (let counter10 = 10; counter10 >= 1; counter10 -= 1) {
    parentElement.append(counter10 * counter10 + " ")
}

//kata 11
div11.append("kata 11: ")
parentElement.append(div11)

for (let i = 0; i < sampleArray.length; i += 1) {
    parentElement.append(counter10 * counter10 + " ")
}


//kata 12
div12.append("kata 12: ")
parentElement.append(div12)

for (let i = 0; i < sampleArray.length; i += 1) {
    if (sampleArray[i] % 2 === 0)
        parentElement.append(sampleArray[i] + " ")
}


//kata 13
div13.append("kata 13: ")
parentElement.append(div13)

for (let i = 0; i < sampleArray.length; i += 1) {
    if (sampleArray[i] % 2 === 1)
        parentElement.append(sampleArray[i] + " ")
}


//kata 14
div14.append("kata 14: ")
parentElement.append(div14)

for (let i = 0; i < sampleArray.length; i += 1) {
    if (sampleArray[i] % 2 === 1)
        parentElement.append(sampleArray[i] * sampleArray[i] + " ")
}



//kata 15
div15.append("kata 15: ")
parentElement.append(div15)

let total15 = 0
for (let i = 1; i <= 20; i += 1) {
    total15 += i;
    if (i === 20) {

    }
}


//kata 16
div16.append("kata 16: ")
parentElement.append(div16)

let total16 = 0
for (let i = 1; i < sampleArray.length; i += 1) {
    total16 += sampleArray[i];
}
parentElement.append(total16)

    }


//kata 17
div17.append("kata 17: ")
parentElement.append(div17)

let total16 = 0
for (let i = 1; i < sampleArray.length; i += 1) {
    total16 += sampleArray[i];
}
parentElement.append(total16)

    }


//kata 18
div18.append("kata 18: ")
parentElement.append(div18)
let largest = sampleArray[0]
for (let i = 1; i < sampleArray.length; i += 1) {
    if (largest < sampleArray.length; i += 1) {+= sampleArray[i];
    }
    parentElement.append(total16)

}








