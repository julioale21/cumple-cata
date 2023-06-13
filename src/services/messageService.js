import axios from 'axios';

export class MessageService {

    static async createMessage({ name, message }) {
        console.log({ name, message })
        return await axios.post('/api/messages', { name, message }, {
            headers: {
                'Content-Type': 'application/json',
            },      
        });
    }
}