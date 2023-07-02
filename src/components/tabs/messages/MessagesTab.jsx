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
import { MessageService } from '@/services/messageService';

import { oswald } from '../../../utils/fonts';

import toast, { Toaster } from 'react-hot-toast';
import Lottie from 'lottie-react';

import MessageAnimation from '../../../animations/messages.json';

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
        <TabPanel className={oswald.className} height="100%">
            <Stack flexDirection="column" width={['100%',500]} margin="0 auto">
                <Stack gap={0} marginTop={4}  width="100%" alignItems="center" justifyContent="center">
                    <Text color="gray.300" fontSize="2xl">If you want to leave me a message. </Text>
                    <Text color="gray.300" fontSize="x-small">{`(Si deseas dejarme un mensaje)`}</Text>
                </Stack>
                <Stack width="100%" justifyContent="center" alignItems="center">
                    <Stack width="60px">
                        <Lottie animationData={MessageAnimation} />
                    </Stack>
                </Stack>
                <Formik 
                    initialValues={{ name: '', message: '' }}
                    onSubmit={async(values, actions) => {

                        const response = await MessageService.createMessage({
                            name: values.name,
                            message: values.message
                        });

                        actions.resetForm();
                        
                        if (response.status === 200 ) {
                            toast.success('🥰 Thanks for sharing your message. (Gracias por compartir tu mensaje) 🥰', {
                                icon:'👏'
                            });
                        }
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field  name='name' validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl  isInvalid={form.errors.name && form.touched.name}>
                                        <Input bgGradient="linear(to-l, blue.600, blue.800)" color="white" {...field} placeholder='Enter your name' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Stack height={5}></Stack>
                            <Field name='message' validate={validateMessage}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.message && form.touched.message}>
                                        <Textarea bgGradient="linear(to-l, blue.600, blue.800)" color="white" {...field} placeholder='Enter your message' />
                                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                backgroundColor="gray.800"
                                color="white"
                                isLoading={props.isSubmitting}
                                type='submit'
                                isDisabled={props.dirty === false || !props.isValid }
                            >
                                Send
                            </Button>
                            <Toaster position="bottom-center" />
                        </Form>
                    )}

                </Formik>
            </Stack>
        </TabPanel>
    )
}

export  { MessagesTab }