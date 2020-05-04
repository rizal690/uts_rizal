'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);

    app.route('/tampilservice')
        .get(jsonku.tampilservice);

    app.route('/tampildatamontir')
        .get(jsonku.tampildatamontir);

    app.route('/tampilmontir/:id')
        .get(jsonku.tampilberdasarkanidmontir);

    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilberdasarkanidsparepart);

    app.route('/tambahmontir')
        .post(jsonku.tambahMontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahSparepart);

    app.route('/tambahservice')
        .post(jsonku.tambahService);

    app.route('/tambahuser')
        .post(jsonku.tambahUser);

    app.route('/tambahlevel')
        .post(jsonku.tambahLevel);

    app.route('/ubahmontir')
        .put(jsonku.ubahMontir);

    app.route('/ubahsparepart')
        .put(jsonku.ubahSparepart);

    app.route('/ubahuser')
        .put(jsonku.ubahUser);

    app.route('/ubahlevel')
        .put(jsonku.ubahLevel);

    app.route('/ubahservice')
        .put(jsonku.ubahService);

    app.route('/hapusmontir')
        .delete(jsonku.hapusMontir);

    app.route('/hapussparepart')
        .delete(jsonku.hapusSparepart);

    app.route('/hapususer')
        .delete(jsonku.hapusUser);

    app.route('/hapuslevel')
        .delete(jsonku.hapusLevel);

    app.route('/hapusservice')
        .delete(jsonku.hapusService);

}