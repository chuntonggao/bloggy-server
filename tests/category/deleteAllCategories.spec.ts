/*
load environment variables
*/
require('dotenv').config();

import { expect } from 'chai';
import request from 'supertest';

describe('/deleteAllCategories', () => {
    const agent = request('http://localhost:3300');

    it('should delete all categories if sudo secret is provided', async () => {
        const res = await agent.post('/deleteAllCategories').send({
            sudoSecret: process.env.SUDO_SECRET,
        });
        expect(res.status).to.equal(202);
    });

    it('should return 400 when attempting to delete all categories with wrong sudo secret', async () => {
        const res = await agent.post('/deleteAllCategories').send({
            sudoSecret: process.env.SUDO_SECRET + 'wrong',
        });
        expect(res.status).to.equal(400);
    });
});