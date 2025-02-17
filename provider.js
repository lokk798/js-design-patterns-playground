/**
 * A simple example of provider design pattern in js. 
 */


class EmailService{
    send(to, message){
        console.log(`Sending email to ${to}: ${message}`);
    }
}

class SmsService{
    send(to ,message){
        console.log(`Sending SMS to ${to}: ${message}`);
    }
}


class NotificationServiceProvider{
    constructor(service){
        this.service = service
    }

    sendNotification(to, message){
        this.service.send(to, message)
    }
}

const emailService = new EmailService()
const smsService = new SmsService()

const emailProvider = new NotificationServiceProvider(emailService)
const smsProvider = new NotificationServiceProvider(smsService)

// Send notifications using the provider
emailProvider.sendNotification('user@example.com', 'Email message');
smsProvider.sendNotification('user@example.com', 'SMS message');