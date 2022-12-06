import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { THEME, ThemeOption } from './data/providers/theme';

interface IColorScheme {
  primary: string;
  accent: string;
  accentLight: string;
  secondaryAccent: string;
  warningAccent: string;
  text: string;
  darkText: string;
  secondaryText: string;
  disabledText: string;
  textShadow: string;
  background: string;
  cardBackground: string;
  cardBackgroundInverse: string;
  loadingIndicatorStartEnd: string;
  loadingIndicatorMid: string;
  scrollBar: string;
  menuBackground: string;
  menuText: string;
  menuActiveBackground: string;
  listBackground: string;
  listBackgroundInverse: string;
  listItemHover: string;
  seperator: string;
  seperatorInverse: string;
  buttonBackground: string;
  buttonText: string;
  buttonDisabled: string;
  popupBackground: string;
  controlBackground: string;
  controlText: string;
  metricValue: string;
  graphBackground: string;
  graphGrid: string;
  scatterPrimary: string;
  scatterPrimaryInverse: string;
  graphLineOne: string;
  graphLineTwo: string;
  graphLineThree: string;
  graphLineFour: string;
  scoreboardCard: string;
  reactSelectPrimary: string;
  reactSelectPrimary75: string;
  reactSelectPrimary50: string;
  reactSelectPrimary25: string;
  reactSelectDanger: string;
  reactSelectDangerLight: string;
  reactSelectNeutral0: string;
  reactSelectNeutral5: string;
  reactSelectNeutral10: string;
  reactSelectNeutral20: string;
  reactSelectNeutral30: string;
  reactSelectNeutral40: string;
  reactSelectNeutral50: string;
  reactSelectNeutral60: string;
  reactSelectNeutral70: string;
  reactSelectNeutral80: string;
  reactSelectNeutral90: string;
  surface0: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surface6: string;
  surface8: string;
  surface12: string;
  surface16: string;
  surface24: string;
  target: string;
  population: string;
  positive: string;
  negative: string;
  optimal: string;
  warning: string;
  danger: string;
  tooltip: string;
  scatterPoint: string;
}

const darkMode: IColorScheme = {
  primary: 'rgb(0,90,112)',
  danger: '#ff000080',
  accent: '#46acb9',
  accentLight: '#7cdeed',
  secondaryAccent: '#333333',
  warningAccent: '#ffd740',
  text: 'rgba(255,255,255, .72)',
  darkText: 'rgba(0,0,0, .88)',
  secondaryText: 'rgba(255,255,255, .54)',
  disabledText: 'rgba(255,255,255, .1)',
  textShadow: '#000',
  background: '#121212',
  cardBackground: '#282828',
  cardBackgroundInverse: '#fff',
  loadingIndicatorStartEnd: 'rgba(25, 54, 54, 0.5)',
  loadingIndicatorMid: 'rgba(0, 0, 0, 0)',
  scrollBar: 'hsl(0, 0%, 20%)',
  menuBackground: '#212121',
  menuText: 'rgba(255,255,255, .72)',
  menuActiveBackground: 'rgb(0,90,112)',
  listBackground: '#1e1e1e',
  listBackgroundInverse: '#fff',
  listItemHover: '#2c2c2c',
  seperator: 'hsl(0, 0%, 5%)',
  seperatorInverse: 'rgba(0, 0, 0, 0.12)',
  buttonBackground: 'rgb(0,90,112)',
  buttonText: 'rgba(255,255,255, .72)',
  buttonDisabled: 'rgb(0, 70, 92)',
  popupBackground: '#272727',
  controlBackground: 'hsl(0, 0%, 20%)',
  controlText: 'rgba(255,255,255, .72)',
  metricValue: '#46acb9',
  graphBackground:
    'linear-gradient(to bottom right, #121212 30%, #174859 100%)',
  graphGrid: 'rgba(255,255,255, 0.24)',
  scatterPrimary: 'yellow',
  scatterPrimaryInverse: 'purple',
  graphLineOne: '#F6BD0F',
  graphLineTwo: '#DDDDDD',
  graphLineThree: '#478DB8',
  graphLineFour: '#8717ff',
  scoreboardCard: 'darkslategrey',
  reactSelectPrimary: 'hsl(192, 100%, 22%)',
  reactSelectPrimary75: 'hsl(192, 100%, 27%)',
  reactSelectPrimary50: 'hsl(192, 100%, 32%)',
  reactSelectPrimary25: 'hsl(192, 100%, 37%)',
  reactSelectDanger: '#DE350B',
  reactSelectDangerLight: '#FFBDAD',
  reactSelectNeutral0: 'hsl(0, 0%, 20%)',
  reactSelectNeutral5: 'hsl(0, 0%, 10%)',
  reactSelectNeutral10: 'hsl(0, 0%, 10%)',
  reactSelectNeutral20: 'hsl(0, 0%, 5%)',
  reactSelectNeutral30: 'hsl(0, 0%, 50%)',
  reactSelectNeutral40: 'hsl(0, 0%, 60%)',
  reactSelectNeutral50: 'hsl(0, 0%, 50%)',
  reactSelectNeutral60: 'hsl(0, 0%, 80%)',
  reactSelectNeutral70: 'hsl(0, 0%, 90%)',
  reactSelectNeutral80: 'hsl(0, 0%, 100%)',
  reactSelectNeutral90: 'hsl(0, 0%, 10%)',
  surface0: '#121212',
  surface1: '#1e1e1e',
  surface2: '#222222',
  surface3: '#242424',
  surface4: '#272727',
  surface6: '#2c2c2c',
  surface8: '#2e2e2e',
  surface12: '#333333',
  surface16: '#343434',
  surface24: '#383838',
  target: 'blue',
  population: 'green',
  positive: 'green',
  negative: 'red',
  optimal: 'lightgreen',
  warning: 'blue',
  scatterPoint: 'yellow',
  tooltip: 'rgb(99, 99, 99)',
};

