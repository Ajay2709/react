import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import useThunk from "../hooks/ThunkUser";
import { deleteUser } from "../store";
import ExpandablePanel from "./ExpandedPanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({user}){ 
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

    const handleClick = () => {
        doDeleteUser(user);
    }
    const header = <>
        <Button loading={isLoading} onClick={handleClick} >
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting user...</div>}
        {user.name}
    </>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    )
    
}

export default UsersListItem;