// 文章请求
import service from "../service";

type createArticle = {
    title: string;
    content: string
}
export const reqPubArticle = (data: createArticle) => {
    return service({ url: "/article", method: "POST", data })
}


export const reqGetArticleList = (page: number, size: number) => {
    return service({
        url: `/article?page=${page}&size=${size}`, method: "GET",
    })
}

export const reqGetArticleById = (id: any) => {
    return service({
        url: `/article/${id}`,
        method: "GET"
    })
}