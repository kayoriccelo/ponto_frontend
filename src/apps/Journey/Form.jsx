import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import { InputText, InputTime, CheckboxCustom } from '../../components';
import { load, save, createInstance, setTitle } from './store/ducks';


export const Form = ({ id, instance, load, save, setTitle, history }) => {
    const [journey, setJourney] = useState(null);

    useEffect(() => {
        journey && setTitle(`Journey: ${journey.descricao}`);

        return () => setTitle(`Dashboard`);
    }, [journey, setTitle]);

    useEffect(() => {
        if (id === 'new' && journey === null) {
            setJourney(createInstance());
        } else if (id !== 'new') {
            journey === null && load(id).then(res => {
                journey !== instance && setJourney(instance);
            });
        };
    }, [journey, instance, id, load]);

    const handleChange = (event, name) => {
        setJourney({ ...journey, [name]: event.target.value });
        setTitle(`Journey: ${journey.descricao}`);
    };

    const handlerSubmit = () => save(journey, history);

    return (
        journey &&
        <Card>
            <CardContent>
                <InputText label="Code" value={journey.code} handleChange={(e) => handleChange(e, 'code')} />

                <InputText label="Description" value={journey.description} handleChange={(e) => handleChange(e, 'description')} />
                
                <InputTime label="Entry" fieldName="entry" value={journey.entry} handleChange={handleChange} />

                <InputTime label="Interval Output" fieldName="interval_output" value={journey.interval_output} handleChange={handleChange} />

                <InputTime label="Return Interval" fieldName="return_interval" value={journey.return_interval} handleChange={handleChange} />

                <InputTime label="Leave" fieldName="leave" value={journey.leave} handleChange={handleChange} />

                <CheckboxCustom label="Has Remunerated Rest" fieldName="has_remunerated_rest" value={journey.has_remunerated_rest} handleChange={handleChange} />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handlerSubmit}> Save </Button>
                <Button size="small" color="primary" onClick={() => history.push('/registration/journey')}> Cancel </Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = ({ journey }) => ({ instance: journey.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
