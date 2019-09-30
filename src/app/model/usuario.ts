export class Usuario {
    //classe descritora do usuario
    private _nome: string;
    private _login: string;
    private _senha: string;

    constructor(nome?: string, login?: string, senha?: string) {
     this._nome = nome;
     this._login = login;
     this._senha = senha;
    }
    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
    }
    

    /**
     * Getter login
     * @return {string}
     */
	public get login(): string {
		return this._login;
	}
    /**
     * Setter login
     * @param {string} value
     */
	public set login(value: string) {
		this._login = value;
    }

    /**
     * Getter senha
     * @return {string}
     */
	public get senha(): string {
		return this._senha;
	}
    /**
     * Setter senha
     * @param {string} value
     */
	public set senha(value: string) {
		this._senha = value;
	}
}
