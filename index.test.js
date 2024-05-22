//@ts-check

// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    
    let musician;
    beforeAll(async () => {
        musician = await Musician.create({ name:'John', instrument: 'bass'})
    })

    afterAll(async ()=> {
        await Musician.destroy({where: {id: musician.id}})
    })


    it('should return the musician with the given ID', async () => {
        const response = await request(app).get(`/musicians/${musician.id}`);
        expect(response.body).toHaveProperty('name', 'John');
        expect(response.body).toHaveProperty('instrument', 'bass');
    });
  
})