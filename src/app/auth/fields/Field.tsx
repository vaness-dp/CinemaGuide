import cn from 'clsx'
import { forwardRef } from 'react'

import { MaterialIcon } from '@/ui/icons/MaterialIcon'

import type { TypeMaterialIconName } from '@/shared/types/icons.types'

import styles from './Field.module.scss'

interface InputFieldProps {
	placeholder: string
	className?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
	icon: TypeMaterialIconName
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ type, placeholder, state, disabled, isNumber, className, icon, ...rest },
		ref
	) => {
		return (
			<div className={cn([styles.field], `${className}`)}>
				<label>
					<MaterialIcon name={icon} />
					<input
						ref={ref}
						disabled={disabled}
						type={type}
						placeholder={placeholder}
						className="rounded-lg p-4 pl-[45px] text-lg leading-6 text-black/40 bg-white border-black/40 border min-w-[340px]"
						onKeyDown={(event) => {
							if (
								isNumber &&
								!/[0-9]/.test(event.key) &&
								event.key !== 'Backspace' &&
								event.key !== 'Tab' &&
								event.key !== 'Enter' &&
								event.key !== 'ArrowLeft' &&
								event.key !== 'ArrowRight'
							) {
								event.preventDefault()
							}
						}}
						{...rest}
					/>
				</label>
			</div>
		)
	}
)

Field.displayName = 'field'
