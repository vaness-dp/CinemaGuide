import { IAuth } from '@/components/screens/auth/auth.interface'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

export function CloseButton({ onClose }: IAuth) {
	return (
		<button
			className="absolute top-0 -right-16 rounded-3xl bg-white text-black p-3"
			onClick={onClose}
		>
			<MaterialIcon name="MdClose" />
		</button>
	)
}
