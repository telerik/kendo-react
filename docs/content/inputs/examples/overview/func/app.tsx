import * as React from 'react';
import {
    TextBox,
    TextArea,
    MaskedTextBox,
    NumericTextBox,
    Slider,
    SliderChangeEvent,
    SliderLabel,
    Rating,
    RatingChangeEvent,
    Switch,
    SwitchChangeEvent,
    Checkbox,
    CheckboxChangeEvent,
    RadioGroup,
    FlatColorPicker,
    FlatColorPickerChangeEvent
} from '@progress/kendo-react-inputs';
import { Label, Hint } from '@progress/kendo-react-labels';
import { Dialog } from '@progress/kendo-react-dialogs';
import './styles.css';

interface PaymentDetails {
    cardNumber: string;
    cardholderName: string;
    expiryMonth: number;
    expiryYear: number;
    cvv: number | null;
    paymentMethod: string;
    installments: number;
    termsAccepted: boolean;
    billingAddress: string;
    satisfactionRating: number;
    includeGiftCard: boolean;
    giftCardColor: string;
}

const defaultPayment: PaymentDetails = {
    cardNumber: '',
    cardholderName: '',
    expiryMonth: 1,
    expiryYear: 2026,
    cvv: null,
    paymentMethod: 'credit',
    installments: 1,
    termsAccepted: false,
    billingAddress: '',
    satisfactionRating: 4,
    includeGiftCard: true,
    giftCardColor: '#6366F1'
};

const paymentMethods = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'debit', label: 'Debit Card' },
    { value: 'bank', label: 'Bank Transfer' }
];

function getGiftCardForeground(color: string): string {
    let r = 0,
        g = 0,
        b = 0;
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');
        const full =
            hex.length === 3
                ? hex
                      .split('')
                      .map((c) => c + c)
                      .join('')
                : hex;
        r = parseInt(full.substring(0, 2), 16);
        g = parseInt(full.substring(2, 4), 16);
        b = parseInt(full.substring(4, 6), 16);
    } else {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
            r = parseInt(match[1], 10);
            g = parseInt(match[2], 10);
            b = parseInt(match[3], 10);
        }
    }
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5 ? '#000000' : '#ffffff';
}

