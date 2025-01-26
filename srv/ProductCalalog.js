
const cds = require("@sap/cds")
//import { ConnectBackend } from './lib/ConnectionHandler';
const {ConnectBackend }  = require('./lib/ConnectionHandler')
module.exports=  cds.service.impl(function(){

    const { ProductList } = this.entities;
    this.on('READ', ProductList, ConnectBackend);

})