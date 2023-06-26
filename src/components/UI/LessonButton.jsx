import { Button } from "@material-ui/core";
import { useData } from "../../hooks/useData";
import { observer } from "mobx-react-lite";



const LessonButton = ({ course }) => {
    const { activeCourse, chahgeActiveCourse } = useData().storeLesson
    console.log(activeCourse)

    console.log(course)

    let isActive
    if (course.id === activeCourse) {
        isActive = true
    } else {
        isActive = false
    }

    return (
        <Button
            variant={isActive ? 'contained' : 'outlined'}
            color={isActive ? 'primary' : 'default'}
            onClick={() => chahgeActiveCourse(course.id)}
        >
            {course.namecourse}
        </Button>
    );
};



export default observer(LessonButton);