const App = () => {
    const [payment, setPayment] = React.useState<PaymentDetails>(defaultPayment);
    const [statusMessage, setStatusMessage] = React.useState('');
    const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
    const [pendingColor, setPendingColor] = React.useState('#6366F1');

    const update = <K extends keyof PaymentDetails>(field: K, value: PaymentDetails[K]) =>
        setPayment((prev) => ({ ...prev, [field]: value }));

    const cardPreviewDisplay = React.useMemo(() => {
        const raw = payment.cardNumber.replace(/[\s_]/g, '');
        if (!raw) return '**** **** **** ****';
        const padded = raw.padEnd(16, '*');
        return `${padded.slice(0, 4)} ${padded.slice(4, 8)} ${padded.slice(8, 12)} ${padded.slice(12, 16)}`;
    }, [payment.cardNumber]);

    const expiryDisplay = `${String(payment.expiryMonth).padStart(2, '0')}/${payment.expiryYear}`;
    const cvvDisplay = payment.cvv !== null && payment.cvv !== undefined ? String(payment.cvv).padStart(3, '0') : '***';
    const subtotal = `$${(payment.includeGiftCard ? 299.99 : 249.99).toFixed(2)}`;
    const orderTotal = `$${(payment.includeGiftCard ? 369.99 : 269.99).toFixed(2)}`;

    const openColorPicker = () => {
        setPendingColor(payment.giftCardColor);
        setColorPickerOpen(true);
    };

    return (
        <div className="demo-container">
            <h2 className="form-title">Payment Details</h2>

            <div className="form-layout">
                {/* Card Information */}
                <div className="card-section">
                    <h3 className="section-title">Card Information</h3>

                    <div className="form-field">
                        <Label editorId="cardNumber">Card Number</Label>
                        <MaskedTextBox
                            id="cardNumber"
                            mask="0000 0000 0000 0000"
                            value={payment.cardNumber}
                            onChange={(e) => update('cardNumber', e.value)}
                        />
                        <Hint>Enter your 16-digit card number</Hint>
                    </div>

                    <div className="form-field">
                        <Label editorId="cardholderName">Cardholder Name</Label>
                        <TextBox
                            id="cardholderName"
                            value={payment.cardholderName}
                            placeholder="John Doe"
                            clearButton={true}
                            onChange={(e) => update('cardholderName', e.target.value as string)}
                        />
                    </div>

                    <div className="expiry-group">
                        <Label>Expiration Date</Label>
                        <div className="expiry-cvv-row">
                            <div className="form-field">
                                <Label editorId="expiryMonth">MM</Label>
                                <NumericTextBox
                                    id="expiryMonth"
                                    value={payment.expiryMonth}
                                    min={1}
                                    max={12}
                                    format="00"
                                    placeholder="MM"
                                    onChange={(e) => update('expiryMonth', e.value ?? 1)}
                                />
                            </div>
                            <div className="form-field">
                                <Label editorId="expiryYear">YYYY</Label>
                                <NumericTextBox
                                    id="expiryYear"
                                    value={payment.expiryYear}
                                    min={2026}
                                    max={2036}
                                    format="0000"
                                    placeholder="YYYY"
                                    onChange={(e) => update('expiryYear', e.value ?? 2026)}
                                />
                            </div>
                            <div className="form-field">
                                <Label editorId="cvv">CVV</Label>
                                <NumericTextBox
                                    id="cvv"
                                    value={payment.cvv}
                                    min={0}
                                    max={999}
                                    format="000"
                                    placeholder="123"
                                    spinners={false}
                                    onChange={(e) => update('cvv', e.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-field">
                        <Label editorId="billingAddress">Billing Address</Label>
                        <TextArea
                            id="billingAddress"
                            value={payment.billingAddress}
                            placeholder="123 Main St, City, State, ZIP"
                            rows={3}
                            onChange={(e) => update('billingAddress', e.value)}
                        />
                    </div>

                    <div className="card-preview">
                        <div className="card-preview-chip" />
                        <span className="card-preview-number">{cardPreviewDisplay}</span>
                        <div className="card-preview-bottom">
                            <span className="card-preview-name">{payment.cardholderName || 'YOUR NAME'}</span>
                            <span className="card-preview-meta">
                                <span className="card-preview-expiry">EXP {expiryDisplay}</span>
                                <span className="card-preview-cvv">CVV {cvvDisplay}</span>
                            </span>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h4 className="summary-title">Order Summary</h4>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>{subtotal}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>$20.00</span>
                        </div>
                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>{orderTotal}</span>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="options-section">
                    <h3 className="section-title">Payment Options</h3>

                    <div className="form-field">
                        <Label>Payment Method</Label>
                        <RadioGroup
                            data={paymentMethods}
                            value={payment.paymentMethod}
                            onChange={(e) => update('paymentMethod', e.value)}
                        />
                    </div>

                    <hr className="form-separator" />

                    <div className="form-field">
                        <Label>
                            {`Installment Plan — ${payment.installments} ${
                                payment.installments === 1 ? 'month' : 'months'
                            }`}
                        </Label>
                        <Slider
                            min={1}
                            max={12}
                            step={1}
                            value={payment.installments}
                            onChange={(e: SliderChangeEvent) => update('installments', e.value)}
                            style={{ width: '100%' }}
                        >
                            {[1, 4, 7, 10, 12].map((v) => (
                                <SliderLabel key={v} position={v}>
                                    {String(v)}
                                </SliderLabel>
                            ))}
                        </Slider>
                    </div>

                    <hr className="form-separator" />

                    <div className="toggle-row">
                        <span className="toggle-item">
                            <Checkbox
                                id="terms"
                                checked={payment.termsAccepted}
                                label="I accept the terms and conditions"
                                onChange={(e: CheckboxChangeEvent) => update('termsAccepted', e.value)}
                            />
                        </span>
                        <span className="toggle-item">
                            <Switch
                                id="giftCardToggle"
                                checked={payment.includeGiftCard}
                                onChange={(e: SwitchChangeEvent) => update('includeGiftCard', e.value)}
                            />
                            <Label editorId="giftCardToggle">Add a physical gift card</Label>
                        </span>
                    </div>

                    {payment.includeGiftCard && (
                        <div className="gift-card-section">
                            <div className="gift-color-picker">
                                <span className="gift-color-label">Voucher Color</span>
                                <button
                                    className="color-swatch-trigger"
                                    type="button"
                                    style={{ background: payment.giftCardColor }}
                                    onClick={openColorPicker}
                                    aria-label="Choose voucher color"
                                />
                            </div>
                            <div
                                className="gift-card-preview"
                                style={
                                    {
                                        background: payment.giftCardColor,
                                        '--gift-card-fg': getGiftCardForeground(payment.giftCardColor)
                                    } as React.CSSProperties
                                }
                            >
                                <div className="gift-card-preview-header">
                                    <span className="gift-card-label">Gift Voucher</span>
                                    <span className="gift-card-amount">$50.00</span>
                                </div>
                                <p className="gift-card-tagline">A little something special, just for you.</p>
                                <div className="gift-card-footer">
                                    <span className="gift-card-code">GIFT-2026</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {colorPickerOpen && (
                        <Dialog title="Voucher Color" onClose={() => setColorPickerOpen(false)} width={350}>
                            <FlatColorPicker
                                value={pendingColor}
                                views={['gradient']}
                                onPreviewChange={(e: FlatColorPickerChangeEvent) => {
                                    if (e.value) setPendingColor(e.value);
                                }}
                                onChange={(e: FlatColorPickerChangeEvent) => {
                                    update('giftCardColor', e.value ?? pendingColor);
                                    setColorPickerOpen(false);
                                }}
                            />
                        </Dialog>
                    )}

                    <hr className="form-separator" />

                    <div className="form-field">
                        <Label>How satisfied are you with the checkout experience?</Label>
                        <Rating
                            value={payment.satisfactionRating}
                            aria-label="Checkout satisfaction rating"
                            onChange={(e: RatingChangeEvent) => update('satisfactionRating', e.value)}
                        />
                    </div>

                    <div className="action-row">
                        <button
                            className="action-button action-button-primary"
                            type="button"
                            onClick={() =>
                                setStatusMessage(`Payment details saved for ${payment.cardholderName || 'your order'}.`)
                            }
                        >
                            Submit Payment
                        </button>
                        <button
                            className="action-button action-button-secondary"
                            type="button"
                            onClick={() => {
                                setPayment(defaultPayment);
                                setStatusMessage('Payment form reset.');
                            }}
                        >
                            Reset
                        </button>
                    </div>

                    {statusMessage && <div className="status-note">{statusMessage}</div>}
                </div>
            </div>
        </div>
    );
};

export default App;
