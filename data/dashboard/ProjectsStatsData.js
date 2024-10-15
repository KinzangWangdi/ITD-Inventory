import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Available Assets  ",
       value : 120,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">20</span> Installed' 
    },
    {
        id:2,
        title : "Maintenance",
        value : 10,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">2</span> Completed' 
     },
     {
        id:3,
        title : "Total Users",
        value : 12,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Admin' 
     },
     {
        id:4,
        title : "Performance",
        value : '76%',
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     }
];
export default ProjectsStats;
