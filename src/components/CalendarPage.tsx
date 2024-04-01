import React, {useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import styles from './CalendarPage.module.css'
import {GoogleEvent} from '../interfaces/Event.ts';
import {BookingFormData} from '../interfaces/BookingFormData.ts';

interface TimeBlock {
    start: Date;
    end: Date;
}

const CalendarPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTimeBlock, setSelectedTimeBlock] = useState<TimeBlock | null>(null);
    const [activityType, setActivityType] = useState('');
    const [price, setPrice] = useState('');
    const [googleEvents, setGoogleEvents] = useState<GoogleEvent[]>([]);
    const [formData, setFormData] = useState<BookingFormData>({
        activityType: '',
        details: '',
        images: [],
        urgency: 'Not Urgent', // Or another default urgency
        price: 0
    });

    const handleDateClick = (arg: FullCalendarApi.DateClickArg) => {
        setSelectedDate(arg.date);
        setSelectedTimeBlock(null); // Reset time block when a new date is selected
    };

    const handleTimeBlockSelect = (arg: FullCalendarApi.DateSelectArg) => {
        // Logic to snap selection to 4-hour blocks
        const roundedStart = roundTimeToNearestInterval(arg.start, 4 * 60 * 60 * 1000); // 4 hours in milliseconds
        const roundedEnd = new Date (roundedStart.getTime() + (4 * 60 * 60 * 1000));

        setSelectedTimeBlock({ start: roundedStart, end: roundedEnd });
    };

    // Helper function (You'll need to implement this)
    function roundTimeToNearestInterval(date: Date, interval: number) {
        // ... logic to round a Date object to the nearest 'interval'
    }

    // ... useEffect for fetching Google events (add your fetch logic)

    // ... Form field change handlers (implement according to your UI elements)

    return (
        <div className={styles.calendarContainer}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                dateClick={handleDateClick}
                select={handleTimeBlockSelect}
            />

            <div className={styles.bookingForm}>
                {/* Date Display (if selected) */}
                {selectedDate && (
                    <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
                )}

                {/* Time Block Display (if selected) */}
                {selectedTimeBlock && (
                    <p>
                        Selected Time: {selectedTimeBlock.start.toLocaleTimeString()} -{' '}
                        {selectedTimeBlock.end.toLocaleTimeString()}
                    </p>
                )}

                {/* Activity Dropdown, Price Input, etc. */}
            </div>
        </div>
    );
};

export default CalendarPage;
