import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Option } from './Option';

const FlightClassList = ({ ...rest }) => {
    return (
        <Stack paddingLeft={5} flexDirection="row" { ...rest }>
            <Option value="Economy" />
            <Option value="Business" />
            <Option value="First Class" selected />
        </Stack>
    )
}

export { FlightClassList }