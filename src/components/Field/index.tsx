import React from 'react';
import styled from 'styled-components';
import {
  Field as FormikField,
  ErrorMessage,
  FieldProps as FormikFieldProps,
} from 'formik';
import { StyledField } from './StyledField';
import { StyledError } from './StyledError';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface CustomFieldProps extends FieldProps, FormikFieldProps {}

const CustomField = ({ field, placeholder }: CustomFieldProps) => (
  <StyledField {...field} placeholder={placeholder} />
);

interface FieldProps {
  type: string;
  name: string;
  placeholder?: string;
}

export const Field = ({ type, name, placeholder }: FieldProps) => (
  <Container>
    <FormikField
      type={type}
      name={name}
      component={CustomField}
      placeholder={placeholder}
    />
    <ErrorMessage data-testid="error" name={name} component={StyledError} />
  </Container>
);

Field.defaultProps = {
  type: 'text',
};
