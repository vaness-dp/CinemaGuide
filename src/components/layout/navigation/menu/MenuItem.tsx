import { NavLink } from 'react-router-dom'
import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<li>
			<NavLink
				to={item.link}
				className={({ isActive }) =>
					isActive ? 'menu-item link-underline mr-10' : 'menu-item mr-10'
				}
			>
				{item.title}
			</NavLink>
		</li>
	)
}
