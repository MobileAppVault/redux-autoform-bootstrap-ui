import { EditComponentFactory, DetailsComponentFactory } from '../src/index';
import { expect } from 'chai';

describe("Factory creation", () => {
    it("User requests an edit factory", (done) => {

        let correctConfig = {
            'string': 'TextBox',
            'array': 'ArrayContainer',
            'datetime': 'DateTimePicker',
            'time': 'DateTimePicker',
            'date': 'DateTimePicker',
            'int' : 'TextBox',
            'float': 'TextBox',
            'bool': 'Checkbox',
            'group': 'FieldGroup'
        };

        expect(EditComponentFactory.defaultFieldComponents).to.be.deep.equal(correctConfig);
        done()
    });

    it("User requests a details factory", (done) => {
        let correctConfig = {
            'string': 'Static',
            'array': 'ArrayContainer',
            'datetime': 'Static',
            'time': 'Static',
            'date': 'Static',
            'int': 'Static',
            'float': 'Static',
            'bool': 'Static',
            'group': 'FieldGroup'
        };

        expect(DetailsComponentFactory.defaultFieldComponents).to.be.deep.equal(correctConfig);
        done()
    })
});