const lightMode: IColorScheme = {
  primary: 'rgb(0,90,112)',
  danger: '#f44336',
  accent: '#46acb9',
  accentLight: '#7cdeed',
  warningAccent: '#ffd740',
  secondaryAccent: '#eee',
  text: 'rgba(0,0,0, .88)',
  darkText: 'rgba(0,0,0, .88)',
  secondaryText: 'rgba(0,0,0, 0.54)',
  disabledText: 'rgba(0,0,0, 0.3)',
  textShadow: 'transparent',
  background: '#455a64',
  cardBackground: '#fff',
  cardBackgroundInverse: '#fff',
  loadingIndicatorStartEnd: 'rgba(25, 54, 54, 0.5)',
  loadingIndicatorMid: 'rgba(0, 0, 0, 0)',
  scrollBar: '#121212',
  menuBackground: 'rgb(99, 120, 130)',
  menuText: 'rgba(255,255,255, 1)',
  menuActiveBackground: 'rgba(158,158,158,0.4)',
  listBackground: '#fff',
  listBackgroundInverse: '#fff',
  listItemHover: '#eee',
  seperator: 'rgba(0, 0, 0, 0.54)',
  seperatorInverse: 'rgba(0, 0, 0, 0.54)',
  buttonBackground: 'rgba(158,158,158,0.2)',
  buttonText: 'rgba(0,0,0, .88)',
  buttonDisabled: 'rgba(158, 158, 158, 0.2)',
  popupBackground: '#fff',
  controlBackground: '#eee',
  controlText: 'rgba(0,0,0, .88)',
  metricValue: '#000',
  graphBackground: '#fff',
  graphGrid: 'rgba(0,0,0, 0.24)',
  scatterPrimary: 'purple',
  scatterPrimaryInverse: 'purple',
  graphLineOne: '#0f1e5c',
  graphLineTwo: '#d6355c',
  graphLineThree: '#ff7c2e',
  graphLineFour: '#f15648',
  scoreboardCard: '#fff',
  reactSelectPrimary: '#2684FF',
  reactSelectPrimary75: '#4C9AFF',
  reactSelectPrimary50: '#B2D4FF',
  reactSelectPrimary25: '#DEEBFF',
  reactSelectDanger: '#DE350B',
  reactSelectDangerLight: '#FFBDAD',
  reactSelectNeutral0: 'hsl(0, 0%, 100%)',
  reactSelectNeutral5: 'hsl(0, 0%, 95%)',
  reactSelectNeutral10: 'hsl(0, 0%, 90%)',
  reactSelectNeutral20: 'hsl(0, 0%, 80%)',
  reactSelectNeutral30: 'hsl(0, 0%, 70%)',
  reactSelectNeutral40: 'hsl(0, 0%, 60%)',
  reactSelectNeutral50: 'hsl(0, 0%, 50%)',
  reactSelectNeutral60: 'hsl(0, 0%, 40%)',
  reactSelectNeutral70: 'hsl(0, 0%, 30%)',
  reactSelectNeutral80: 'hsl(0, 0%, 20%)',
  reactSelectNeutral90: 'hsl(0, 0%, 10%)',
  surface0: '#fff',
  surface1: '#fff',
  surface2: '#fff',
  surface3: '#fff',
  surface4: '#fff',
  surface6: '#fff',
  surface8: '#fff',
  surface12: '#fff',
  surface16: '#fff',
  surface24: '#fff',
  target: 'blue',
  population: 'green',
  positive: 'var(--color-material-500-green)',
  negative: 'var(--color-material-500-red)',
  optimal: 'lightgreen',
  warning: 'var(--color-material-500-yellow)',
  scatterPoint: 'var(--color-material-500-yellow)',
  tooltip: 'rgb(99, 99, 99)',
};
interface IGlobalStyleProps {
  colors: IColorScheme;
}

