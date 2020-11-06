import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import {
  grommet,
  Box,
  Button,
  Grommet,
  FormField,
  Heading,
  Select,
  TextArea,
  TextInput,
  MaskedInput,
} from "grommet";

import {
  useParams
} from "react-router-dom";

import { getCrawler, modifyCrawler } from "../api";

const CrawlerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'too Short!')
    .max(50, 'too Long!')
    .required('required'),
  url: Yup.string()
    .url('invalid url')
    .required('required'),
  desiredPrice: Yup.number()
    .required('required'),
});

export const CrawlerForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [record, setRecord] = useState({});
    let { id } = useParams();
    id = 1;

    useEffect(() => {
      const fetchData = async () => {
        setRecord(await getCrawler(id))
      };
   
      fetchData();
    }, [id]);

    return <Box align="center">
        <Box width="large" margin="large">
          <Heading>Set up a crawler</Heading>
          <Formik
            enableReinitialize
            initialValues={{ ...record }}
            validationSchema={CrawlerValidationSchema}
            validateOnBlur={submitted}
            validateOnChange={submitted}
            onSubmit={async (values, { setSubmitting }) => {
              // whatever submitting the form should entail
              // alert("Submitting\n" + JSON.stringify(values, null, 2));
              await modifyCrawler(values);
              setSubmitting();
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => (
              <form
                onSubmit={event => {
                  event.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
              >
                <FormField label="Name" error={errors.name}>
                  <TextInput
                    name="name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Url" error={errors.url}>
                  <MaskedInput
                    name="url"
                    mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
                    value={values.url || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Price you want" info='in local currency' error={errors.desiredPrice}>
                  <MaskedInput
                    name="desiredPrice"
                    placeholder="400"
                    mask={[{ regexp: /^[0-9]+$/ }]}
                    value={values.desiredPrice || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <Box
                  tag="footer"
                  margin={{ top: "medium" }}
                  direction="row"
                  justify="between"
                >
                  <Button size='large' label="Cancel" />
                  <Button size='large' type="submit" primary label="Create" />
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
};
