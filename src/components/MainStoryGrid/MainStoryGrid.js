import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
          <StoryList>
              {SECONDARY_STORIES.map((story, index) => (
                <VerticalStory key={story.id}>
                  <SecondaryStory {...story} />
                </VerticalStory>
              ))}
          </StoryList>

      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalOpinion key={story.id}>
              <OpinionStory {...story} />
            </VerticalOpinion>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    gap: 0px;
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }

`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStory = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`

const VerticalOpinion = styled(VerticalStory)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    overflow: auto;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }

`;

export default MainStoryGrid;
