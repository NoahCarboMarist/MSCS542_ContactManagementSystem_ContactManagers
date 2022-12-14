import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
const utils = require('../utils/utils.js');
// https://react-icons.github.io/react-icons/

export const SideNavData = [
    { id: utils.newID(),
      icon: <RiIcons.RiContactsBook2Fill />,
      title: "Contacts",
      path: '/contacts',
      toggleClass: 'active'
    },
    { id: utils.newID(),
      icon: <MdIcons.MdGroups />,
      title: "Groups",
      path: '/groups',
      toggleClass: ''
    },
    { id: utils.newID(),
      icon: <SiIcons.SiGooglemessages />,
      title: "Messages",
      path: '/messages',
      toggleClass: ''
    },
    { id: utils.newID(),
      icon: <MdIcons.MdEmail />,
      title: "Email History",
      path: '/emailHistory',
      toggleClass: ''
    },
    { id: utils.newID(),
      icon: <MdIcons.MdSpaceDashboard />,
      title: "Departments",
      path: '/Department',
      toggleClass: ''
    },
    { id: utils.newID(),
      icon: <MdIcons.MdAccountCircle />,
      title: "Profile",
      path: '/profile',
      toggleClass: ''
    },
    { id: utils.newID(),
      icon: <RiIcons.RiSettings3Fill />,
      title: "Settings",
      path: '/settings',
      toggleClass: ''
    },
    // { id: utils.newID(),
    //   icon: <RiIcons.RiUserStarFill />,
    //   title: "Employees",
    //   path: '/employees',
    //   toggleClass: ''
    // },
    // { id: utils.newID(),
    //   icon: <FaIcons.FaUserCheck />,
    //   title: "Users",
    //   path: '/users',
    //   toggleClass: ''
    // },
];
