const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Profile', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to get a profile', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:     "APAD - Test",
                email:    "contato@contato.com",
                whatsapp: "4444444444",
                city:     "Franca",
                uf:       "SP"
            });

        await request(app)
            .post('/incidents')
            .set('Authorization', response.body.id)
            .send({
                title:       "Test",
                description: "Test",
                value:       120.00,
            });

        const response2 = await request(app)
            .get('/profiles')
            .set('Authorization', response.body.id);

        expect(response2.body).not.toHaveLength(0);
    });
});