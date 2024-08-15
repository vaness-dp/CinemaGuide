import { SyncLoader } from 'react-spinners'

export function Loader() {
	return (
		<div className="relative flex justify-center items-center z-10">
			<SyncLoader size={10} margin={1} color="#383b3d" loading={true} />
		</div>
	)
}
