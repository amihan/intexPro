
import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from 'mobx';
import $api from '../http';



export default class childrenStore {

    courses = [];
    lessons = [];

    isLoading = true;
    isLoadingLessons = true;


    constructor() {
        makeObservable(this, {
            courses: observable,
            lessons: observable,
            isLoading: observable,
            isLoadingLessons: observable,
            setCourse: action,
            getCourses: action,
            getLessons: action,
            setLessons: action,
        });
    }

    setCourse(course) {
        this.courses.push(course)
    }

    setLessons(lessons) {
        this.lessons.push(lessons)
    }

    async getCourses() {
        this.isLoading = true;
        try {
            const res = await $api.get('/lessons/4')
            runInAction(() => {
                this.courses = []
                res.data.forEach(course => this.setCourse(course));
                console.log(toJS(this.courses))
            });
        } catch (e) {
            console.log(e)
        } finally {
            this.isLoading = false;
        }
    }


    async getLessons(idgroup, iduser = 12) {
        this.isLoadingLessons = true;
        try {
            const res = await $api.get(`/lessons/lesson/${iduser}/${idgroup}`)
            runInAction(() => {
                this.lessons = []
                res.data.forEach(lesson => this.setLessons(lesson));
                console.log('lessons', toJS(this.lessons))
            });
        } catch (e) {
            console.log(e)
        } finally {
            this.isLoadingLessons = false;
        }
    }
}