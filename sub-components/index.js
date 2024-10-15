/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ActiveProjects from 'sub-components/dashboard/ActiveProjects';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import Teams from 'sub-components/dashboard/Teams';
import FaultReportTrends from 'sub-components/dashboard/FaultReportTrends';
import BookingStatus from './dashboard/BookingStatus';


// sub components for /pages/profile
import AboutMe from 'sub-components/profile/AboutMe';
import ProfileHeader from 'sub-components/profile/ProfileHeader';


// sub components for /pages/settings
import EmailSetting from 'sub-components/settings/EmailSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';
import Notifications from 'sub-components/settings/Notifications';
import Preferences from 'sub-components/settings/Preferences';



export {
   ActiveProjects,
   TasksPerformance,
   Teams,
   FaultReportTrends,
   BookingStatus,
   
   AboutMe,
   ProfileHeader,

   EmailSetting,  
   GeneralSetting, 
   Notifications, 
   Preferences
};
