import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getC02Intensity } from '../services/getIntensity';
import moment from 'moment';

interface IntensityType {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: string;
  };
}

// Fetch the current intensity (date/time now) and display it
// accordingly and provide recommendations for charging times based on carbon intensity.
export const IntensityCard: () => React.ReactElement = () => {
  const [currentIntensity, setCurrentIntensity] = useState<IntensityType>({
    from: '',
    to: '',
    intensity: {
      forecast: 0,
      actual: 0,
      index: '',
    },
  });

  useEffect(() => {
    const fetchIntensity = async () => {
      const data = await getC02Intensity();

      if (typeof data !== 'undefined') {
        setCurrentIntensity({
          from: data['from'],
          to: data['to'],
          intensity: {
            forecast: data['intensity']['forecast'],
            actual: data['intensity']['actual'],
            index: data['intensity']['index'],
          },
        });
      }
    };
    fetchIntensity();
  }, []);

  return (
    <StatGroup>
      <Stat>
        <StatLabel>Time Range</StatLabel>
        <StatNumber>
          {moment(currentIntensity.from).format('h:mm') +
            ' - ' +
            moment(currentIntensity.to).format('h:mm') +
            ' - ' +
            moment(currentIntensity.to).format('Do MMMM YYYY')}
        </StatNumber>
        {/* <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText> */}
      </Stat>

      <Stat>
        <StatLabel>Forecast</StatLabel>
        <StatNumber>{currentIntensity.intensity.forecast}</StatNumber>
        {/* <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText> */}
      </Stat>

      <Stat>
        <StatLabel>Actual</StatLabel>
        <StatNumber>{currentIntensity.intensity.actual}</StatNumber>
        {/* <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText> */}
      </Stat>

      <Stat>
        <StatLabel>Index</StatLabel>
        <StatNumber textAlign={'center'}>{currentIntensity.intensity.index}</StatNumber>
        {/* <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText> */}
      </Stat>
    </StatGroup>
  );
};
