import Page from '@layouts/Page';
import Section from '@layouts/Section';
import { Home } from '@components/index';

export default function main() {
  return (
    <Page title="Home">
      <Section>
        <Home />
      </Section>
    </Page>
  );
}
