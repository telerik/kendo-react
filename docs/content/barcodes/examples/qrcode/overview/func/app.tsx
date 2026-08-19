import * as React from 'react';
import { QRCode, QRCodeOverlay } from '@progress/kendo-react-barcodes';
import './styles.css';

const wifiOverlay: QRCodeOverlay = {
    type: 'image',
    imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/images/site/kendoka-cta.svg',
    width: 36,
    height: 36
};

const vcardValue = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Johnson;Sarah',
    'ORG:Progress',
    'TITLE:Senior Developer',
    'TEL:+1-555-0142',
    'EMAIL:s.johnson@example.com',
    'END:VCARD'
].join('\n');

const App = () => (
    <div className="qr-showcase">
        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Event Ticket</span>
                <div className="card-header-title">React Summit 2026</div>
                <span className="card-detail">Amsterdam, NL</span>
            </div>
            <div className="card-body">
                <div className="card-info-grid">
                    <span className="card-info-label">Date</span>
                    <span className="card-info-value">Sep 14, 2026</span>
                    <span className="card-info-label">Seat</span>
                    <span className="card-info-value">A-42</span>
                </div>
                <QRCode value="TICKET:RSM2026-A42-91827364" errorCorrection="M" size="140px" />
                <span className="card-body-hint">Scan at entrance</span>
            </div>
        </div>

        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Wi-Fi Access</span>
                <div className="card-header-title">Guest Network</div>
                <span className="card-detail">Conference Hall B</span>
            </div>
            <div className="card-body">
                <div className="card-info-grid">
                    <span className="card-info-label">SSID</span>
                    <span className="card-info-value">ReactSummit-Guest</span>
                    <span className="card-info-label">Password</span>
                    <span className="card-info-value">welcome2026</span>
                </div>
                <QRCode
                    value="WIFI:T:WPA;S:ReactSummit-Guest;P:welcome2026;;"
                    errorCorrection="Q"
                    overlay={wifiOverlay}
                    size="140px"
                />
                <span className="card-body-hint">Scan to connect</span>
            </div>
        </div>

        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Contact Card</span>
                <div className="card-header-title">Sarah Johnson</div>
                <span className="card-detail">Senior Developer at Progress</span>
            </div>
            <div className="card-body">
                <div className="card-info-grid">
                    <span className="card-info-label">Phone</span>
                    <span className="card-info-value">+1-555-0142</span>
                    <span className="card-info-label">Email</span>
                    <span className="card-info-value">s.johnson@example.com</span>
                </div>
                <QRCode value={vcardValue} errorCorrection="M" size="140px" />
                <span className="card-body-hint">Scan to add contact</span>
            </div>
        </div>
    </div>
);

export default App;
