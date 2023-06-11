import React from 'react';

import { oswald } from '../../utils/fonts';

import { 
    Stack, 
    TabPanel, 
    Text
  } from '@chakra-ui/react';
import { useCountdown } from '@/hooks/useCountDown';

const CountDownItem = ({ value, itemName }) => {
  return (
    <Stack gap={0} flexDirection="column" alignItems="center" justifyContent="center">
      <Text margin={0} paddingY={0} color="white" fontSize="8xl">{value}</Text>
      <Text margin={0} color="gray.300" fontSize="sm">{itemName}</Text>
    </Stack>
  )
}

const CountDownTab = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return '';
  } else {
    return (
      <TabPanel className={oswald.className} height="100%">
          <Stack flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%">
              <Stack width="100%" justifyContent="center">
                  <Text fontWeight="extrabold" textAlign="center" color="gray.300" fontSize="4xl">Your Flight start in</Text>
              </Stack>
              <Stack width="85%" alignItems="center" marginTop={5} flexDirection="row" justifyContent="space-around">
                  <CountDownItem itemName="Days" value={days} />
                  <CountDownItem itemName="Hours" value={hours} />
                  <CountDownItem itemName="Minutes" value={minutes} />
                  <CountDownItem itemName="Seconds" value={seconds} />
              </Stack>
          </Stack>
      </TabPanel>
    );
  }
  
}

export default CountDownTab