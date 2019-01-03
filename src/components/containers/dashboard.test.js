import React from 'react';
import { shallow } from 'enzyme';
import  { Dashboard }  from './Dashboard';

describe('<Content />', () => {
       
     it('Renders without crashing', () => {
        const configs = {
            default: true,
            label: 'My Label',
            element: 'myElement',
            apiRecipes:[12232,1221]
          }
        const dispatch = jest.fn();

        const props = {
          apiRecipes:configs.apiRecipes,
          dispatch,
        }
         shallow(<Dashboard {...props}/>);
     });
});
