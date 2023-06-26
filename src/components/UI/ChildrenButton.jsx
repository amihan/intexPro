import { observer } from "mobx-react-lite";
import { useData } from "../../hooks/useData";
import { Button } from "@material-ui/core";

const ChildrenButton = ({ child }) => {
    const { activeProfile, chahgeActiveProfile } = useData().storeСhildren

    let isActive
    if (child.id === activeProfile) {
        isActive = true
    } else {
        isActive = false
    }

    return (
        <Button
            variant={isActive ? 'contained' : 'outlined'}
            color={isActive ? 'primary' : 'default'}
            onClick={() => chahgeActiveProfile(child.id)}
        >
            {child.fio}
        </Button>
    );
};



export default observer(ChildrenButton);