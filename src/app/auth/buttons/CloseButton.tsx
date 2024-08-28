import { MaterialIcon } from '@/ui/icons/MaterialIcon'

export function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			className="absolute top-[18rem] right-[43rem] w-12 h-12 rounded-3xl bg-white text-black p-3"
			onClick={onClick}
		>
			<MaterialIcon name="MdClose" />
		</button>
	)
}
