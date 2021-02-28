import { TwitterTweetEmbed } from 'react-twitter-embed';
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap';

const DescriptionPara = styled.p`
	padding: 8px;
	/* color: #1CA1F2; */
	/* font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif; */
`

function ExposeDescription ({title, description}) {
	return (
		<div style={{padding: "16px 0px"}}>
			<span><strong>{title}</strong></span>
			<DescriptionPara>
				{description}
			</DescriptionPara>
		</div>
	)
}

const tweetIDfromURL = (url) => url.split('/').pop()

export default function ExposeCell({url}) {
	return (
		<Row style={{padding: '8px 0px', borderBottom: '1px solid #eee'}}>
			<Col> <TwitterTweetEmbed tweetId={tweetIDfromURL(url)} /> </Col>
			<Col>
				<ExposeDescription title={"Misleading Headline"} description={"Wrong "}/>
			</Col>
		</Row>
	)
}