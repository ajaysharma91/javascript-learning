let count = 0;
function getData() {
    console.log("fetchimng data...." + count++)
}

function highergetData(fn, tm) {
    let timer
    return function () {
        clearTimeout(timer)
        const context = this,
            args = arguments;
        timer = setTimeout(function () {
            fn.apply(context, arguments)
        }, tm)
    }
}

const wrapCall = highergetData(getData, 400)