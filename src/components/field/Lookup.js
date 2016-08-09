import React, { Component, PropTypes } from 'react';
import FormGroup from '../common/FormGroup';
import Select from 'react-select-plus';

class Lookup extends Component {
    fetchItems = () => {
        const { options } = this.props;
        
        return fetch(options.url)
            .then(response => response.json())
            .then(json => {
                return { options: json }
            });
    };

    render() {
        let { value, name, displayName, help, error, touched, onChange, onBlur, options, fieldLayout } = this.props;
        let formGroupProps = { error, touched, displayName, name, help, fieldLayout};
        let selectProps;

        if (!options.url && Array.isArray(options)) {
            selectProps = { options, value, name, onChange, onBlur: (event) => onBlur() };

            return (
                <FormGroup {...formGroupProps}>
                    <Select {...selectProps}/>
                </FormGroup>
            )

        } else if (options.url) {
            selectProps = { value, name, onChange, onBlur: (event) => onBlur(), valueKey: options.value? options.value : 'value', labelKey: options.label? options.label : 'label' };

            return (
                <FormGroup {...formGroupProps}>
                    <Select.Async {...selectProps} loadOptions={this.fetchItems}/>
                </FormGroup>
            )
        }

        return false;
    }
}

export default Lookup;