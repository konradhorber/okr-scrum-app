import { Request, Response } from 'express';
import pool from '../../db/pool';

export const getObjectives = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM objective');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Database connection error', error });
    }
};

export const createObjective = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'createObjective not implemented' });
};

export const getObjective = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'getObjective not implemented' });
};

export const updateObjective = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'updateObjective not implemented' });
};

export const deleteObjective = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'deleteObjective not implemented' });
};