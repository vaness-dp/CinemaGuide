import cn from 'clsx'
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
					<input
						className={cn({ [styles['field-error']]: error })}
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
					/>
				</label>
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
