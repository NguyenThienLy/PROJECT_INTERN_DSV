//import 'isomorphic-unfetch';
import { environment } from '../environments';

export class ImgurApi {
    constructor() {
        this.clientID = '';
        this.clientToken = '';
    }
    clientID;
    clientToken;
    baseUrl() {
        return `https://api.imgur.com/3`;
    }

    async uploadImage(file) {
        return new Promise((resolve, reject) => {
            try {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image', true);
                xhr.setRequestHeader('Authorization', 'Client-ID d4de8224fa0042f');
                xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let responseObject = JSON.parse(xhr.response);
                        resolve(responseObject.data.link);
                    }
                };
                xhr.onerror = function () {
                    reject(new Error('API error'));
                };
                xhr.send(file);
            } catch (err) {
                reject(err);
            }
        });
    }
}
