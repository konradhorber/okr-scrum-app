import { Request, Response } from 'express';
import pool from '../../db/pool';

export const getObjectives = async (req: Request, res: Response) => {
    try {
        // Running a simple test query to check the connection using the pool
        const result = await pool.query('SELECT * FROM objective');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Database connection error', error });
    }
}

export default {getObjectives};