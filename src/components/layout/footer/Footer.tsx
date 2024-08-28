import { CSSProperties } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import styles from './Footer.module.scss'
import { BootstrapIcon } from './socials/BootstrapIcon'
import { socialsData } from './socials/socials.data'

export function Footer({ style }: { style?: CSSProperties }) {
	return (
		<footer className={styles.footer} style={style}>
			<div className="container flex justify-between">
				<div className={styles.copyright}>
					<span>LLC "Multimedia Vision"</span>
					<span className="inline-flex items-center">
						<MaterialIcon name="MdCopyright" />
						All rights reserved
					</span>
				</div>

				<div className={styles.socials}>
					<ul>
						{socialsData.map((item) => (
							<li key={item.link}>
								<a href={item.link} target="_blank">
									<BootstrapIcon name={item.icon} />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
