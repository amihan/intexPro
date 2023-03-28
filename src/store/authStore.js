import { makeAutoObservable } from "mobx";
import AuthService from './../services/AuthService';



export default class authStore {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }


    setAuth(bool) {
        this.isAuth = bool;
    }


    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const res = await AuthService.login(email, password);
            localStorage.setItem('token', res.data.token);
            this.setAuth(true);
            this.setUser(res.data.user)
        } catch (e) {
            console.log(e)
        }
    }


    async registration(email, password) {
        try {
            const res = await AuthService.registration(email, password);
            localStorage.setItem('token', res.data.token);
            this.setAuth(true);
            this.setUser(res.data.user)
        } catch (e) {
            console.log(e)
        }
    }


    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e)
        }
    }
}