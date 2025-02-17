// filepath: /Users/konrad/Code/konradhorber/okr-scrum-app/db/pool.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://user:pass@postgres:5432/db',
});

export default pool;