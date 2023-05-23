import * as SMS from 'expo-sms';

export default function sendSMS(number, message) {
    const isAvailable = SMS.isAvailableAsync();
    if (isAvailable) {
        SMS.sendSMSAsync(number, message);
    }
}