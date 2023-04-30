import { Container } from 'app/components/Container';
import { Layout } from 'app/components/Layout';
import { Section } from 'app/components/Section';
import { Title } from 'app/components/Title';
import { EHeading } from 'app/types';
import { Grid } from 'app/components/Grid';
import { Inputs } from 'features/floorplan/components/Inputs';
import { Output } from 'features/floorplan/components/Output';

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <Section>
        <Container>
          <Title centered Tag={EHeading.H1}>
            Generate your Floormap
          </Title>
          <Grid>
            <Inputs />
            <Output />
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};
