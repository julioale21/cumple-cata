import React from 'react';

import { oswald } from '../../../utils/fonts';

import { 
  Image,
    Stack, 
    TabPanel, 
    Text
  } from '@chakra-ui/react';
import { useCountdown } from '@/hooks/useCountDown';
import { CountDownItem } from './CountDownItem';
import { AnimatePresence, motion } from 'framer-motion';

const CountDownTab = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return '';
  } else {
    return (
      <TabPanel className={oswald.className} height="100%">
          <Stack position="relative" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%">
              <Stack position="absolute" width={["100", "60%"]} height="100%">
                <Image src='/distance.png'  />
              </Stack>
              <Stack width="100%" justifyContent="center">
                  <Text fontWeight="extrabold" textAlign="center" color="gray.300" fontSize={["3xl", "4xl"]}>Your Flight starts in</Text>
              </Stack>
                  <Stack width="85%" alignItems="center" marginTop={5} flexDirection="row" justifyContent="space-around">
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: "100", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <CountDownItem itemName="Days" value={days} />
                      </motion.div>
                      <motion.div
                        initial={{ y: "100", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                      >
                        <CountDownItem itemName="Hours" value={hours} />
                      </motion.div>
                      <motion.div
                        initial={{ y: "100", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                      >
                        <CountDownItem itemName="Minutes" value={minutes} />
                      </motion.div>
                      <motion.div
                        initial={{ y: "100", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2.5 }}
                      >
                        <CountDownItem itemName="Seconds" value={seconds} />
                      </motion.div>
                    </AnimatePresence>
                  </Stack>
          </Stack>
      </TabPanel>
    );
  }
  
}

export default CountDownTab