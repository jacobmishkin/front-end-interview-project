import styled from 'styled-components';
import { device } from './GlobalStyles/Utils/device';
import Image from 'next/image';

const Wrapper = styled.div`
	max-width: 100%;
	@media ${device.tablet} {
		display: flex;
	}
	@media ${device.laptop} {
		margin: 0 auto;
		max-width: 737px;
	}
	.title__content {
		margin: 0 16px 0 16px;

		@media ${device.tablet} {
			margin-top: 58px;
		}
		p {
			font-size: 16px;
			line-height: 24px;
			font-weight: 400;
			margin: 0; 
		}
		h2 {
			margin-bottom: 0;
		}
	}
`
const ImageWrapper = styled.div`
width: 100%;
	> div {
		position: unset !important;
	}
		.image {
			object-fit: contain;
			width: 100% !important;
			position: relative !important;
			height: unset !important;
		}
		@media ${device.tablet} {
			margin-top: 58px;
			margin-left: 16px;

			.image {
				width: 387px !important;
				height: 185px !important;
			}
		}
		@media ${device.laptop} {
			margin-left: 0;
		}
	}
`

const Title = () => {
const url = '/title_image.png';
	return (
		<>
			<Wrapper>
				<ImageWrapper>
					<Image src={url} alt='Red Wine'  layout="fill" className={'image'}/>
				</ImageWrapper>	
			<div className={'title__content'}>
				<h2>Discover Aisle</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			</Wrapper>
		</>
	);
};
export default Title;
  