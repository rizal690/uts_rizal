'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data montir
exports.tampilsemuamontir = function(req, res){
    connection.query('SELECT * FROM tb_montir', function(error, rows, fields){
        if(error){
            console.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data sparepart
exports.tampilsemuasparepart = function(req, res){
    connection.query('SELECT * FROM tb_sparepart', function(error, rows, fields){
        if(error){
            console.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};