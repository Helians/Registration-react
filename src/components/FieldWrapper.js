import React, { useState } from 'react';
import './FieldWrapper.css';

const FieldsWrapper = ({ label, isDropdown, isTextarea, name, callback }) => {
    const [session, setSession] = useState('');

    const handleInput = (e) => {
        if (name === 'session') {
            setSession(e.target.value);
        }
        callback(name, e.target.value);
    };

    return (
        <div className="fieldWrapper">
            <label className="fieldWrapper__label">{label}</label>
            {isDropdown ? (
                <select
                    defaultValue={session}
                    onChange={handleInput}
                    className="fieldWrapper__form__field">
                    <option value="">--select--</option>
                    <option value="algebra">Algebra</option>
                    <option value="vmaths">Vedic Maths</option>
                    <option value="geometry">Geometry</option>
                    <option value="calculus">Calculus</option>
                </select>
            ) : (
                    isTextarea ?
                        <textarea className="fieldWrapper__form__field fieldWrapper__form__field-textarea"></textarea> :
                        <input
                            onChange={handleInput}
                            className="fieldWrapper__form__field"
                        />
                )}
        </div>
    );
};

export default FieldsWrapper;
