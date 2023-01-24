import React from 'react';
import cssClasses from './Input.css'

const Input = (props) => {
    let InputElement = null;
    let InputElementCssClasses = [cssClasses.InputElement];
    let errMsgElement = null;


    if (props.errMsg.length) {

        errMsgElement = <p className={cssClasses.ValidationError}>{props.errMsg}</p>;
    }
    if (props.invalid && props.shouldValidate && props.touched) {
        InputElementCssClasses.push(cssClasses.Invalid)
    }

    switch (props.inputtype) {
        case ('input'):
            InputElement = <input
                className={InputElementCssClasses.join(' ')}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('textArea'):
            InputElement = <textarea
                className={InputElementCssClasses.join(' ')}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('select'):
            InputElement = (<select
                className={InputElementCssClasses.join(' ')}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            >
                {props.config.options.map(option => <option value={option.value} key={option.value}>{option.displayValue}</option>
                )}

            </select>
            );
            break;
        default:
            InputElement = <input
                className={InputElementCssClasses.join(' ')}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />;
            break;
    }
    return (
        <div className={cssClasses.Input} >
            <label className={cssClasses.Label}>{props.config.name}</label>
            {InputElement}
            {errMsgElement}
        </div>
    )

}

export default Input;