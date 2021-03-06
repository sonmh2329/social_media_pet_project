import axios from "axios";


export default {
    auth:localStorage.getItem("token"),
    serverUrl: "https://socialmediaapp2329.herokuapp.com",
    sendRequest(method="get", url, body) {
        let config = {
            method,
            url,
            headers: {
                // 'Authorization':localStorage.getItem("token")
                'Authorization':this.auth,
            }
            
        };
        if(method?.toLowerCase() !=="get") {
            config.data = {...body};
        }
        return axios(config);
    }
}

String.prototype.cloudinaryDownloadFormat = function() {
    return this.replace("/upload", "/upload/fl_attachment/")
}