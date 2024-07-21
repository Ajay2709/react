import Link from './Link';

function Sidebar(){
    const links = [
        {label: "Dropdown", path: '/dropdown'},
        {label: "Accordion", path: '/accordion'},
        {label: "Buttons", path: '/buttons'},
        {label: "Modals", path: '/modals'},
        {label: "Tables", path: '/tables'},
        {label: "Counter", path: '/counter'}
    ];
    const renderedLinks = links.map((link) => {
        return <Link key={link.label} text={link.label} to={link.path} className='mb-3' activeClassName='font-bold border-l-4 pl-2'/>
    })
    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col'>
            {renderedLinks}
        </div> )
}

export default Sidebar;