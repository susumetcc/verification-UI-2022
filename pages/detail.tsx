import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/react';
import { ShareIcon } from '../components/icons/shareIcon';
import { RightArrow } from '../components/icons/rightArrow';
import Detail1 from '../public/dummy_image/detail1.png';
import userImage from '../public/dummy_image/userImage.png';
import grid1 from '../public/dummy_image/grid1.png'
import grid2 from '../public/dummy_image/grid2.png'
import grid3 from '../public/dummy_image/grid3.png'
import grid4 from '../public/dummy_image/grid4.png'
import grid5 from '../public/dummy_image/grid5.png'

export const Detail: NextPage = () => {
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
            <Head>
                <title>SelectBook-β</title>
            </Head>
            <div css={titleBox} onClick={handleShareButton}>
                <RightArrow />
                <p css={titleBoxText}>minch_pooh</p>
                <div css={shareIcon}>
                    <ShareIcon />
                </div>
            </div>
            <Image src={Detail1} layout={"responsive"} css={DetailImage} />
            <div css={userContainer}>
                <div css={user}>
                    <p css={userItemIndex}>ミニマルと高音質</p>
                </div>
                <div>
                    <div css={profile}>
                        <Image src={userImage} width={25} height={25} />
                        <p>minchi_pooh</p>
                    </div>
                    <div css={post_txt}>
                        <p>好きな言葉や文字をお肌に刻める指輪『Violet Mark』が可愛すぎる...🥹</p>
                        <p>内側に彫刻が施されていて、リングを外すとお肌に跡が残る最高のギミック。しかもオーダーメイド商品は￥18,000〜と結構お手ごろ。恋人との記念や、誕生日プレゼントに絶対喜ばれそう...💓</p>
                    </div>

                    <div css={valueBox}>
                        <p css={valueText}>￥23,600</p>
                        <p css={detailText}>バングアンドオルフセンススピーカー bluetooth ワイヤレス Beosound A1 2nd Generation GreyMist Amazon Alexa対応</p>
                    </div>
                    <button css={butttonStyle}>詳細をみる</button>
                </div>
            </div>
            <div css={otherItemBox}>
                <p css={otherItemIndex}>その他アイテム</p><hr css={border}></hr>
            </div>
            <div css={gridImage}>
                <Image src={grid1} width={64} height={64} />
                <Image src={grid2} width={64} height={64} />
                <Image src={grid3} width={64} height={64} />
                <Image src={grid4} width={64} height={64} />
                <Image src={grid5} width={64} height={64} />
            </div>

        </div>
    );

}
const main = css`
color:  var(--color-Black-1000);
margin: 0 16px;
`;
const titleBox = css`
display: flex;
align-items: center;
justify-content: space-between;
height: 48px;
`;
const titleBoxText = css``;
const shareIcon = css`
margin-right: 8px;
`;
const DetailImage = css`
display: flex;
justify-content: center;
align-items: center;

`;
const userContainer = css`
margin: 32px 0;
`;
const userItemIndex = css`
font-weight: bold;
font-size: 16px;
margin: 18px 0;
`;
const user = css`

`;
const profile = css`
display: flex;
gap: 8px;
margin: 18px 0;
`;
const post_txt = css`
font-size: 13px;
line-height: 190%;
letter-spacing: -0.3px;
margin-bottom: 32px;
`;
const butttonStyle = css`
width: 100%;
height: 40px;
background-color: var(--color-Black-1000);
color: var(--color-White-000);
border-radius: 8px;
border: none;
`;
const valueBox = css`
padding: 24px 0;
border-top: 1px solid var(--color-Gray-050);
`;
const valueText = css`
font-weight: bold;
font-size: 20px;
margin-bottom: 8px;
`;
const detailText = css`
font-size: 12px;
`;
const otherItemBox = css`
display: flex;
align-items: center;
`;
const border = css`
width: 260px;
border: none;
border-top: 1px solid var(--color-Gray-300);
`;
const otherItemIndex = css`
color: var(--color-Gray-300);
font-size: 12px;
`;
const gridImage = css`
margin: 0 12px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
grid-template-rows: repeat(3,1fr);
column-gap: 4px;
row-gap: 4px;
`;
export default Detail;