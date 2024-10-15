'use client';
import React from "react";
import Link from 'next/link';
import { Card, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LabBookingsChart = () => {
    // Updated data for lab bookings
    const labBookingsSeries = [120, 80, 30]; // Example values for completed, pending, and canceled bookings
    const labBookingsOptions = {
        dataLabels: { enabled: false },
        labels: ['Completed', 'Pending', 'Canceled'],
        colors: ['#28a745', '#ffc107', '#dc3545'], // Green for completed, yellow for pending, red for canceled
        plotOptions: {
            radialBar: {
                startAngle: -168,
                endAngle: -450,
                hollow: {
                    size: '55%',
                },
                track: {
                    background: 'transparent',
                },
                dataLabels: {
                    show: false,
                }
            }
        },
        chart: { type: 'radialBar' },
        stroke: { lineCap: "round" },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300
                    }
                }
            },
            {
                breakpoint: 5000,
                options: {
                    chart: {
                        height: 320
                    }
                }
            }
        ]
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">View All Bookings</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Generate Report</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Card className="h-100">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="mb-0">Lab Bookings Report</h4>
                    </div>
                    <ActionMenu />
                </div>
                <div className="mb-8">
                    <Chart
                        options={labBookingsOptions}
                        series={labBookingsSeries}
                        type="radialBar"
                        width="100%"
                    />
                </div>
                {/* icon with content */}
                <div className="d-flex align-items-center justify-content-around">
                    <div className="text-center">
                        <i className="fe fe-check-circle text-success fs-3"></i>
                        <h1 className="mt-3 mb-1 fw-bold">{labBookingsSeries[0]}%</h1>
                        <p>Completed Bookings</p>
                    </div>
                    <div className="text-center">
                        <i className="fe fe-trending-up text-warning fs-3"></i>
                        <h1 className="mt-3 mb-1 fw-bold">{labBookingsSeries[1]}%</h1>
                        <p>Pending Bookings</p>
                    </div>
                    <div className="text-center">
                        <i className="fe fe-trending-down text-danger fs-3"></i>
                        <h1 className="mt-3 mb-1 fw-bold">{labBookingsSeries[2]}%</h1>
                        <p>Canceled Bookings</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default LabBookingsChart;
