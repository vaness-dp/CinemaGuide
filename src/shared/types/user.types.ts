export interface IUser {
	name: string
	surname: string
	email: string
	favorites: string[]
}

// export interface IFormLogin extends Pick<IUser, 'email'> {
// 	password: string
// }

// export interface IFormRegister extends Omit<IUser, 'favorites'> {
// 	password: string
// }
