"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(status) {
    switch (status.status) {
        case "DRAFT":
            return `Draft created by ${status.createdBy} on ${status.createdAt}`;
        case "PUBLISHED":
            return `Published on ${status.publishedAt} with syllabus: ${status.syllabus}`;
        case "ACTIVE":
            return `Active starting ${status.startDate} with ${status.enrolledCount} students enrolled`;
        case "ARCHIVED":
            return `Archived on ${status.archivedAt} with final enrollment count: ${status.finalEnrollmentCount}`;
        case "CANCELLED":
            return `Cancelled on ${status.cancelledAt} for reason: ${status.reason}`;
    }
}
