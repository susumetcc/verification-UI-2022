import type { NextPage } from 'next'
import Image from 'next/image'
import { css } from '@emotion/react'
import { ShareIcon } from '../components/icons/shareIcon';
import { YoutubeIcon } from '../components/icons/social-media/youtube';
import { InstagramIcon } from '../components/icons/social-media/instagram';
import { TwitterIcon } from '../components/icons/social-media/twitter';
import { TikTokIcon } from '../components/icons/social-media/tiktok';
import titleImage from '../public/dummy_image/title.png'
import grid1 from '../public/dummy_image/grid1.png'
import grid2 from '../public/dummy_image/grid2.png'
import grid3 from '../public/dummy_image/grid3.png'
import grid4 from '../public/dummy_image/grid4.png'
import grid5 from '../public/dummy_image/grid5.png'


const Home: NextPage = () => {
  const handleShareButton = () => {
    navigator.share(
      {
        title: "SelectBook",
        text: "SelectBook 買ってよかったものセレクト",
        url: 'https://lustrous-cupcake-7e2189.netlify.app/'
      }
    )
  }
  return (
    <div css={main}>
      <div css={titleBox} onClick={handleShareButton}>
        <p css={titleBoxText}>minch_pooh</p>
        <div css={shareIcon}>
          <ShareIcon />
        </div>
      </div>
        <Image src={titleImage} layout={"responsive"} />
      <div css={nameBox}>
        <p css={nameText}>みんち</p>
        <div css={snsIcons}>
          <a href="https://www.youtube.com/channel/UCMj894p-S4r5feXAPqDRBUg" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
          <a href="https://www.instagram.com/minchi_pooh/?hl=ja" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://twitter.com/minchi_pooh" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          <a href="https://www.tiktok.com/@minchi_pooh" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
        </div>
      </div>
      <div css={gridImage}>
        <Image src={grid1} width={120} height={120} />
        <Image src={grid2} width={120} height={120} />
        <Image src={grid3} width={120} height={120} />
        <Image src={grid4} width={120} height={120} />
        <Image src={grid5} width={120} height={120} />
      </div>
    </div>
  )
}

const main = css`
display: flex;
justify-content: center;
flex-direction: column;
`;
const titleBox = css`
color: var(--color-Gray-800);
display: flex;
align-items: center;
justify-content: center;
height: 48px;
`;
const shareIcon = css`
margin-left: auto;
margin-right: 3vw;
`;
const titleBoxText = css`
  font-size: 16px;
  display: flex;
  margin-left: 40vw;
`;
const nameBox = css`
display: flex;
height: 86px;
justify-content: space-between;
align-items: center;
margin: 0 18px;
`;
const nameText = css`
font-size: 18px;
`;
const snsIcons = css`
display: flex;
align-items: center;
gap: 16px;
`;
const gridImage = css`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
column-gap: 4px;
row-gap: 4px;
margin: 0 2vw;
`;
export default Home
