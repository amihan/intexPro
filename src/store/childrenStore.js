
import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from 'mobx';
import $api from '../http';



export default class childrenStore {
    сhildren = {
        fio: '',
        contract: null,
        dateBirth: null,
        datepay: null,
        parent: null
    }
    activeProfile = null;

    childrens = []
    isLoading = true;

    constructor() {
        makeObservable(this, {
            сhildren: observable,
            childrens: observable,
            isLoading: observable,
            activeProfile: observable,
            setProfile: action,
            getProfile: action,
            getOneProfile: action
        });
    }

    setProfile = (child) => {
        this.childrens.push(child)
    }


    chahgeActiveProfile = (id) => {
        this.activeProfile = id
        this.childrens.forEach(child => {
            if (id === child.id) {
                this.сhildren = child
            }
        })
    }


    async getProfile() {
        this.isLoading = true;
        try {
            const res = await $api.get('/users/profile')
            runInAction(() => {
                this.childrens = []
                res.data.forEach(child => this.setProfile(child));
            });
        } catch (e) {
            console.log(e)
        } finally {
            this.chahgeActiveProfile(this.childrens[0].id)
            this.isLoading = false;
        }
    }


    async getOneProfile(id) {
        this.isLoading = true;
        try {
            const res = await $api.get(`/users/profile/${id}`)
            runInAction(() => {
                this.сhildren = res.data
            });
            console.log('One Profile', toJS(this.сhildren))
        } catch (e) {
            console.log(e)
        } finally {
            this.isLoading = false;
        }
    }
}