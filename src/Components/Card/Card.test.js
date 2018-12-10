import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  it('should match the snapshot if props includes "species"', () => {
    const card = {species: 'Human'}
    const wrapper = shallow(<Card card={card} />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if props includes "model"', () => {
    const card = {model: 'x-wing'}
    const wrapper = shallow(<Card card={card} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if props includes "terrain"', () => {
    const card = {terrain: 'mountainous', residents: []}
    const wrapper = shallow(<Card card={card} />);
    expect(wrapper).toMatchSnapshot();
  })
})