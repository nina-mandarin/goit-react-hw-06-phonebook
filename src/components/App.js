import React from 'react';
import styled from 'styled-components'

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import ThemeContext from '../context/ThemeContext';
import Layout from './Layout/Layout';

const App = () => {

  return (
    <ThemeContext>
      <Layout>
        <Section>
          <PageTitle>Phonebook</PageTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          <Filter />
          <ContactList />
        </Section>
      </Layout>
    </ThemeContext>
  )
}

const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 500;
`;

export default App;