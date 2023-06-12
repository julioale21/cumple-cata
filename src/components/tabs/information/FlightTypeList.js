
import React from 'react';
import { Option } from './Option';
import { Stack } from '@chakra-ui/react';

const FlightTypeList = ({ ...rest }) => {
    return (
        <Stack paddingLeft={3} flexDirection="row" { ...rest } >
            <Option value="One Way" selected />
            <Option value="Round Trip" />
        </Stack>
    )
}

export  { FlightTypeList }
