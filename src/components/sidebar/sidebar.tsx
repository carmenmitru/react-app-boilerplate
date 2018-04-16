import * as React from 'react';

class Sidebar extends React.Component{
    public render(){
            return(
                <nav className="sidebar bg-dark">
 
                    <ul className="list-unstyled">
                        <li><a href="#"><i className="fa fa-fw fa-link"/> Lesson1</a></li>
                        <li><a href="#"><i className="fa fa-fw fa-link"/> Lesson1</a></li>
                    </ul>
                </nav>
        
            )
    }
}
export default Sidebar;