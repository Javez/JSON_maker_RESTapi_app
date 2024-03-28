import fs from 'fs/promises';
import path from 'path';
import logger from '../middleware/logger.js';

const createNewFile = async (filename, data) => {
    try {
        const filePath = path.join(process.cwd(), `files/${filename}.json`);
        console.log('filepath', filePath);
        const jsonData = JSON.stringify(data);
        await fs.writeFile(filePath, jsonData, {
            encoding: 'utf8',
        });
        return true;
    } catch (error) {
        logger.error('Error creating file:', error);
        return false;
    }
};

const getOneFile = async (filename) => {
    try {
        const fileData = await fs.readFile(
            path.join(process.cwd(), `files/${filename}.json`),
            'utf8'
        );
        return JSON.parse(fileData);
    } catch (error) {
        logger.error('Error receiving one file:', error);
        return false;
    }
};

const getListOfFiles = async () => {
    try {
        const folderPath = path.join(process.cwd(), 'files');
        const files = await fs.readdir(folderPath);
        const data = {};
        for (const file of files) {
            if (file.endsWith('.json')) {
                const filePath = path.join(folderPath, file);
                const fileData = await fs.readFile(filePath, 'utf8');
                const jsonData = JSON.parse(fileData);
                const fileName = path.parse(file).name;
                data[fileName] = jsonData;
            }
        }
        return data;
    } catch (error) {
        logger.error('Error receiving list of files:', error);
        return false;
    }
};

const updateFile = async (filename, newData) => {
    try {
        await fs.writeFile(
            path.join(process.cwd(), `files/${filename}.json`),
            JSON.stringify(newData)
        );
        return 'File updated successfully';
    } catch (error) {
        logger.error('Error updating some file:', error);
        return false;
    }
};

const deleteFile = async (filename) => {
    try {
        await fs.unlink(path.join(process.cwd(), `files/${filename}.json`));
        return 'File deleted successfully';
    } catch (error) {
        logger.error('Error deleting some file:', error);
        return false;
    }
};

export { createNewFile, getOneFile, getListOfFiles, updateFile, deleteFile };
