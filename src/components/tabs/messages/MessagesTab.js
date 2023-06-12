import React from 'react';
import { 
    Button, 
    FormControl, 
    FormErrorMessage, 
    Input, 
    Stack, 
    TabPanel, 
    Textarea, 
    Text 
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

function validateName(value) {
    let error
    if (!value) {
      error = 'Please, enter your name'
    } 
    return error
}

function validateMessage(value) {
    let error
    if (!value ) {
      error = 'Please, enter your message'
    } else if (value.length < 10 ) {
        error = 'Enter more than 10 characters'
    }
    return error
}

const MessagesTab = () => {
    return (
        <TabPanel height="100%">
            <Stack flexDirection="column" width={500} margin="0 auto">
                <Stack gap={0} marginTop={4} marginBottom={10} width="100%" alignItems="center" justifyContent="center">
                    <Text color="gray.300" fontSize="2xl">If you want to leave me a message. </Text>
                    <Text color="gray.300" fontSize="x-small">{`(Si deseas dejarme un mensaje)`}</Text>
                </Stack>
                <Formik 
                    initialValues={{ name: '', message: '' }}
                    onSubmit={(values, actions) => {
                        console.log('values', {values});
                        console.log('actions', actions);
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 2000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input color="white" {...field} placeholder='Enter your name' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Stack height={5}></Stack>
                            <Field name='message' validate={validateMessage}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.message && form.touched.message}>
                                        <Textarea color="white" {...field} placeholder='Enter your message' />
                                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                colorScheme='gray'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Send
                            </Button>
                        </Form>
                    )}

                </Formik>
            </Stack>
        </TabPanel>
    )
}

export  { MessagesTab }