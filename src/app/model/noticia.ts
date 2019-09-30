export class Noticia {
    //número, título, data, publicado por, link de uma imagem para ser exibida e o conteúdo.
    private _numero: number;
    private _titulo: string;
    private _dataPublicacao: string;
    private _publicadorPor: string;
    private _link: string;
    private _conteudo: string;
     // control + shift + p generate getters and setters
     constructor(numero?: number, titulo?: string, dataAtual?: string, publicadoPor?: string, link?: string, conteudo?: string ) {
          this._numero = numero;
          this._titulo = titulo;
          this._dataPublicacao = dataAtual;
          this._publicadorPor = publicadoPor;
          this._link = link;
          this._conteudo = conteudo;
     }

    
     /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
    }

    /**
     * Getter titulo
     * @return {string}
     */
	public get titulo(): string {
		return this._titulo;
	}

    /**
     * Setter titulo
     * @param {string} value
     */
	public set titulo(value: string) {
		this._titulo = value;
    }

    /**
     * Getter publicadorPor
     * @return {string}
     */
	public get publicadorPor(): string {
		return this._publicadorPor;
	}

    /**
     * Setter publicadorPor
     * @param {string} value
     */
	public set publicadorPor(value: string) {
		this._publicadorPor = value;
    }

    /**
     * Getter link
     * @return {string}
     */
	public get link(): string {
		return this._link;
	}

    /**
     * Setter link
     * @param {string} value
     */
	public set link(value: string) {
		this._link = value;
    }

    /**
     * Getter conteudo
     * @return {string}
     */
	public get conteudo(): string {
		return this._conteudo;
	}

    /**
     * Setter conteudo
     * @param {string} value
     */
	public set conteudo(value: string) {
		this._conteudo = value;
     }


    /**
     * Getter dataPublicacao
     * @return {string}
     */
	public get dataPublicacao(): string {
		return this._dataPublicacao;
	}

    /**
     * Setter dataPublicacao
     * @param {string} value
     */
	public set dataPublicacao(value: string) {
		this._dataPublicacao = value;
	}

     
}
