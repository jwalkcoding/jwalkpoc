var sql = require('mysql');
var settings = require('../settings');

exports.execSQL = function(sql, callback) {
    sql.createConnection(settings.mysqlConn).then(function() {

        var request = new sql.Request(settings.mysqlConn);
        request.query(sql).then(function(data) {
                callback(data);
                sql.close();
            })
            .catch(function(err) {
                console.log(err);
                sql.close();
            });

    }).catch(function(err) {
        console.log(err);
        callback(null, err);
    });

};