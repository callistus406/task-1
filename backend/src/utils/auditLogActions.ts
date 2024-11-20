import AuditLogsModel from '../db/models/auditLogs.model';

export async function logNotificationAction(notificationDetails: string, notificationAction: string,userId: string) {
    try {
     
      const logEntry = new AuditLogsModel({
        user_id: userId,
        action: notificationAction,
        details: notificationDetails,
      });
  
      await logEntry.save();
      console.log("Notification action logged successfully");
    } catch (error) {
      console.error("Error logging notification action:", error);
    }
  };
  