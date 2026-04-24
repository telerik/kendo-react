import * as React from 'react';

export interface LogEntry {
    action: string;
    details: string;
    time: string;
}

interface ActionLoggerProps {
    logs: LogEntry[];
    emptyMessage?: string;
}

export const ActionLogger: React.FC<ActionLoggerProps> = ({ logs, emptyMessage = 'No actions logged yet...' }) => {
    return (
        <div
            style={{
                flex: 1,
                minWidth: '280px',
                padding: '16px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                alignSelf: 'flex-start',
                maxHeight: '600px',
                overflow: 'auto',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
        >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>Action Log</h3>
            {logs.length === 0 ? (
                <div style={{ fontStyle: 'italic', color: '#666', padding: '8px' }}>{emptyMessage}</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {logs.map((log, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '12px',
                                backgroundColor: 'white',
                                borderRadius: '6px',
                                borderLeft: '3px solid #ff6358',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '12px',
                                    color: '#ff6358',
                                    fontWeight: 600,
                                    marginBottom: '4px'
                                }}
                            >
                                {log.action}
                            </div>
                            <div
                                style={{
                                    fontSize: '13px',
                                    color: '#333',
                                    wordBreak: 'break-word',
                                    marginBottom: '4px'
                                }}
                            >
                                {log.details}
                            </div>
                            <div style={{ fontSize: '11px', color: '#999' }}>{log.time}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
