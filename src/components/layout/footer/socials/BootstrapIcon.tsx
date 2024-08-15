import { FC } from 'react'
import * as BootstrapIcons from 'react-icons/bs'

import { IIconProps } from './socials.interface'

export const BootstrapIcon: FC<IIconProps> = ({ name }) => {
	const IconComponent = BootstrapIcons[name]

	if (!IconComponent) return null

	return <IconComponent />
}
