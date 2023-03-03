const isDev = process.env.NODE_ENV === "development";

const api = {
    dev: "http://127.0.0.1:8888",
    pro: "http://124.71.186.187:8082",
};

export default {
    title: "volunteer",
    baseURL: isDev ? api.dev : api.pro,
};
