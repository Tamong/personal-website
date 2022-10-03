// pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'projects-route',
        title: 'Projects',
        path: '/projects',
        enabled: true,
        component: Projects
    },
    {
        key: 'contact-route',
        title: 'Contact',
        path: '/contact',
        enabled: true,
        component: Contact
    }
]