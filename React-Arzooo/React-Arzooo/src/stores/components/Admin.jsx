import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faBars, faBell, faCaretRight, faLocationDot, faMessage, faPhone, faSearch, faShoppingBag, faSmile, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import "../../../src/App.css"
import Anav from './Anav';

const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

function Admin() {
    return (
        <div>
            <Anav />
            <section className="sidebar">
                <a href="#" className="brand">
                    <img src="/logo.png" alt="Arzooo" />
                </a>
                <ul className="side-menu top">
                    <li className="active">
                        <Link to="#">
                            <FontAwesomeIcon icon={faSmile} className='fa' />
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon icon={faShoppingBag} className='fa' />
                            <span className="text">My Store</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon icon={faMessage} className='fa' />
                            <span className="text">Add Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon icon={faUsers} className='fa' />
                            <span className="text">Users</span>
                      </Link>
                    </li>
                    <li>
                       <Link to="#" className='logout'>
                            <FontAwesomeIcon icon={faArrowCircleLeft} className='fa' />
                            <span className="text">Logout</span>
                     </Link>
                    </li>
                </ul>
            </section>
        </div>


    )
}
export default Admin;