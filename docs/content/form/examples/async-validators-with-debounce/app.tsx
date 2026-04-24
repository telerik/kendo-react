import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';

type ServerErrors = { [name: string]: string };

// Simulates async validation on server
const validateUsername = async (username: string): Promise<string | null> => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!username) {
        return 'Username is required';
    }
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    if (username === 'admin' || username === 'test') {
        return 'Username already taken';
    }
    return null;
};

const UsernameInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [errors, setErrors] = React.useState<ServerErrors>({});
    const [validating, setValidating] = React.useState(false);
    const timeoutRef = React.useRef<number>(null);

    const handleChange = React.useCallback((fieldName: string, value: any) => {
        if (fieldName !== 'username') {
            return;
        }

        setValidating(true);

        // Clear previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Debounce validation
        timeoutRef.current = window.setTimeout(async () => {
            const error = await validateUsername(value);
            if (error) {
                setErrors({ username: error });
            } else {
                setErrors({});
            }
            setValidating(false);
        }, 500);
    }, []);

    const handleSubmit = (dataItem: any) => {
        alert(JSON.stringify(dataItem, null, 2));
    };

    // Cleanup timeout on unmount
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <Form
            onSubmit={handleSubmit}
            onChange={handleChange}
            errors={errors}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className="k-form-fieldset">
                        <legend className="k-form-legend">
                            Async Validators equivalent demo (debouncing included):
                        </legend>
                        <Field name={'username'} component={UsernameInput} label={'Username'} />
                        <div className="k-form-hint">Try: "admin" or "test" (taken), or enter &lt; 3 characters</div>
                    </fieldset>
                    <div className="k-form-buttons">
                        <Button themeColor={'primary'} disabled={!formRenderProps.allowSubmit || validating}>
                            {validating ? 'Validating...' : 'Submit'}
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
