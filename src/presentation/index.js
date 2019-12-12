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
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

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

const code = {
  blob: {
    creation: () => require('../assets/code/blob/01-blob-create-file.example'),
    hashObject: () => require('../assets/code/blob/02-blob-hash-object.example'),
    verification: () => require('../assets/code/blob/03-blob-verify-data.example'),
  },
};

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
          <Heading fit>Let's check this out</Heading>

          <P>We will version a file <Strong>manually</Strong>:</P>

          <Appear>
            <div>
              <CodePane textSize={22} lang={'clike'} source={code.blob.creation()}/>
            </div>
          </Appear>

          <Appear>
            <div>
              <CodePane textSize={22} lang={'clike'} source={code.blob.hashObject()}/>
            </div>
          </Appear>

          <Appear>
            <div>
              <CodePane textSize={22} lang={'clike'} source={code.blob.verification()}/>
            </div>
          </Appear>

          <Appear>
            <P fit>
              As we can see, git now has a blob with our file's content.
              This will be v1 of <Strong>some-file.txt</Strong>.
            </P>
          </Appear>
        </Slide>

        <Slide>
          <P>Let's add another line to the file:</P>

          <Appear>
            <CodePane textSize={22} lang={'clike'} source={'echo \'a new line\' >> some-file.txt'}/>
          </Appear>

          <Appear>
            <CodePane textSize={22} lang={'clike'} source={'$ git hash-object -w some-file.txt\n' +
            '1aeaedbf4ee8dccec5bc2b1f1168efef19378ffd'}/>
          </Appear>

          <Appear>
            <CodePane textSize={22} lang="clike" source={'$ find .git/objects\n' +
            '.git/objects\n' +
            '.git/objects/1a\n' +
            '.git/objects/1a/eaedbf4ee8dccec5bc2b1f1168efef19378ffd\n' +
            '.git/objects/d6\n' +
            '.git/objects/d6/75fa44e50606caa705c3f48de02cf129c7f9a2'}/>
          </Appear>

          <Appear><P>Now we have both versions of our file.</P></Appear>
        </Slide>

        <Slide>
          <P>Let's see both versions</P>

          <Appear>
            <CodePane textSize={22} lang="clike" source={'$ git cat-file d675fa44e50606caa705c3f48de02cf129c7f9a2\n' +
            'testing blobs'}/>
          </Appear>

          <Appear>
            <CodePane textSize={22} lang="clike" source={'$ git cat-file 1aeaedbf4ee8dccec5bc2b1f1168efef19378ffd\n' +
            'testing blobs\n' +
            'a new line'}/>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit margin={'0 0 30px'}>But we lost the filenames in the process!</Heading>

          <Appear>
            <P>Yes, for now we'll do this manually...</P>
          </Appear>

          <Appear>
            <div>
              <P>Restore v1:</P>
              <CodePane textSize={22} lang="clike" source={'git cat-file d675fa4... > some-file.txt'}/>
            </div>
          </Appear>

          <Appear>
            <div>
              <P>Restore v2:</P>
              <CodePane textSize={22} lang="clike" source={'git cat-file 1aeaedb... > some-file.txt'}/>
            </div>
          </Appear>

          <Appear>
            <P textSize={16}>
              Of course this is ridiculously impractical, but is (a really
              simplified version of) what Git does under the hood
            </P>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>
            Enter the <Strong textColor={'red'}>Tree</Strong> object
          </Heading>

          <Appear>
            <div>
              <P>
                A <Strong>tree</Strong> references other <Strong>trees</Strong> and
                <Strong> blobs</Strong>.
              </P>
              <P>
                It also stores the <Strong>filename</Strong> that correspond to
                each tree and blob it contains.
              </P>
            </div>
          </Appear>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Heading fit>This is what a tree looks like</Heading>

          <Img src={'tree-object.svg'}/>
        </Slide>

        <Slide bgColor={'secondary'} textColor={'primary'}>
          <Heading fit>And this is what a tree file actually stores</Heading>

          <Table>
            <TableHeader>
              <TableHeaderItem textSize={16}>mode</TableHeaderItem>
              <TableHeaderItem textSize={16}>type</TableHeaderItem>
              <TableHeaderItem textSize={16}>hash</TableHeaderItem>
              <TableHeaderItem textSize={16}>name</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem textSize={16}>100755</TableItem>
                <TableItem textSize={16}>tree</TableItem>
                <TableItem textSize={16}>05fd5a3</TableItem>
                <TableItem textSize={16}>src</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={16}>100644</TableItem>
                <TableItem textSize={16}>blob</TableItem>
                <TableItem textSize={16}>d3ef0cc</TableItem>
                <TableItem textSize={16}>README.md</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide>
          <Heading fit>Hmm... it looks suspiciously like a filesystem...</Heading>

          <Appear>
            <P>That's because it's Git's representation of the files in the repository.</P>
          </Appear>

          <Appear>
            <P>
              A <Strong>tree</Strong> corresponds to a <Strong>directory</Strong>
            </P>
          </Appear>
          <Appear>
            <P>
              A <Strong>blob</Strong> corresponds to <Strong>file contents
              </Strong> (similar to inodes).
            </P>
          </Appear>
        </Slide>

        <Slide>
          <P>
            You may have noticed that blobs and trees are identified by a <Strong>hash</Strong>
          </P>
        </Slide>

        <Slide>
          <P fit>
            It's a <Strong>SHA1 checksum</Strong>
          </P>
        </Slide>

        <Slide>
          <Img src={'oh-i-see.gif'}/>
        </Slide>

        <Slide>
          <P textSize={34}>
            A <Strong>checksum</Strong> is a <Strong>hash</Strong> derived from
            a <Strong>block of data</Strong>
          </P>

          <Appear>
            <P>
              The purpose is to <Strong>detect changes</Strong> that may be
              introduced to a file.
            </P>
          </Appear>

          <Appear>
            <P>
              <Strong>Willingly</Strong> by editing
            </P>
          </Appear>

          <Appear>
            <P>
              Or <Strong>unwillingly</Strong>, caused during data transmission or
              storage (file corruption).
            </P>
          </Appear>
        </Slide>

        <Slide>
          <P>
            <Strong>Commits</Strong>, <Strong>blobs</Strong>, and <Strong>trees
            </Strong> are <Strong textColor={'red'}>checksumed</Strong>
          </P>

          <Appear>
            <P>
              And the resulting <Strong>hash</Strong> is used to <Strong>
              identify</Strong> each of this <Strong>objects</Strong>.
            </P>
          </Appear>

          <Appear>
            <P>Which also means...</P>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>Data integrity FTW!</Heading>

          <Appear>
            <P>
              There is <Strong>no data change or corruption</Strong> that can go
              unnoticed to Git!
            </P>
          </Appear>
        </Slide>

        <Slide>
          <Img src={'magic.gif'}/>
        </Slide>
      </Deck>
    );
  }
}
