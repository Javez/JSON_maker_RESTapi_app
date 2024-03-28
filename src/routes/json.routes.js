import express from 'express';
import {
    createNewFile,
    getOneFile,
    getListOfFiles,
    updateFile,
    deleteFile,
} from '../controllers/json.controllers.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const files = await getListOfFiles();
        files ? res.send(files) : res.status(404).send('Something went wrong');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

router.get('/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const fileData = await getOneFile(filename);
        fileData
            ? res.send(fileData)
            : res.status(404).send('Something went wrong');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

router.post('/', async (req, res) => {
    try {
        const { filename, data } = req.body;
        const result = await createNewFile(filename, data);
        result
            ? res.status(201).send('File created successfully')
            : res.status(500).send('Something went wrong');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

router.put('/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const newData = req.body;
        const result = await updateFile(filename, newData);
        result
            ? res.send('File updated successfully')
            : res.status(500).send('Something went wrong');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

router.delete('/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const result = await deleteFile(filename);
        result
            ? res.send('File deleted successfully')
            : res.status(500).send('Something went wrong');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

export default router;
