import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

import MetisMenu from 'react-metismenu';

import {LoginNav} from '../../AppNav/NavItems';

import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown, ButtonGroup
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faCalendarAlt,
    faAngleDown,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/nouser.png';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };

    }

    notify2 = (mensagem) => this.toastId = toast(mensagem, {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });


    render() {

        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                        {/* <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/> */}
                                    </DropdownToggle>

                                    <Link to="/login/logar"> <Button className="mb-2 mr-2 paddingLeft15pxUser" color="link">Login</Button> </Link>
                                    <Link to="/login/agenda"> <Button className="mb-2 mr-2 paddingLeft15pxUser" color="link">Agenda</Button> </Link>
                                    
                                    {/* <MetisMenu content={LoginNav} className="vertical-nav-menu paddingLeft15pxUser" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
                                   
                                </UncontrolledButtonDropdown>
                            </div>

                            {/* <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">
                                    Tem que vê
                                </div>
                                <div className="widget-subheading">
                                    Monstro da SATC
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserBox;