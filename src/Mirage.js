import { createServer, Model } from 'miragejs';

createServer({
    models: {
        contact: Model,
    },

    seeds(server) {
        server.create('contact', {
            name: 'Ivan Ivanov', role: 'Head', phone: '+7 950 456 78 90',
            email: 'ivan.ivanov@gmail.com'
        });
        server.create('contact', {
            name: 'Ann Smirnova', role: 'PR-manager', phone: '+7 950 123 45 67',
            email: 'anna.smirnova@gmail.com'
        });
        server.create('contact', {
            name: 'Elena Petrova', role: 'Sales department', phone: '+7 950 678 90 12',
            email: 'elena.petrova@gmail.com'
        });
    },

    routes() {
        this.namespace = 'api';
        this.timing = 2500;
        this.get('/contacts', (schema) => {
            return schema.contacts.all();
        });
    },
});
