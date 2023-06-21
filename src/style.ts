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
`;

const Section = styled.section`
	padding: 21px 0;
	h3{
		margin-bottom: 15px;
	}
	@media (min-width: 768px){
		&.serachBar{
			display: none;
		}
	}
	
`;
const SectionFeatured = styled(Section)`
	background-color: ${props => props.theme.colors.gren['200']};
	h3{
		color: ${props => props.theme.colors.purple['100']};
	}
`;

const Button = styled.button`
    width: 288px;
    height: 55px;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.purple['200']};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
`;

export  {GlobalStyle, Section, SectionFeatured, Button};
