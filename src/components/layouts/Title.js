import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, des }) => (
  <div className="flex flex-col gap-4 font-titleFont mb-14">
    <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
      {title}
    </h3>
    <p className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</p>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default Title;
