let listBtn = document.querySelectorAll(".btn")
let listFormCon = document.querySelectorAll(".form-container")
listFormCon.forEach(formCon1 => {
    let btn = formCon1.querySelector(".btn");
    btn.addEventListener("click", function(){
        formCon1.querySelector(".form").classList.toggle("hidden");
    })
});

// {
//     "type": "polygon",
//     "rings": [
//         [106.6993842568616, 10.779516839019685,16],
//         [106.6987166875571, 10.780117921121319,16],
//         [106.6987166875671, 10.780117921121419, 117],
//         [106.6993842568716, 10.779516839019785,117],
//         [106.6993842568616, 10.779516839019685,16]
//     ],
//     "symbol": {
//         "type": "simple-fill",
//         "color": [0, 0, 255, 0.1],
//         "outline": { 
//             "color": [0, 0, 255],
//             "width": 1 
//         }
//     },
//     "attributes": {
//         "name": "Mặt phẳng chính giữa nhà thờ."
//     }
// },