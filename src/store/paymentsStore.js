
import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from 'mobx';
import $api from '../http';



export default class childrenStore {

    courses = []
    lessons = []

    isLoading = true
    isLoadingLessons = true
    activeCourse = null


    constructor() {
        makeObservable(this, {
            courses: observable,
            lessons: observable,
            isLoading: observable,
            isLoadingLessons: observable,
            activeCourse: observable,
            setCourse: action,
            getCourses: action,
            getLessons: action,
            setLessons: action,
            chahgeActiveCourse: action
        })
    }

    chahgeActiveCourse = (id) => {
        this.activeCourse = id
    }

    setCourse = (course) => {
        this.courses.push(course)
    }

    setLessons = (lessons) => {
        this.lessons.push(lessons)
    }

    getCourses = async (idChildren) => {
        this.isLoading = true;
        try {
            const res = await $api.get(`/lessons/${idChildren}`)
            runInAction(() => {
                this.courses = []
                res.data.forEach(course => this.setCourse(course));
            });
        } catch (e) {
            console.log(e)
        } finally {
            this.chahgeActiveCourse(this.courses[1][0].id)
            this.isLoading = false
        }
    }


    getLessons = async (iduser, idgroup) => {
        console.log('получение занятий', 'iduser', iduser, 'idgroup', idgroup)
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