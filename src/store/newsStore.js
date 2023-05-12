import { action, makeObservable, observable } from "mobx";
import $api from "../http";

export default class newsStore {
    news = []
    isLoaging = null
    constructor() {
        makeObservable(this, {
            news: observable,
            isLoaging: observable,
            getNews: action.bound,
        });
    }


    async getNews() {
        this.isLoaging = true
        try {
            const res = await $api.get('/news/');
            this.news = res.data
            console.log(this.news)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.isLoaging = false
        }

    }

}