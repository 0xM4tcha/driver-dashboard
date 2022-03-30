import { faHome, faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export const MENU = [
    {
        id: 1,
        icon: faHome,
        label: 'Beranda',
        route: './'
    },
    {
        id: 2,
        icon: faUserCircle,
        label: 'Driver Management',
        route: './drivers'
    },
    {
        id: 3,
        icon: faCalendarAlt,
        label: 'Pickup',
        route: './pickup'
    }
]