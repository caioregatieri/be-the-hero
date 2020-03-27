const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Session', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to start a session', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:     "APAD - Test",
                email:    "contato@contato.com",
                whatsapp: "4444444444",
                city:     "Franca",
                uf:       "SP"
            });

        const response2 = await request(app)
            .post('/sessions')
            .send({
                id: response.body.id,
            });

        expect(response2.body).toHaveProperty('name');
        expect(response2.body.name).not.toHaveLength(0);
    });
});