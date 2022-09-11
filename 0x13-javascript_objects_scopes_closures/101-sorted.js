#!/usr/bin/node
const { dict } = require("./101-data")
const log = console.log

const sorted = Object.entries(dict).reduce((accumulator, [key, value]) => {
    accumulator[value] = accumulator[value] ?  [...accumulator[value], key]: [key ]
    return accumulator
},{})

log(sorted)