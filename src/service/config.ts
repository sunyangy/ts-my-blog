const isDev = process.env.NODE_ENV === "development";

const api = {
    // dev: "http://10.11.16.139:8080/voluntary-api/",
    dev: "http://127.0.0.1:8888",
    pro: "http://124.71.186.187:9000",
};

export default {
    title: "volunteer",
    baseURL: isDev ? api.dev : api.pro,
    // timeout: 5000,
    // imgURL: "http://120.46.195.146:9000/zybk",
    // imgURL: "http://120.48.27.88:7003/zybk",
};
