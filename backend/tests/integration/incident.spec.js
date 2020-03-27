const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Incident', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new incident', async () => {
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
            .post('/incidents')
            .set('Authorization', response.body.id)
            .send({
                title:       "Test",
                description: "Test",
                value:       120.00,
            });

        expect(response2.body).toHaveProperty('id');
        expect(response2.body.id).not.toBeNaN();
    });

    it('should be able to get incidents', async () => {
        const response = await request(app)
            .get('/ongs');

        const response2 = await request(app)
            .get('/incidents')
            .set('Authorization', response.body[0].id);

        expect(response2.body).not.toHaveLength(0);
    });
});