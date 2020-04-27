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

//menampilkan semua data montir berdasarkan id
exports.tampilberdasarkanidmontir = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tb_montir WHERE id_montir = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data sparepart berdasarkan id
exports.tampilberdasarkanidsparepart = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tb_sparepart WHERE id_sparepart = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data montir
exports.tambahMontir = function(req, res){
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO tb_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!",res)
            }  
        });
};

//menambahkan data sparepart
exports.tambahSparepart = function(req, res){
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO tb_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
        [nama_sparepart, harga_sparepart, satuan],
        function (error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!",res)
            }  
        });
};

