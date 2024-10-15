export const ActiveLabsData = [
    {
        id: 1,
        labName: "Computer Lab 1",
        availability: true, // true for available, false for in use
        priority: "Medium",
        priorityBadgeBg: 'warning',
        capacity: 30, // Added capacity
        usageProgress: 15, // percentage of current usage
    },
    {
        id: 2,
        labName: "Network Lab",
        availability: false,
        priority: "High",
        priorityBadgeBg: 'danger',
        capacity: 25, // Added capacity
        usageProgress: 35,
    },
    {
        id: 3,
        labName: "Hardware Lab",
        availability: true,
        priority: "Low",
        priorityBadgeBg: 'info',
        capacity: 20, // Added capacity
        usageProgress: 75,
    },
    {
        id: 4,
        labName: "Multimedia Lab",
        availability: false,
        priority: "Medium",
        priorityBadgeBg: 'warning',
        capacity: 15, // Added capacity
        usageProgress: 63,
    },
    {
        id: 5,
        labName: "AI & ML Lab",
        availability: true,
        priority: "Track",
        priorityBadgeBg: 'success',
        capacity: 40, // Added capacity
        usageProgress: 100,
    },
    {
        id: 6,
        labName: "Web Development Lab",
        availability: false,
        priority: "Low",
        priorityBadgeBg: 'info',
        capacity: 35, // Added capacity
        usageProgress: 75,
    }
];

export default ActiveLabsData;
