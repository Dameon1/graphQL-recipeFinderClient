
import React from 'react';
import {shallow, mount} from 'enzyme';

import { Container } from './Container';

describe('<Container />', () => {
       
     it('Renders without crashing', () => {
         shallow(<Container />);
     });
});
