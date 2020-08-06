import React from 'react';
import styled from 'styled-components';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Field } from '../../../components/Field';
import { Button } from '../../../components/Button';
import { searchValidator, fetch } from '../../../utils';
import { media } from '../../../utils';

const SEARCH_FIELD_NAME = 'search';
const SEARCH_LIMIT = 12;
const API_KEY = window.GIPHY_API_KEY;
export const API_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

const SearchFormSchema = Yup.object().shape({
  [SEARCH_FIELD_NAME]: searchValidator.required('Required'),
});

const StyledForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export interface SearchFormProps {
  setSearchResults(value: []): void;
  clearSearchResults(): void;
}

export const SearchForm = ({
  setSearchResults,
  clearSearchResults,
}: SearchFormProps) => (
  <Formik
    initialValues={{ [SEARCH_FIELD_NAME]: '' }}
    validationSchema={SearchFormSchema}
    onSubmit={async ({ search }) => {
      clearSearchResults();
      const endpoint = `${API_ENDPOINT}&q=${search}&limit=${SEARCH_LIMIT}&offset=0`;
      const response = await fetch(endpoint);
      const data = response && response.data;
      if (data) {
        setSearchResults(data);
      } else {
        alert(response);
      }
    }}
  >
    {({ isValid, isSubmitting, handleSubmit }) => (
      <StyledForm>
        <Field
          type="text"
          name={SEARCH_FIELD_NAME}
          placeholder="What you looking for?"
        />
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          onClick={() => handleSubmit()}
        >
          Find GIF!
        </Button>
      </StyledForm>
    )}
  </Formik>
);
