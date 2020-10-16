import React from "react";
import { graphql } from "gatsby";

import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "normalize.css";

import SEO from "../components/SEO";

import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #c0ffee;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
	const item = data.prismicProduct.data;

	return (
		<>
			<SEO title="Welcome to the Challenge" />
			<Container>
				<div
					css={css`
						margin-bottom: 2rem;
						color: #ff00ff;
					`}
				>
					I want {item.quantity.text} of{` `}
					{item.title.text}, please.
				</div>
				<div
					css={css`
						color: white;
					`}
				>
					<Logo />
				</div>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "SOUP" } }) {
			id
			data {
				title {
					text
				}
				quantity {
					text
				}
			}
		}
	}
`;
