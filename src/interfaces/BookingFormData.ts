export interface BookingFormData {
    activityType: string;
    details: string;
    images: File[];
    urgency: 'Not Urgent' | 'Important' | 'Critical' | 'Please take a day off from work';
    price: number;
}