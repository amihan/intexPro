import { action, makeObservable, observable } from "mobx";
import $api from "../http";

export default class newsStore {
    news = []
    isLoading = true

    constructor() {
        makeObservable(this, {
            news: observable,
            isLoading: observable,
            getNews: action.bound,
        });
    }


    getNews = async () => {
        this.isLoading = true
        try {
            const res = await $api.get('/news/');
            this.news = res.data
            console.log(this.news)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.isLoading = false
        }

    }

}