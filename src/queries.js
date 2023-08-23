const getFiles = "SELECT * FROM files";
const getFileById = "SELECT * FROM files WHERE id = $1";

module.exports = {
    getFiles,
    getFileById,
};