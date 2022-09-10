#!/usr/bin/node
const { list } = require("./100-data");
const log = console.log

const mapList = list.map((el, index) => el * index);

log(list)
log(mapList)