const GlobalStyles = createGlobalStyle`

  html {
		--color-text: ${(props: IGlobalStyleProps): string => props.colors.text};
		--color-dark-text: ${(props: IGlobalStyleProps): string =>
      props.colors.darkText};
		--color-warning-accent: ${(props: IGlobalStyleProps): string =>
      props.colors.warningAccent};
		--color-secondary-text: ${(props: IGlobalStyleProps): string =>
      props.colors.secondaryText};
		--color-disabled-text: ${(props: IGlobalStyleProps): string =>
      props.colors.disabledText};
		--color-text-shadow :${(props: IGlobalStyleProps): string =>
      props.colors.textShadow};
    --color-background:  ${(props: IGlobalStyleProps): string =>
      props.colors.background};
    --color-primary:  ${(props: IGlobalStyleProps): string =>
      props.colors.primary};
		--color-danger:  ${(props: IGlobalStyleProps): string => props.colors.danger};
    --color-accent:  ${(props: IGlobalStyleProps): string =>
      props.colors.accent};
    --color-accent-light: ${(props: IGlobalStyleProps): string =>
      props.colors.accentLight};
    --color-secondary-accent:  ${(props: IGlobalStyleProps): string =>
      props.colors.secondaryAccent};
				--color-card-background: ${(props: IGlobalStyleProps): string =>
          props.colors.cardBackground};
			  --color-card-background-inverse: ${(props: IGlobalStyleProps): string =>
          props.colors.cardBackgroundInverse};
				--color-indicator-start-end: ${(props: IGlobalStyleProps): string =>
          props.colors.loadingIndicatorStartEnd};
				--color-indicator-mid: ${(props: IGlobalStyleProps): string =>
          props.colors.loadingIndicatorMid};
				--color-menu-background: ${(props: IGlobalStyleProps): string =>
          props.colors.menuBackground};
				--color-menu-text: ${(props: IGlobalStyleProps): string =>
          props.colors.menuText};
				--color-menu-active-background: ${(props: IGlobalStyleProps): string =>
          props.colors.menuActiveBackground};
				--color-list-background: ${(props: IGlobalStyleProps): string =>
          props.colors.listBackground};
				--color-list-background-inverse: ${(props: IGlobalStyleProps): string =>
          props.colors.listBackgroundInverse};
				--color-list-item-hover: ${(props: IGlobalStyleProps): string =>
          props.colors.listItemHover};
				--color-seperator: ${(props: IGlobalStyleProps): string =>
          props.colors.seperator};
				--color-seperator-inverse: ${(props: IGlobalStyleProps): string =>
          props.colors.seperatorInverse};
				--color-button-background: ${(props: IGlobalStyleProps): string =>
          props.colors.buttonBackground};
				--color-button-text: ${(props: IGlobalStyleProps): string =>
          props.colors.buttonText};
				--color-button-disabled: ${(props: IGlobalStyleProps): string =>
          props.colors.buttonDisabled};
				--color-popup-background: ${(props: IGlobalStyleProps): string =>
          props.colors.popupBackground};
				--color-control-background: ${(props: IGlobalStyleProps): string =>
          props.colors.controlBackground};
				--color-control-text: ${(props: IGlobalStyleProps): string =>
          props.colors.controlText};
				--color-metric-value: ${(props: IGlobalStyleProps): string =>
          props.colors.metricValue};
				--color-graph-background: ${(props: IGlobalStyleProps): string =>
          props.colors.graphBackground};
				--color-graph-grid: ${(props: IGlobalStyleProps): string =>
          props.colors.graphGrid};
				--color-scatter-primary: ${(props: IGlobalStyleProps): string =>
          props.colors.scatterPrimary};
				--color-scatter-primary-inverse: ${(props: IGlobalStyleProps): string =>
          props.colors.scatterPrimaryInverse};
				--color-graph-line-one: ${(props: IGlobalStyleProps): string =>
          props.colors.graphLineOne};
				--color-graph-line-two: ${(props: IGlobalStyleProps): string =>
          props.colors.graphLineTwo};
				--color-graph-line-three: ${(props: IGlobalStyleProps): string =>
          props.colors.graphLineThree};
				--color-graph-line-four: ${(props: IGlobalStyleProps): string =>
          props.colors.graphLineFour};
			  --color-scoreboard-card: ${(props: IGlobalStyleProps): string =>
          props.colors.scoreboardCard};
				--color-react-select-primary: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectPrimary};
				--color-react-select-primary-75: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectPrimary75};
				--color-react-select-primary-50: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectPrimary50};
			  --color-react-select-primary-25: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectPrimary50};
			  --color-react-select-danger: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectDanger};
			  --color-react-select-danger-light: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectDangerLight};
			  --color-react-select-neutral-0: ${(props: IGlobalStyleProps): string =>
          props.colors.reactSelectNeutral0};
			 --color-react-select-neutral-5: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral5};
		   --color-react-select-neutral-10: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral10};
			--color-react-select-neutral-20: ${(props: IGlobalStyleProps): string =>
        props.colors.reactSelectNeutral20};
			 --color-react-select-neutral-30: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral30};
			 --color-react-select-neutral-40: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral40};
			 --color-react-select-neutral-50: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral50};
			 --color-react-select-neutral-60: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral60};
			 --color-react-select-neutral-70: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral70};
			 --color-react-select-neutral-80: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral80};
			 --color-react-select-neutral-90: ${(props: IGlobalStyleProps): string =>
         props.colors.reactSelectNeutral90};
				--color-surface-0: ${(props: IGlobalStyleProps): string =>
          props.colors.surface0};
				--color-surface-1: ${(props: IGlobalStyleProps): string =>
          props.colors.surface1};
				--color-surface-2: ${(props: IGlobalStyleProps): string =>
          props.colors.surface3};
				--color-surface-3: ${(props: IGlobalStyleProps): string =>
          props.colors.surface3};
				--color-surface-4: ${(props: IGlobalStyleProps): string =>
          props.colors.surface4};
				--color-surface-6: ${(props: IGlobalStyleProps): string =>
          props.colors.surface6};
				--color-surface-8: ${(props: IGlobalStyleProps): string =>
          props.colors.surface8};
			 --color-surface-12: ${(props: IGlobalStyleProps): string =>
         props.colors.surface12};
				--color-surface-16: ${(props: IGlobalStyleProps): string =>
          props.colors.surface16};
				--color-surface-24: ${(props: IGlobalStyleProps): string =>
          props.colors.surface24};
				--color-target: ${(props: IGlobalStyleProps): string => props.colors.target};
				--color-population: ${(props: IGlobalStyleProps): string =>
          props.colors.population};
				--color-positive: ${(props: IGlobalStyleProps): string =>
          props.colors.positive};
				--color-negative: ${(props: IGlobalStyleProps): string =>
          props.colors.negative};
				--color-optimal: ${(props: IGlobalStyleProps): string => props.colors.optimal};
				--color-warning: ${(props: IGlobalStyleProps): string => props.colors.warning};
				--color-scatter-point: ${(props: IGlobalStyleProps): string =>
          props.colors.scatterPoint};
				--color-tooltip: ${(props: IGlobalStyleProps): string => props.colors.tooltip};
				--gradient-graph-background: linear-gradient(to right bottom, #121212 30%, rgba(	23, 72, 89, .4) 100% );
				--shadow-elevation-0: none;
				--shadow-elevation-1: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
				--shadow-elevation-2: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
				--shadow-elevation-3: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
				--shadow-elevation-4: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	   --shadow-elevation-6: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
	   --shadow-elevation-8: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
				--shadow-elevation-12: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);
				--shadow-elevation-16: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);
				--shadow-elevation-24: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);
				--grid-gap: 15px;
				--graph-min-height: 400px;
				--color-material-500-red: #F44336;
				--color-material-500-pink: #E91E63;
				--color-material-500-purple: #9C27B0;
				--color-material-500-deep-purple: #673AB7;
				--color-material-500-indigo: #3F51B5;
				--color-material-500-blue: #2196F3;
				--color-material-500-light-blue: #18FFFF;
				--color-material-500-cyan: #00BCD4;
				--color-material-500-teal: #009688;
				--color-material-500-green: #4CAF50;
				--color-material-500-light-green: #8BC34A;
				--color-material-500-lime: #CDDC39;
				--color-material-500-yellow: #FFEB3B;
				--color-material-500-amber: #FFC107;
				--color-material-500-orange: #FF9800;
				--color-material-500-deep-orange: #FF5722;
				--color-material-500-brown: #795548;
				--color-material-500-gray: #9E9E9E;
				--color-material-500-blue-gray: #607D8B;
				height: 100%;

				.export-pdf {
					background-color: var( --color-background);
				}
			.flatpickr-calendar {
					background: rgb(99,99,99);
					.flatpickr-months {
							background: rgb(99,99,99);
						.flatpickr-month {
							background: rgb(99,99,99);
						}
					}
					.flatpickr-monthDropdown-months {
							background: rgb(99,99,99);
						.flatpickr-monthDropdown-month {
							background: rgb(99,99,99);
						}
					}
					.flatpickr-weekdays {
						background: rgb(99,99,99);
						span.flatpickr-weekday {
							background: rgb(99,99,99);
						}
					}
				}
		}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
 *::-webkit-scrollbar-thumb {
		background-color: ${(props: IGlobalStyleProps): string =>
      props.colors.scrollBar};
		border: 4px solid transparent;
		border-radius: 8px;
		background-clip: padding-box;
	}

	*::-webkit-scrollbar {
		width: 15px;
  border-left: 1px solid var(--color-seperator);
	}

	img {
    text-indent:-9999px;
	}


	body {
		background-color: ${(props: IGlobalStyleProps): string =>
      props.colors.background};
		color: ${(props: IGlobalStyleProps): string => props.colors.text};
		height:100%;
		padding: 0px;
		margin: 0px;
	}

body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
	font-family: 'Nunito Sans', sans-serif;
	font-weight: 100;
	color: var(--color-text);
	letter-spacing: -0.02em;
	// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
	font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

div,
p {
	font-size: calc(12px + (2) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (0.3) * ((100vw - 300px) / (1600 - 300)));
}

h1 {
	font-size: calc(22px + (34 - 24) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 100;
}

h3,
h4 {
	font-size: calc(18px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 100;
}

h5 {
	font-size: calc(14px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 100;
}

h6 {
	font-size: calc(12px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 100;
}

i {
	font-size: calc(50px + (10) * ((100vw - 300px) / (1600 - 300)));
}

a {
	text-decoration: none;
	color: inherit;
}



	#mount {
		height:100%;
	}

	textarea, textarea::placeholder {
   font-family: 'Nunito Sans', sans-serif;
}

.toggle {
	&.react-toggle--checked:hover:not(.react-toggle--disabled)
		.react-toggle-track {
		background-color: var(--color-accent);
	}
	&.react-toggle--focus .react-toggle-thumb {
		-webkit-box-shadow: 0px 0px 0px 0px #0099e000 !important;
		-moz-box-shadow: 0px 0px 0px 0px #0099e000 !important;
		box-shadow: 0px 0px 0px 0px #0099e000 !important;
	}
	&.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
		-webkit-box-shadow: 0px 0px 2.5px 2.5px var(--color-accent);
		-moz-box-shadow: 0px 0px 2.5px 2.5px var(--color-accent);
		box-shadow: 0px 0px 2.5px 2.5px var(--color-accent);
	}
	&.react-toggle--checked {
		.react-toggle-track {
			background-color: var(--color-accent);
		}

		.react-toggle-thumb {
			border-color:var(--color-accent);
		}
	}
}

hr {
		height: 1px;
		border: none;
		background-color: var(--color-seperator);
}

	.menu-item-wrapper {
		&:focus {
			outline: none;
		}
	}




`;

