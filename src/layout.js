import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'

export default function Layout() {
    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);
    const [activeMenu3, setActiveMenu3] = useState(false);
    const [activeMenu4, setActiveMenu4] = useState(false);

    return (
		<>
			<ul>
				<li className={activeMenu1 ? "active" : ""}>
					<Link to="/" onClick={(e) => setActiveMenu1(!activeMenu1)}>
						<h2 className="main-header">Home</h2>
					</Link>
				</li>
				<li className={activeMenu2 ? "active" : ""}>
					<Link to="/create" onClick={(e) => setActiveMenu2(!activeMenu2)}>
						<h2 className="main-header">Create</h2>
					</Link>
				</li>
				<li className={activeMenu3 ? "active" : ""}>
					<Link to="/read" onClick={(e) => setActiveMenu3(!activeMenu3)}>
						<h2 className="main-header">Read</h2>
					</Link>
				</li>
				<li className={activeMenu4 ? "active" : ""}>
					<Link to="/update" onClick={(e) => setActiveMenu4(!activeMenu4)}>
						<h2 className="main-header">Update</h2>
					</Link>
				</li>
			</ul>
			<Outlet />
		</>
	)
}