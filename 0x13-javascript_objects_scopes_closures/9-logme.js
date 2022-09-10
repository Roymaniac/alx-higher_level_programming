#!/usr/bin/node
const log = console.log
let args = 0
exports.logMe = function(item){
    log(`${args}: ${item}`)
    args++
}