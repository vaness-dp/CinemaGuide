import { forwardRef } from 'react'

import { MaterialIcon } from '../icons/MaterialIcon'

import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', icon, style, ...rest }, ref) => {
		return (
			<div className={styles.field} style={style}>
				<label>
					<MaterialIcon name={icon} />
					<input ref={ref} type={type} placeholder={placeholder} {...rest} />
				</label>
				{error && <div className={styles.error}>{String(error.message)}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
