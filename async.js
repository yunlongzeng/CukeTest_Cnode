function willgame() {
    return new Promise(function (resolve, reject) {
        resolve("will play game")
    })
}

function get_peach() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get peach')
        }, 3000)
    })
}

function eat_peach() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('eat peach')
        }, 3000)
    })
}

function play_game() {
    return new Promise(function (resolve, reject) {
        resolve('play game')
    })
}
async function run(){
    let a = await willgame()
    console.log(a,new Date())
    let b = await get_peach()
    console.log(b,new Date())
    let c = await eat_peach()
    console.log(c,new Date())
    let d = await play_game()
    console.log(d,new Date())
}

run()