export const Theme = (): React.ReactElement => {
  const [theme, setTheme] = React.useState<IColorScheme>(darkMode);
  React.useEffect((): (() => void) => {
    const themeOptions = new ThemeOption();
    const subscriber = themeOptions.stream.subscribe(
      (requestedTheme: THEME): void => {
        if (requestedTheme === 'darkMode') setTheme(darkMode);
        if (requestedTheme === 'lightMode') setTheme(lightMode);
      }
    );

    return (): void => subscriber.unsubscribe();
  }, []);
  return <GlobalStyles colors={theme} />;
};

interface IOverride {
  override?: boolean;
}
export const OverrideDarkMode = styled.div<IOverride>`
  --color-text: ${(props: IOverride): string =>
    props.override ? lightMode.text : darkMode.text};
  --color-dark-text: ${(props: IOverride): string =>
    props.override ? lightMode.darkText : darkMode.darkText};
  --color-secondary-text: ${(props: IOverride): string =>
    props.override ? lightMode.secondaryText : darkMode.secondaryText};
  --color-disabled-text: ${(props: IOverride): string =>
    props.override ? lightMode.disabledText : darkMode.disabledText};
  --color-text-shadow: ${(props: IOverride): string =>
    props.override ? lightMode.textShadow : darkMode.textShadow};
  --color-background: ${(props: IOverride): string =>
    props.override ? lightMode.background : darkMode.background};
  --color-primary: ${(props: IOverride): string =>
    props.override ? lightMode.primary : darkMode.primary};
  --color-danger: ${(props: IOverride): string =>
    props.override ? lightMode.danger : darkMode.danger};
  --color-accent: ${(props: IOverride): string =>
    props.override ? lightMode.accent : darkMode.accent};
  --color-accent-light: ${(props: IOverride): string =>
    props.override ? lightMode.accentLight : darkMode.accentLight};
  --color-secondary-accent: ${(props: IOverride): string =>
    props.override ? lightMode.secondaryAccent : darkMode.secondaryAccent};
  --color-card-background: ${(props: IOverride): string =>
    props.override ? lightMode.cardBackground : darkMode.cardBackground};
  --color-card-background-inverse: ${(props: IOverride): string =>
    props.override
      ? lightMode.cardBackgroundInverse
      : darkMode.cardBackgroundInverse};
  --color-indicator-start-end: ${(props: IOverride): string =>
    props.override
      ? lightMode.loadingIndicatorStartEnd
      : darkMode.loadingIndicatorStartEnd};
  --color-indicator-mid: ${(props: IOverride): string =>
    props.override
      ? lightMode.loadingIndicatorMid
      : darkMode.loadingIndicatorMid};
  --color-menu-background: ${(props: IOverride): string =>
    props.override ? lightMode.menuBackground : darkMode.menuBackground};
  --color-menu-text: ${(props: IOverride): string =>
    props.override ? lightMode.menuText : darkMode.menuText};
  --color-menu-active-background: ${(props: IOverride): string =>
    props.override
      ? lightMode.menuActiveBackground
      : darkMode.menuActiveBackground};
  --color-list-background: ${(props: IOverride): string =>
    props.override ? lightMode.listBackground : darkMode.listBackground};
  --color-list-background-inverse: ${(props: IOverride): string =>
    props.override
      ? lightMode.listBackgroundInverse
      : darkMode.listBackgroundInverse};
  --color-list-item-hover: ${(props: IOverride): string =>
    props.override ? lightMode.listItemHover : darkMode.listItemHover};
  --color-seperator: ${(props: IOverride): string =>
    props.override ? lightMode.seperator : darkMode.seperator};
  --color-seperator-inverse: ${(props: IOverride): string =>
    props.override ? lightMode.seperatorInverse : darkMode.seperatorInverse};
  --color-button-background: ${(props: IOverride): string =>
    props.override ? lightMode.buttonBackground : darkMode.buttonBackground};
  --color-button-text: ${(props: IOverride): string =>
    props.override ? lightMode.buttonText : darkMode.buttonText};
  --color-button-disabled: ${(props: IOverride): string =>
    props.override ? lightMode.buttonDisabled : darkMode.buttonDisabled};
  --color-popup-background: ${(props: IOverride): string =>
    props.override ? lightMode.popupBackground : darkMode.popupBackground};
  --color-control-background: ${(props: IOverride): string =>
    props.override ? lightMode.controlBackground : darkMode.controlBackground};
  --color-control-text: ${(props: IOverride): string =>
    props.override ? lightMode.controlText : darkMode.controlText};
  --color-metric-value: ${(props: IOverride): string =>
    props.override ? lightMode.metricValue : darkMode.metricValue};
  --color-graph-background: ${(props: IOverride): string =>
    props.override ? lightMode.graphBackground : darkMode.graphBackground};
  --color-graph-grid: ${(props: IOverride): string =>
    props.override ? lightMode.graphGrid : darkMode.graphGrid};
  --color-scatter-primary: ${(props: IOverride): string =>
    props.override ? lightMode.scatterPrimary : darkMode.scatterPrimary};
  --color-scatter-primary-inverse: ${(props: IOverride): string =>
    props.override
      ? lightMode.scatterPrimaryInverse
      : darkMode.scatterPrimaryInverse};
  --color-graph-line-one: ${(props: IOverride): string =>
    props.override ? lightMode.graphLineOne : darkMode.graphLineOne};
  --color-graph-line-two: ${(props: IOverride): string =>
    props.override ? lightMode.graphLineTwo : darkMode.graphLineTwo};
  --color-graph-line-three: ${(props: IOverride): string =>
    props.override ? lightMode.graphLineThree : darkMode.graphLineThree};
  --color-graph-line-four: ${(props: IOverride): string =>
    props.override ? lightMode.graphLineFour : darkMode.graphLineFour};
  --color-scoreboard-card: ${(props: IOverride): string =>
    props.override ? lightMode.scoreboardCard : darkMode.scoreboardCard};
  --color-react-select-primary: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectPrimary
      : darkMode.reactSelectPrimary};
  --color-react-select-primary-75: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectPrimary75
      : darkMode.reactSelectPrimary75};
  --color-react-select-primary-50: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectPrimary50
      : darkMode.reactSelectPrimary50};
  --color-react-select-primary-25: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectPrimary50
      : darkMode.reactSelectPrimary50};
  --color-react-select-danger: ${(props: IOverride): string =>
    props.override ? lightMode.reactSelectDanger : darkMode.reactSelectDanger};
  --color-react-select-danger-light: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectDangerLight
      : darkMode.reactSelectDangerLight};
  --color-react-select-neutral-0: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral0
      : darkMode.reactSelectNeutral0};
  --color-react-select-neutral-5: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral5
      : darkMode.reactSelectNeutral5};
  --color-react-select-neutral-10: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral10
      : darkMode.reactSelectNeutral10};
  --color-react-select-neutral-20: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral20
      : darkMode.reactSelectNeutral20};
  --color-react-select-neutral-30: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral30
      : darkMode.reactSelectNeutral30};
  --color-react-select-neutral-40: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral40
      : darkMode.reactSelectNeutral40};
  --color-react-select-neutral-50: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral50
      : darkMode.reactSelectNeutral50};
  --color-react-select-neutral-60: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral60
      : darkMode.reactSelectNeutral60};
  --color-react-select-neutral-70: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral70
      : darkMode.reactSelectNeutral70};
  --color-react-select-neutral-80: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral80
      : darkMode.reactSelectNeutral80};
  --color-react-select-neutral-90: ${(props: IOverride): string =>
    props.override
      ? lightMode.reactSelectNeutral90
      : darkMode.reactSelectNeutral90};
  --color-surface-0: ${(props: IOverride): string =>
    props.override ? lightMode.surface0 : darkMode.surface0};
  --color-surface-1: ${(props: IOverride): string =>
    props.override ? lightMode.surface1 : darkMode.surface1};
  --color-surface-2: ${(props: IOverride): string =>
    props.override ? lightMode.surface3 : darkMode.surface3};
  --color-surface-3: ${(props: IOverride): string =>
    props.override ? lightMode.surface3 : darkMode.surface3};
  --color-surface-4: ${(props: IOverride): string =>
    props.override ? lightMode.surface4 : darkMode.surface4};
  --color-surface-6: ${(props: IOverride): string =>
    props.override ? lightMode.surface6 : darkMode.surface6};
  --color-surface-8: ${(props: IOverride): string =>
    props.override ? lightMode.surface8 : darkMode.surface8};
  --color-surface-12: ${(props: IOverride): string =>
    props.override ? lightMode.surface12 : darkMode.surface12};
  --color-surface-16: ${(props: IOverride): string =>
    props.override ? lightMode.surface16 : darkMode.surface16};
  --color-surface-24: ${(props: IOverride): string =>
    props.override ? lightMode.surface24 : darkMode.surface24};
  color: ${(props: IOverride): string =>
    props.override ? lightMode.text : darkMode.text};
`;
