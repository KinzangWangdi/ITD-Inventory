import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */



export const DashboardMenu = [
  {
    id: uuid(),
    title: 'Dashboard',
    icon: 'home',
    link: '/'
  },
  {
    id: uuid(),
    title: 'Assets',
    icon: 'box',
    link: '/pages/assets'
  },
  
  {
    id: uuid(),
    title: 'Labs',
    icon: 'youtube',
    link: '/pages/classes'
  },
  {
    id: uuid(),
    title: 'Users',
    icon: 'users',
    children: [
      { id: uuid(), link: '/pages/student', name: 'Student' },
      { id: uuid(), link: '/pages/staff', name: 'Staff' },
    ]
  },
  {
    id: uuid(),
    title: 'Reports',
    icon: 'activity',
    children: [
      { id: uuid(), link: '/pages/charts', name: 'Charts' },
      { id: uuid(), link: '/pages/bookings', name: 'Bookings' },
    ]
  },
  {
    id: uuid(),
    title: 'Pages',
    icon: 'layers',
    children: [
      { id: uuid(), link: '/pages/profile', name: 'Profile' },
      { id: uuid(), link: '/pages/settings', name: 'Settings' },
    ]
  },
  {
    id: uuid(),
    title: 'Authentication',
    icon: 'lock',
    children: [
      { id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
      { id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
      { id: uuid(), link: '/authentication/forget-password', name: 'Forget Password' }
    ]
  },
  // {
  //   id: uuid(),
  //   title: 'User Page',
  //   icon: 'lock',
  //   children: [
  //     { id: uuid(), link: '/Pages/downtime', name: 'DownTime' },
  //     { id: uuid(), link: '/Pages/labs', name: 'Labs' },
  //     { id: uuid(), link: '/Pages/logout', name: 'Log Out' },
  //     { id: uuid(), link: '/Pages/profile', name: 'Profile' },
  //     { id: uuid(), link: '/Pages/requests', name: 'Requests' },
  //     { id: uuid(), link: '/Pages/timetable', name: 'Time Table' },
  //   ]
  // },
  
  {
    id: uuid(),
    title: 'Documentation',
    grouptitle: true
  },
  {
    id: uuid(),
    title: 'Docs',
    icon: 'clipboard',
    link: '/documentation'
  },
  
  /*{
    id: uuid(),
    title: 'Download',
    icon: 'download',
    link: 'https://codescandy.gumroad.com/l/dashui-nextjs'
  }*/
    // {
    //   id: uuid(),
    //   title: 'Add Item',  // New route for AddItem page
    //   icon: 'plus-circle', // Optional, you can assign an icon
    //   link: '/pages/assets/addItem' // Link to AddItem page
    // },
];

export default DashboardMenu;

