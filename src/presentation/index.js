// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
} from 'spectacle';

import {P, Bordered, Strong, Img} from './customElements';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    black: 'black',
    primary: '#111',
    secondary: '#CECECE',
    // secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#1F2022',
    red: '#e63c3c',
  },
  {
    primary: '"Press Start 2P"',
    secondary: 'Montserrat',
  }
);

export default class Index extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['slide', 'spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            All Your <Strong>History</Strong>
          </Heading>

          <Image src={'allurbase.png'}/>

          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Are Belong To <Strong>Git</Strong>
          </Heading>
          {/*<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>*/}
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} fit margin="0 0 30px">
            We are all using <Strong>Git</Strong> already
          </Heading>
          <Appear>
            <Heading size={2} textColor={'tertiary'}>right??</Heading>
          </Appear>
          <Appear>
            <Heading>ಠ_ಠ</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor={'secondary'}>but...</Text>
          <Appear>
            <Image src="noidea.jpg" />
          </Appear>
        </Slide>



        {/* TOPIC: WTF is Git */}



        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor={'secondary'} margin={'0 0 30px'}>so...</Heading>
          <Heading size={6} textColor="secondary" caps margin={'0 0 30px'}>
            WTF is <Strong>Git</Strong>?
          </Heading>
          <Appear>
            <Heading size={4} textColor={'secondary'}>
              <hr/>
              A <Strong>DAG</Strong> of <Strong>Snapshots</Strong>
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={'dag-wat.jpg'}>
          <Heading margin={'0 0 0 -500px'}>huh?</Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor={'secondary'}>
            <Strong>D</Strong>irected <Strong>A</Strong>cyclic <Strong>G</Strong>raph
          </Heading>
        </Slide>

        <Slide bgImage={'dr-evil-right.gif'} bgSize={'contain'} bgRepeat={'no-repeat'}>
        </Slide>

        <Slide>
          <Text textColor={'secondary'}>
            A <Strong>Directed Graph</Strong> with <Strong>No Directed Cycles</Strong>
          </Text>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Text fit>A collection of <Strong>vertices</Strong> / <Strong>nodes</Strong></Text>
          <Text fit>and <Strong>unidirectional edges</Strong> that connect them</Text>

          <Image src={'dag-node-edges.svg'} margin={'30px auto'} />

          <Text fit>there is <Strong>no way</Strong> to start at any vertex <Strong>V</Strong></Text>
          <Text fit>and cycle back to <Strong>V</Strong> again</Text>

        </Slide>

        <Slide>
          <Text textColor={'secondary'} fit margin={'0 0 30px'}>The difference with a tree is that</Text>

          <Appear>
            <Text textColor={'tertiary'} margin={'0 0 30px'}>nodes in a DAG can have multiple parents</Text>
          </Appear>

          <Appear>
            <Text textColor={'secondary'}>A tree doesn't allow nodes to have multiple parents.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Text textColor={'secondary'} margin={'0 0 30px'}>
            The most common case of this in Git is when you do a merge.
          </Text>

          <Appear>
            <Text textColor={'tertiary'} margin={'0 0 30px'}>
              A merge commit will have all of the commits that were merged as parents.
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Heading size={6}>This may look like a tree</Heading>

          <Image src={'tree-graph.svg'} margin={'30px auto'} />

          <Text fit>
            Only one parent per node/vertex
          </Text>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Heading size={6}>But it's really a <Strong>DAG</Strong></Heading>

          <Image src={'dag-graph.svg'} margin={'30px auto'} />

          <Text fit>
            The <Strong textColor={'red'}>red</Strong> node represents a <Strong>merge commit</Strong>
          </Text>
        </Slide>



        {/* TOPIC: Snapshots vs Diffs */}



        <Slide>
          <Heading textColor={'secondary'} fit>
            <Strong>Snapshots</Strong> vs <Strong>Diffs</Strong>
          </Heading>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Text fit>Most VCSs store only the file differences (deltas)</Text>

          <Image src={'diffs-table.svg'} margin={'30px auto'} />
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Text fit>While Git stores <Strong>snapshots</Strong></Text>

          <Image src={'snapshots-table.svg'} margin={'30px auto 60px'} />

          <Text fit>
            <Strong>Efficient:</Strong> If a file didn't change, a link to the previous version is stored
          </Text>
        </Slide>



        {/* TOPIC: Commit */}



        <Slide>
          <Heading fit margin={'0 0 60px'}>What is a Commit made of?</Heading>

          <Appear>
            <Text textColor={'secondary'} textSize={24}>
              A <Strong>commit</Strong> is made of <Strong>snapshots</Strong> of the files at a given point in time.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit margin={'0 0 60px'}>It also contains some other information</Heading>

          <Text textColor={'secondary'} textSize={24}>
            <List>
              <Appear><ListItem textSize={22}>Id (hash)</ListItem></Appear>
              <Appear><ListItem textSize={22}>Author</ListItem></Appear>
              <Appear><ListItem textSize={22}>Committer</ListItem></Appear>
              <Appear><ListItem textSize={22}>Comment</ListItem></Appear>
              <Appear><ListItem textSize={22}>Parent commits (if any)</ListItem></Appear>
              <Appear><ListItem textSize={22}>Tree</ListItem></Appear>
              <Appear><ListItem textSize={22}>Date</ListItem></Appear>
            </List>
          </Text>
        </Slide>

        <Slide>
          <P textColor={'secondary'}>Wait a second...</P>

          <P textColor={'tertiary'} fit>Aren't Author & Commiter the same thing?</P>

          <P textColor={'secondary'}>Actually... no! Let me explain</P>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <BlockQuote>
            <Quote textSize={22}>The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.</Quote>
            <Cite textSize={16}>Pro Git - 2.3 Git Basics - Viewing the Commit History</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <P textColor={'secondary'}>When would they differ?</P>

          <Appear>
              <P>Patches</P>
          </Appear>

          <Appear>
              <P>Rebase</P>
          </Appear>
        </Slide>



        {/* TOPIC: Blobs, Trees, & Checksums */}



        <Slide>
          <P>This is all just <Strong>metadata</Strong></P>
          <Heading fit>What is a commit really made of?</Heading>
        </Slide>

        <Slide bgImage={'planes-trains-automobiles.jpg'}>
          <Bordered color={'#111'}>
            <Heading size={3} textColor={'white'}>Blobs, Tress, &amp; Checksums</Heading>
          </Bordered>
        </Slide>

        <Slide>
          <Img src={'the-blob-movie-poster.jpg'} />
        </Slide>

        <Slide>
          <P>
            <Strong>Git</Strong> is actually a very simple <Strong>key-value data store</Strong>.
          </P>

          <Appear>
            <P>You can feed it anything and it will store it and give you back a key.</P>
          </Appear>
        </Slide>

        <Slide>
          <P>The file it creates is called a <Strong>blob</Strong>.</P>

          <Appear>
            <P>It is the zlib-deflated representation of any given content.</P>
          </Appear>

          <Appear>
            <P>Git uses blobs to save the different versions of your files.</P>
          </Appear>
        </Slide>

        <Slide>
          <Heading>Let's check this out</Heading>

          <P>We will version a file manually:</P>
        </Slide>
      </Deck>
    );
  }
}
