const knex = require("../db/connection");

function list() {
    return knex("reservations")
        .select("*");

}

function listByDate(date) {
    return knex("reservations")
        .select("*")
        .where({ reservation_date: date })
        .orderBy("reservation_time", "asc");   
}

function create(reservation) {
    return knex("reservations")
        .insert(reservation)
        .returning("*")
        .then((createdRes) => createdRes[0]);
}

module.exports = {
    list,
    listByDate,
    create,
}