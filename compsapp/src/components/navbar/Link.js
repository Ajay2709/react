
import classNames from 'classnames';
import useNavContext from '../../hooks/NavContextHook.js';

function Link({ to, text, className, activeClassName }){

    const { navigate, currentPath } = useNavContext();

    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);
    
    const handleClick = (event) => {
        
        //To support "Command + click" action
        if(event.metaKey || event.ctrlKey){ 
            return;
        }
        event.preventDefault();
        navigate(to);    
    }

    return <a className={classes} href={to} onClick={handleClick}>{text}</a>
}

export default Link;