import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import AuthService from './../services/AuthService';
import axios from "axios";
import { API_URL } from "../http";

export default class authStore {
    user = {};
    isAuth = false;
    isLoaging = false;
    error = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            isAuth: observable,
            isLoaging: observable,
            error: observable,
            setAuth: action.bound,
            setUser: action.bound,
            setError: action.bound,
            checkAuth: action.bound,
            login: action.bound,
            registration: action.bound,
            logout: action.bound
        });
    }

    setAuth = (bool) => {
        this.isAuth = bool;
    }

    setUser = (user) => {
        this.user = user;
    }

    setError = (error) => {
        this.error = error;
    }

    async checkAuth(token) {
        try {
            const res = await axios.post(`${API_URL}/auth/refresh`, { token }, {
                withCredentials: true, headers: {
                    'Content-Type': 'application/json',
                },
            })
            this.setAuth(true)
            this.setUser(res.data)
            this.setError(null)
        } catch (e) {
            console.log(e)
            console.log(e.response?.data?.message)
        }
    }

    async login(login, password) {
        this.isLoaging = true;
        try {
            const res = await AuthService.login(login, password);
            console.log(this)
            localStorage.setItem('token', res.data.token);
            this.setAuth(true);
            this.setUser(res.data.user)
            this.setError(null)
        } catch (e) {
            console.log(e.response?.data?.message)
            if (e.response.status === 400 || e.response.status === 401) {
                this.setError(e)
            }
        } finally {
            this.isLoaging = false;
        }
    }

    async registration(login, password) {
        this.isLoaging = true;
        try {
            const res = await AuthService.registration(login, password);
            localStorage.setItem('token', res.data.token);
            this.setAuth(true);
            this.setUser(res.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.isLoaging = false;
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}