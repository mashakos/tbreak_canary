import { CountTimer } from '~/components/count-timer';
import { Heading } from '~/components/heading';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'CountTimer',
  args: {
    text: '23,024.3914',
  },
};

export const Text = ({ text }) => (
  <StoryContainer>
    <Heading level={3}>
      <CountTimer delay={0} text={text} />
    </Heading>
  </StoryContainer>
);
