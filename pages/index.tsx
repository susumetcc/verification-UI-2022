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
        url: `https://www.youtube.com/`
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
      <div css={hoge}>
        <Image src={titleImage} width={375} height={375} />
      </div>
      <div css={nameBox}>
        <p css={nameText}>みんち</p>
        <div css={snsIcons}>
        <YoutubeIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <TikTokIcon/>
        </div>
      </div>
      <div css={gridImage}>
          <Image src={grid1} width={120} height={120}/>
          <Image src={grid2} width={120} height={120}/>
          <Image src={grid3} width={120} height={120}/>
          <Image src={grid4} width={120} height={120}/>
          <Image src={grid5} width={120} height={120}/>
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
`;
const shareIcon = css`
margin-left: auto;
margin-right: 8px;
`;
const titleBoxText = css`
  font-size: 16px;
  display: flex;
  margin-left: 37vw;
`;
const hoge = css`
`;
const nameBox = css`
display: flex;
justify-content: space-between;
margin: 0 18px;
`;
const nameText = css`
font-size: 18px;
`;
const snsIcons = css`
display: flex;
align-items: center;
gap: 8px;
`;
const gridImage =css`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
column-gap: 4px;
row-gap: 4px;
`;
export default Home
