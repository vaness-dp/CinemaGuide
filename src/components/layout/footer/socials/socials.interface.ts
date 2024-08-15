import * as BootstrapIcons from 'react-icons/bs'

export type TypeBootstrapIconName = keyof typeof BootstrapIcons

export interface IIconProps {
	name: TypeBootstrapIconName
}

export interface ISocials {
	link: string
	icon: TypeBootstrapIconName
}
