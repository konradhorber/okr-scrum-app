import pool from '../../db/pool';

export const getObjectives = async () => {
    console.log('getObjectives');
    const result = await pool.query('SELECT * FROM objective');
    console.log('objectives', result);
    return result.rows;
};