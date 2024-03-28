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

});

router.get('/:filename', async (req, res) => {

});

router.post('/', async (req, res) => {

});

router.put('/:filename', async (req, res) => {

});

router.delete('/:filename', async (req, res) => {

});

export default router;
