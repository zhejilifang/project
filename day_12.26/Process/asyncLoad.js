let imgData = [{
    id: 1,
    img: 'https://desk-fd.zol-img.com.cn/t_s144x90c5/g5/M00/02/01/ChMkJ1bKxPiIG76qAAs612-GgjcAALHPACxZksACzrv497.jpg'
}, {
    id: 2,
    img: 'https://desk-fd.zol-img.com.cn/t_s144x90c5/g5/M00/02/01/ChMkJlbKxPmIJgn1AAtNhH6bB1UAALHPAC8oToAC02c000.jpg'
}, {
    id: 3,
    img: 'https://desk-fd.zol-img.com.cn/t_s1280x800c5/g5/M00/02/01/ChMkJlbKxQyIJgarAAJaIRsKR2wAALHQAI3eDMAAlo5575.jpg'
}, {
    id: 4,
    img: 'https://desk-fd.zol-img.com.cn/t_s208x208c5/g5/M00/04/09/ChMkJ1oM6NKIIUP-AAcPx6M4Es8AAiNBQK9xwcABw_f602.jpg'
}, {
    id: 5,
    img: 'https://desk-fd.zol-img.com.cn/t_s144x90c5/g5/M00/02/01/ChMkJ1bKxPmIPsobAAtBGSxTZ00AALHPADeFZwAC0Ex487.jpg'
}]
let loadImg = (src) => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function() {
            resolve(image)
        };
        image.onerror = function() {
            reject('图片找不到')
        };
        image.src = src;
    })
}

render(imgData)

function render(data) {
    data.forEach(async(item) => {
        let img = await loadImg(item.img)
        document.body.appendChild(img)
    })
}