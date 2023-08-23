const pool = require('../db');
const queries = require('./queries');

const getFiles = (req, res) => {
    pool.query(queries.getFiles, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFileById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getFileById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getFiles,
    getFileById,
};

