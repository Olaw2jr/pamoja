import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Settings = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="m12 23-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 1 1 2.828-1.172A4.027 4.027 0 0 1 12 16zm0-6a2 2 0 1 0-.001 4A2 2 0 0 0 12 10z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default Settings;
