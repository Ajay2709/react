import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Skeleton from "./SkeletonLoader";
import Button from "./Button";
import useThunk from "../hooks/ThunkUser";
import UsersListItem from "./UsersListItem";

function UsersList(){

    const [ doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
    const [doAddUser, isAddingUser, setAddingUserError] = useThunk(addUser);
    
    const dispatch = useDispatch();
    const { list } = useSelector((state) => {
        return state.users;
    });
    console.log(list);

    const handleUserAdd = () => {
        doAddUser();
    }

    useEffect(() => {
        doFetchUsers();
            //.finally(() => setIsLoadingUsers(false))
    }, [dispatch]);

    if(isLoadingUsers){
        return <Skeleton times={6} className="h-10 w-full" />;
    }
    if(loadingUsersError || setAddingUserError){
        return <div>Error occured...</div>
    }

    const renderedUsers = list.map((user) => {
        return <UsersListItem key={user.id} user={user}/>   
    })
    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl"> Users </h1>
                {
                    <Button loading={isAddingUser} onClick={handleUserAdd}>
                        + Add User
                    </Button>
                }
            </div>
            {renderedUsers}
        </div>
    )
}

export default UsersList;