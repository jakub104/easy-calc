// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
// Images
import hello from '../../Images/hello.png'

const hide = keyframes`
	from {
		opacity: 1;
		transform: scale(1);
	}
	/* 99% {
		opacity: 0;
		transform: scale(0.9);
	} */
	to {
		opacity: 0;
		transform: scale(0.9);
		/* height: 0; */
		display: none;
	}
`
const LoginAdComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-dark);
	z-index: 10;
	font-size: 20px;
	${props =>
		props.hide &&
		css`
			animation: ${hide} 0.3s both;
		`
	};
`

const Title = styled.h1`
	text-align: center;
	margin: 0;
	@media(max-height: 450px) {
		margin: 20px;
	}
	@media (min-width: 1000px) {
		font-size: 50px;
	}
`

const Image = styled.img`
	display: block;
	height: 50vh;
	max-height: 500px;
	max-height: 90vw;
	max-width: 500px;
	max-width: 90vw;
	margin: 0 auto;
	@media(max-height: 550px) {
		height: calc(100px + 2hmin);
	}
	@media(max-height: 450px) {
		display: none;
	}
`
const LogIn = styled.button`
	position: relative;
	font-size: 20px;
	padding: 10px 20px;
	margin-top: 20px;
	background-color: transparent;
	border-radius: 20px;
	border: 2px solid var(--color-main);
	color: var(--color-primary);
	transition: all 0.5s ease;
	overflow: hidden;
	::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-main);
		opacity: 0.5;
		filter: blur(5px);
		transform: translateX(-150px) skewX(-15deg);
	}
	:hover {
		cursor: pointer;
		background-color: var(--color-main);
		color: var(--color-dark);
		::before {
			transform: translate(200px) skewX(-15deg);
			opacity: 0.6;
			transition: all 0.7s ease;
		}
	}
`
const Skip = styled.button`
	border: none;
	background-color: inherit;
	padding: 14px 28px;
	font-size: 20px;
	cursor: pointer;
	display: inline-block;
	color: var(--color-secondary);
	outline: none;
	transition: color 0.3s ease;
	:hover {
		color: var(--color-primary);
	}
`

class LoginAd extends Component {
	render() {
		return (
			<LoginAdComponent hide={this.props.hide}>
				<Title>Zapisz swoje osiągnięcia!</Title>
				<Image src={hello} />
				<LogIn onClick={this.props.onClick}>Zaloguj się</LogIn>
				<Skip onClick={this.props.onBack}>Pomiń</Skip>
			</LoginAdComponent>
		);
	}
}

export default LoginAd