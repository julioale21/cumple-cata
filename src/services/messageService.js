import axios from 'axios';

export class MessageService {

    static async createMessage({ name, message }) {
        return await axios.post('/api/messages', { name, message }, {
            headers: {
                'Content-Type': 'application/json',
            },      
        });
    }

    static async getMessages() {
        return await axios.get('/api/messages');
    }
    
}