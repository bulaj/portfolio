import {combineReducers} from 'redux';
import Sections from '../containers/Sections/redux';

const personalDataObj = {
    name: 'some_name',
    surname: 'some_surname',
    occupation: 'Front end developer',
};

const initialState = {
    ...personalDataObj,
};

const personalData = (state = initialState, action) => {
    return state;
};

const application = combineReducers({
    personalData,
    Sections,
});

export default application;
