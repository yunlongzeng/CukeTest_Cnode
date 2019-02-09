function willgame(){
    return new Promise(function(resolve,reject){
        resolve("will play game")
    })
}

function get_peach(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get peach')
        },3000)
    })
}

function eat_peach(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('eat peach')
        },3000)
    })
}

function play_game(){
    return new Promise(function(resolve,reject){
        resolve('play game')
    })
}

play_game().then(function(res){
    console.log(res)
}).catch(function(rej){
    console.log(rej)
})

// willgame().then(function(res){
//     console.log(res,new Date())
//     get_peach().then(function(res){
//         console.log(res,new Date())
//         eat_peach().then(function(res){
//             console.log(res,new Date())
//             play_game().then(function(res){
//                 console.log(res,new Date())
//             })
//         })
//     })
// })

