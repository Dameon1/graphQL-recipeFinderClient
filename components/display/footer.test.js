
import React from 'react';
import {shallow, mount} from 'enzyme';

import  Footer  from './Footer';

describe('<Footer />', () => {
       
     it('Renders without crashing', () => {
         shallow(<Footer />);
     });
});