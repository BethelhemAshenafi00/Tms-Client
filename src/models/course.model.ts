import { Temporal } from "@js-temporal/polyfill";
export interface Course{
    readonly id: string;
    title: string;
    capacity: number;
    startDate?: Temporal.PlainDate; 
}

// Ex5 Part B
export type CourseStatus =
| { status: "DRAFT"; createdBy: string; createdAt: Temporal.Instant }
| { status: "PUBLISHED"; publishedAt: Temporal.Instant; syllabus: string}
| {
    status: "ACTIVE";
    enrolledCount: number;
    startDate: Temporal.PlainDate;
}
| {
    status: "ARCHIVED";
    archivedAt: Temporal.Instant;
    finalEnrollmentCount: number;
}
| {
    status: "CANCELLED";
    reason: string; cancelledAt: Temporal.Instant;
}
export function describeCourse(status: CourseStatus): string {
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