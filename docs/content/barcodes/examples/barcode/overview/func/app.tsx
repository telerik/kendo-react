import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';
import './styles.css';

const foodImageUrl = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/barcodes/foods/72.jpg';

const App = () => (
    <div className="barcode-showcase">
        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Shipping Label</span>
                <div className="card-header-title">Express Delivery</div>
                <span className="card-detail">Priority Overnight</span>
            </div>
            <div className="card-body">
                <div className="card-info-grid">
                    <span className="card-info-label">From</span>
                    <span className="card-info-value">New York, NY</span>
                    <span className="card-info-label">To</span>
                    <span className="card-info-value">San Francisco, CA</span>
                    <span className="card-info-label">Weight</span>
                    <span className="card-info-value">2.4 kg</span>
                    <span className="card-info-label">Date</span>
                    <span className="card-info-value">Apr 28, 2026</span>
                </div>
                <Barcode type="Code128" value="1Z999AA10123456784" className="card-barcode" />
                <span className="card-body-hint">Tracking number</span>
            </div>
        </div>

        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Retail Product</span>
                <div className="card-header-title">Mozzarella di Bufala</div>
                <span className="card-detail">Fresh Italian Cheese &bull; 125g</span>
            </div>
            <div className="card-body">
                <div className="card-info-row">
                    <div className="card-info-grid">
                        <span className="card-info-label">Price</span>
                        <span className="card-info-value">$8.49</span>
                        <span className="card-info-label">Origin</span>
                        <span className="card-info-value">Campania, Italy</span>
                        <span className="card-info-label">Weight</span>
                        <span className="card-info-value">125g</span>
                        <span className="card-info-label">Category</span>
                        <span className="card-info-value">Dairy</span>
                    </div>
                    <div className="card-image">
                        <img src={foodImageUrl} alt="Mozzarella di Bufala" />
                    </div>
                </div>
                <Barcode type="EAN13" value="590123412345" className="card-barcode" />
                <span className="card-body-hint">Scan at checkout</span>
            </div>
        </div>

        <div className="scenario-card">
            <div className="card-header">
                <span className="card-header-label">Library Book</span>
                <div className="card-header-title">Design Patterns</div>
                <span className="card-detail">Gang of Four &bull; 1994</span>
            </div>
            <div className="card-body">
                <div className="card-info-grid">
                    <span className="card-info-label">Author</span>
                    <span className="card-info-value">Gamma et al.</span>
                    <span className="card-info-label">ISBN</span>
                    <span className="card-info-value">978-0201633610</span>
                    <span className="card-info-label">Due</span>
                    <span className="card-info-value">May 12, 2026</span>
                    <span className="card-info-label">Shelf</span>
                    <span className="card-info-value">CS-204</span>
                </div>
                <Barcode type="Code39" value="978020163" className="card-barcode" />
                <span className="card-body-hint">Return label</span>
            </div>
        </div>
    </div>
);

export default App;
