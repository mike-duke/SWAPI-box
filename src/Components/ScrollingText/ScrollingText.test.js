import React from 'react';
import {shallow} from 'enzyme'; 
import ScrollingText from './ScrollingText';



describe('ScrollingText', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ScrollingText 
      episode={5} 
      title={'A New Hope'}
      crawl={'Luke is pretty cool'}
    />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if nothing is passed in', () => {
    const wrapper = shallow(<ScrollingText />);
    expect(wrapper).toMatchSnapshot();
  })
})