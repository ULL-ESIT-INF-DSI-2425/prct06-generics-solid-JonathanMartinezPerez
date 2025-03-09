import { describe, it, expect, vi } from 'vitest';
import { EmailService, Notifier, ShortMessageService } from '../src/ejercicio-5';

describe('Notifier', () => {
  it('should send notification by email', () => {
    const emailService = new EmailService();
    const emailNotifier = new Notifier(emailService);
    const consoleSpy = vi.spyOn(console, 'log');

    emailNotifier.sendNotification('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Hello World!');
  });

  it('should send notification by SMS', () => {
    const smsService = new ShortMessageService();
    const smsNotifier = new Notifier(smsService);
    const consoleSpy = vi.spyOn(console, 'log');

    smsNotifier.sendNotification('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by SMS: Hello World!');
  });
});