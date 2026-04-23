import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export type WorkflowStep = {
    id: string;
    content: { text: string };
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
    fill: { color: string };
};

export type WorkflowConnection = {
    from: string;
    to: string;
};

export type WorkflowData = {
    steps: WorkflowStep[];
    connections: WorkflowConnection[];
};

const workflowData: WorkflowData = {
    steps: [
        {
            id: 'start',
            content: { text: 'Submit Request' },
            x: 50,
            y: 150,
            width: 110,
            height: 60,
            type: 'circle',
            fill: { color: '#4caf50' }
        },
        {
            id: 'review',
            content: { text: 'Initial Review' },
            x: 200,
            y: 150,
            width: 110,
            height: 60,
            type: 'rectangle',
            fill: { color: '#2196f3' }
        },
        {
            id: 'technical',
            content: { text: 'Technical Check' },
            x: 350,
            y: 80,
            width: 110,
            height: 60,
            type: 'rectangle',
            fill: { color: '#ff9800' }
        },
        {
            id: 'financial',
            content: { text: 'Financial Review' },
            x: 350,
            y: 220,
            width: 110,
            height: 60,
            type: 'rectangle',
            fill: { color: '#ff9800' }
        },
        {
            id: 'decision',
            content: { text: 'Final Decision' },
            x: 500,
            y: 150,
            width: 110,
            height: 60,
            type: 'circle',
            fill: { color: '#9c27b0' }
        },
        {
            id: 'approved',
            content: { text: 'Approved' },
            x: 650,
            y: 100,
            width: 100,
            height: 60,
            type: 'rectangle',
            fill: { color: '#4caf50' }
        },
        {
            id: 'rejected',
            content: { text: 'Rejected' },
            x: 650,
            y: 200,
            width: 100,
            height: 60,
            type: 'rectangle',
            fill: { color: '#f44336' }
        },
        {
            id: 'notify',
            content: { text: 'Notify' },
            x: 800,
            y: 150,
            width: 90,
            height: 60,
            type: 'rectangle',
            fill: { color: '#00bcd4' }
        }
    ],
    connections: [
        { from: 'start', to: 'review' },
        { from: 'review', to: 'technical' },
        { from: 'review', to: 'financial' },
        { from: 'technical', to: 'decision' },
        { from: 'financial', to: 'decision' },
        { from: 'decision', to: 'approved' },
        { from: 'decision', to: 'rejected' },
        { from: 'approved', to: 'notify' },
        { from: 'rejected', to: 'notify' }
    ]
};

export class WorkflowService {
    public getWorkflow(): Observable<WorkflowData> {
        return of(workflowData).pipe(delay(1500));
    }
}
