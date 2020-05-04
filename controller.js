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

//Menampilkan Data Service 
exports.tampilservice = function(req,res){

    connection.query('SELECT tb_user.username, tb_service.tgl_service, tb_montir.nama_montir, tb_sparepart.nama_sparepart,tb_sparepart.harga_sparepart, tb_service.jumlah_sparepart, tb_service.jam_service, tb_montir.harga_perjam, tb_service.total_service FROM tb_service JOIN tb_user JOIN tb_sparepart JOIN tb_montir WHERE tb_service.id_user = tb_user.id_user AND tb_service.id_sparepart = tb_sparepart.id_sparepart AND tb_service.id_montir = tb_montir.id_montir ORDER BY tb_user.id_user ',
     function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data service total
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM tb_montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
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

//menambahkan data service
exports.tambahService = function (req, res) {
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;


    connection.query('INSERT INTO tb_service (tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service) VALUES(?,?,?,?,?,?)',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data user
exports.tambahUser = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();


    connection.query('INSERT INTO tb_user (username, email, password, role, tanggal_daftar) VALUES(?,?,?,?,?)',
        [username, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.tambahLevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;



    connection.query('INSERT INTO level (nama_level, role) VALUES(?,?)',
        [nama_level, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//mengubah data montir berdasarkan id
exports.ubahMontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE tb_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama_montir,harga_perjam,id_montir],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil ubah data",res)
        }
    });
};

//mengubah data sparepart berdasarkan id
exports.ubahSparepart = function(req,res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE tb_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?', [nama_sparepart,harga_sparepart,satuan,id_sparepart],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil ubah data",res)
        }
    });
};

//Mengubah data user berdasarkan id
exports.ubahUser = function (req, res) {
    var id_user = req.body.id_user;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();


    connection.query('UPDATE tb_user SET username=?, email=?, password=?, role=?, tanggal_daftar=? WHERE id_user=?',
        [username, email, password, role, tanggal_daftar, id_user], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil ubah data", res)
            }
        });
};

//Mengubah data level berdasarkan id
exports.ubahLevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;
    var role = req.body.role;



    connection.query('UPDATE level SET nama_level=?, role=? WHERE id_level=?',
        [nama_level, role, id_level], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil ubah data", res)
            }
        });
};

//Mengubah data service berdasarkan id
exports.ubahService = function (req, res) {
    var id_service = req.body.id_service;
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;


    connection.query('UPDATE tb_service SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_service=? WHERE id_service=?',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, id_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil ubah data", res)
            }
        });
};

//Menghapus data montir berdasarkan id
exports.hapusMontir = function (req, res) {
    var id = req.body.id_montir;
 
     connection.query('DELETE FROM tb_montir WHERE id_montir=?',[id],
         function (error, rows, fields) {
             if (error) {
                 console.log(error);
             } else {
                 response.ok("Berhasil hapus data",res)
             }
         });
 };

 //Menghapus data sparepart berdasarkan id
exports.hapusSparepart = function (req, res) {
    var id = req.body.id_sparepart;
 
     connection.query('DELETE FROM tb_sparepart WHERE id_sparepart=?',[id],
         function (error, rows, fields) {
             if (error) {
                 console.log(error);
             } else {
                 response.ok("Berhasil hapus data",res)
             }
         });
 };

 //Menghapus data user berdasarkan id
 exports.hapusUser = function(req, res){
    var id = req.body.id_user;

    connection.query('DELETE FROM tb_user WHERE id_user=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

//Menghapus data level berdasarkan id
exports.hapusLevel = function(req, res){
    var id = req.body.id_level;
    connection.query('DELETE FROM level WHERE id_level=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

//Menghapus data service berdasarkan id
exports.hapusService = function(req, res){
    var id = req.body.id_service;
    connection.query('DELETE FROM tb_service WHERE id_service=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
         } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
    };