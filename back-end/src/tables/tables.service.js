const knex = require("../db/connection");

function list() {
    return knex("tables")
        .select("*")
        .orderBy("table_name", "asc");
}

function create(table) {
    return knex("tables")
        .insert(table)
        .returning("*")
        .then((createdTable) => createdTable[0]);
};

module.exports = {
    list,
    create
}