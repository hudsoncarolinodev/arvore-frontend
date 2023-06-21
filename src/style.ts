import { createGlobalStyle, styled } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

	*::before,
	*::after {
	  box-sizing: border-box;
	  margin: 0;
	  font-weight: normal;
	}
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video, input, button {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
		outline: none;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body{
		font-family: 'Inter', sans-serif;
	}
	@media (min-width: 768px){
		.hidden-dektop{
			display: none;
		}
	}
`;

const Section = styled.section`
	padding: 21px 0;
	h3{
		margin-bottom: 15px;
	}
	
	@media (min-width: 768px){
		&.hidden-dektop{
			display: none;
		}
		&.grid{
			display: flex;
			justify-content: space-between;
			max-width: 1200px;
			margin: 0 auto;
			&>aside{
				max-width: 230px;
			}
			&>div{
				max-width: 744px;
				padding: 0;
				margin: 0;
			}
		}
	}
	
`;
const SectionFeatured = styled(Section)`
	background-color: ${props => props.theme.colors.gren['200']};
	padding: 40px 0;
	h3{
		color: ${props => props.theme.colors.purple['100']};
		font-size: 22px;
	}
`;

const Button = styled.button`
    width: 100%;
	max-width: 288px;
    height: 55px;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.purple['200']};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
`;

const ClearFilter = styled(Button)`
	background-color: ${props => props.theme.colors.gray['400']};
	margin-top: 10px;
`;

export  {GlobalStyle, Section, SectionFeatured, Button, ClearFilter};
