import useNavContext from '../../hooks/NavContextHook';


function Route({path, children}){
    const {currentPath} = useNavContext();

    if(path === currentPath){
        return children;
    }

}

export default Route;