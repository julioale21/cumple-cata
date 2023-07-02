
const { default: axios } = require("axios");

export class apiServices {
    static uploadImageToCloudinary = async (image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "kdkj5wpr");
        data.append("folder", "cumple_cata");
        const response =  await axios.post('https://api.cloudinary.com/v1_1/dnwn91rxe/image/upload', data);

        const { secure_url } = response.data;
        const responsePhoto = await axios.post('/api/photo', { url: secure_url });
        console.log('responsePhoto', responsePhoto);

        return response;
    };
}